#!/usr/bin/env node
// Exporta els grafismes d'una partida gravada com a vídeo amb alfa.
//
//   node exporta.mjs partida.json [--mirall] [--codec hevc|animation|prores|png] [--workers 6] [--fps 25] [--height 1080] [--size 1920x1080] [--vertical [--zoom 1] [--vx 0.5]]
//
// Torna a reproduir la partida en diversos Chrome sense finestra a la vegada (cadascun fa un tros del vídeo),
// sense càmera i amb fons transparent, i ajunta els trossos amb ffmpeg.
//   prores (per defecte): ProRes 4444 amb alfa, el que llegeixen bé After Effects, Premiere, Final Cut i DaVinci.
//   hevc: HEVC amb alfa (el format d'Apple), per maquinari: ràpid i unes 15 vegades més lleuger que ProRes.
//   animation: QuickTime Animation amb alfa, sense pèrdua.
//   png: carpeta amb un PNG per fotograma.
// Necessita Google Chrome i ffmpeg instal·lats.

import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile, mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { tmpdir, cpus } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const flag = (name, def) => { const i = args.indexOf("--" + name); return i < 0 ? def : args[i + 1]; };
const file = args.find(a => a.endsWith(".json"));
if (!file) { console.error("Ús: node exporta.mjs partida.json [--codec hevc|animation|prores|png] [--workers 6] [--fps 25] [--height 1080] [--size 1920x1080]"); process.exit(1); }

const session = JSON.parse(await readFile(file, "utf8"));
const fps = Number(flag("fps", 25));
// ProRes 4444 per defecte: After Effects no llegeix l'alfa de l'HEVC (es veu negre).
const codec = flag("codec", args.includes("--png") ? "png" : "prores");
const workers = Math.max(1, Number(flag("workers", Math.min(6, Math.max(1, cpus().length - 2)))));
const TAIL_MS = 3000;   // temps extra després de l'última acció
const even = n => Math.round(n / 2) * 2;
let width, height;
if (flag("size")) [width, height] = flag("size").split("x").map(Number);
else {
  // Per defecte es manté la proporció de la pantalla on es va jugar, perquè encaixi amb la gravació.
  height = Number(flag("height", 1080));
  const vp = session.viewport || { w: 16, h: 9 };
  width = even(height * vp.w / vp.h);
}
// --vertical: vídeo 1080x1920 (Shorts/Reels). Es renderitza igual i es talla una finestra 9:16 de l'escenari:
//   --zoom 1 = tota l'alçada, 2 = la meitat; --vx 0..1 = posició horitzontal de la finestra; --vy 0..1 = vertical (si zoom > 1).
const vertical = args.includes("--vertical");
// si el joc té disseny vertical propi (<meta name="vertical">), es renderitza directament a 1080x1920; si no, es talla l'escenari
const nativeV = vertical && (await readFile(path.join(here, "index.html"), "utf8")).includes('name="vertical"');
let clip = null, outW = width, outH = height;
if (nativeV) { width = outW = 1080; height = outH = 1920; }
else if (vertical) {
  const zoom = Number(flag("zoom", 1)), ch = height / zoom, cw = ch * 9 / 16;
  clip = { x: (width - cw) * Number(flag("vx", 0.5)), y: (height - ch) * Number(flag("vy", 0.5)), width: cw, height: ch, scale: 1920 / ch };
  outW = 1080; outH = 1920;
}
const lastT = session.events.length ? session.events[session.events.length - 1].t : 0;
const totalMs = Math.max(session.duration || 0, lastT + TAIL_MS);
const frames = Math.ceil(totalMs / 1000 * fps);
// --mirall: les peces canvien de costat (sense invertir-se) per quadrar amb el vídeo de la càmera frontal.
const mirror = args.includes("--mirall");
const base = file.replace(/\.json$/, "") + (mirror ? "-mirall" : "") + (vertical ? "-vertical" : "");
const ENC = {
  hevc: { ext: "mov", args: ["-c:v", "hevc_videotoolbox", "-alpha_quality", "0.9", "-b:v", Math.round(16 * (height / 1080) ** 2) + "M", "-tag:v", "hvc1", "-pix_fmt", "bgra"] },
  animation: { ext: "mov", args: ["-c:v", "qtrle", "-pix_fmt", "argb"] },
  prores: { ext: "mov", args: ["-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le", "-qscale:v", "9", "-vendor", "apl0"] }
};
if (codec !== "png" && !ENC[codec]) { console.error("Còdec desconegut: " + codec); process.exit(1); }
if (codec === "hevc" && process.platform !== "darwin") { console.error("L'HEVC amb alfa només es pot fer en Mac. Fes servir prores (per defecte) o animation."); process.exit(1); }

// ffmpeg: el del PATH, o el que instal·la winget a Windows encara que el PATH no s'hagi refrescat.
function findFfmpeg() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  if (process.platform !== "win32") return "ffmpeg";
  const local = process.env.LOCALAPPDATA || "";
  const links = path.join(local, "Microsoft", "WinGet", "Links", "ffmpeg.exe");
  if (existsSync(links)) return links;
  const pkgs = path.join(local, "Microsoft", "WinGet", "Packages");
  try {
    for (const d of readdirSync(pkgs).filter(n => n.startsWith("Gyan.FFmpeg"))) {
      for (const sub of readdirSync(path.join(pkgs, d))) {
        const exe = path.join(pkgs, d, sub, "bin", "ffmpeg.exe");
        if (existsSync(exe)) return exe;
      }
    }
  } catch (e) {}
  return "ffmpeg";
}
const FFMPEG = findFfmpeg();

// Servidor local mínim per a la pàgina del joc.
const TYPES = { ".html": "text/html; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".webp": "image/webp", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml" };
const server = createServer(async (req, res) => {
  try {
    const rel = decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/^\/+/, "") || "index.html";
    const full = path.join(here, rel);
    if (!full.startsWith(here)) throw new Error("fora de la carpeta");
    const body = await readFile(full);
    res.writeHead(200, { "content-type": TYPES[path.extname(full)] || "application/octet-stream" });
    res.end(body);
  } catch (e) { res.writeHead(404); res.end(); }
});
await new Promise(r => server.listen(0, "127.0.0.1", r));
const port = server.address().port;

const WIN = process.platform === "win32";
const firstExisting = list => list.find(p => p && existsSync(p));
const CHROME = process.env.CHROME || (WIN
  ? firstExisting([process.env.PROGRAMFILES, process.env["PROGRAMFILES(X86)"], process.env.LOCALAPPDATA].map(d => d && path.join(d, "Google", "Chrome", "Application", "chrome.exe")))
  : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
if (!CHROME) { console.error("No trobo Google Chrome. Instal·la'l o indica'n la ruta amb la variable CHROME."); process.exit(1); }
const children = new Set();
// Que l'ordinador no entri en repòs mentre s'exporta (si dorm, els Chrome sense finestra es pengen).
try {
  if (WIN) {
    const ps = `Add-Type -Name P -Namespace W -MemberDefinition '[DllImport("kernel32.dll")] public static extern uint SetThreadExecutionState(uint f);'; [W.P]::SetThreadExecutionState(0x80000003) | Out-Null; Wait-Process -Id ${process.pid} -ErrorAction SilentlyContinue`;
    spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", ps], { stdio: "ignore", windowsHide: true }).unref();
  } else spawn("caffeinate", ["-dimsu", "-w", String(process.pid)], { stdio: "ignore" }).unref();
} catch (e) {}
// El temporitzador s'esborra en acabar; si no, cada captura quedaria retinguda en memòria fins que salta.
const withTimeout = (p, ms, what) => {
  let id;
  return Promise.race([p, new Promise((_, j) => { id = setTimeout(() => j(new Error("temps esgotat: " + what)), ms); })]).finally(() => clearTimeout(id));
};
// Que cap Chrome ni ffmpeg quedi obert si l'export s'interromp.
for (const sig of ["exit", "SIGINT", "SIGTERM"]) process.on(sig, () => { for (const c of children) try { c.kill("SIGKILL"); } catch (e) {} if (sig !== "exit") process.exit(1); });

async function openChrome() {
  const profile = await mkdtemp(path.join(tmpdir(), "joc-export-"));
  const chrome = spawn(CHROME, ["--headless=new", "--remote-debugging-port=0", "--user-data-dir=" + profile, "--hide-scrollbars", "--no-first-run", "--mute-audio", `--window-size=${width},${height}`, "about:blank"], { stdio: ["ignore", "ignore", "pipe"] });
  children.add(chrome);
  const wsUrl = await new Promise((resolve, reject) => {
    let buf = "";
    chrome.stderr.on("data", d => { buf += d; const m = buf.match(/DevTools listening on (ws:\/\/\S+)/); if (m) resolve(m[1]); });
    chrome.on("exit", () => reject(new Error("Chrome s'ha tancat abans d'hora:\n" + buf)));
    setTimeout(() => reject(new Error("Chrome no respon")), 30000);
  });
  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let nextId = 1;
  const pending = new Map(), waiters = [];
  ws.onmessage = m => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) {
      for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i].method === msg.method) waiters.splice(i, 1)[0].resolve(msg.params);
    }
  };
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = nextId++; pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params, sessionId }));
  });
  const once = method => new Promise(resolve => waiters.push({ method, resolve }));
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const cdp = (method, params) => send(method, params, sessionId);
  const evaluate = async expression => {
    const r = await cdp("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  };
  await cdp("Page.enable");
  await cdp("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
  await cdp("Emulation.setDefaultBackgroundColorOverride", { color: { r: 0, g: 0, b: 0, a: 0 } });
  const loaded = once("Page.loadEventFired");
  await cdp("Page.navigate", { url: `http://127.0.0.1:${port}/index.html?render${mirror ? "&mirall" : ""}${nativeV ? "&vertical" : ""}${args.includes("--sense-titol") ? "&senseTitol" : ""}` });
  await loaded;
  await evaluate(`renderInit(${JSON.stringify(session)})`);
  const close = async () => { try { ws.close(); } catch (e) {} chrome.kill("SIGKILL"); children.delete(chrome); await rm(profile, { recursive: true, force: true }).catch(() => {}); };
  return { cdp, evaluate, close };
}

// Un treballador renderitza els fotogrames [from, to) i els passa al seu ffmpeg (o els desa com a PNG).
let done = 0;
async function work(w, from, to, out) {
  let c = await openChrome(), retries = 0;
  let ff = null;
  if (codec !== "png") {
    ff = spawn(FFMPEG, ["-v", "error", "-y", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-", ...ENC.animation.args, out], { stdio: ["pipe", "inherit", "inherit"] });
    children.add(ff);
  }
  try {
    for (let i = from; i < to; i++) {
      let data;
      try {
        await withTimeout(c.evaluate(`renderFrame(${i * 1000 / fps})`), 60000, "fotograma " + i);
        ({ data } = await withTimeout(c.cdp("Page.captureScreenshot", { format: "png", optimizeForSpeed: true, ...(clip ? { clip } : {}) }), 60000, "captura " + i));
      } catch (e) {
        // Si un Chrome es penja, se'n tanca i se n'obre un altre i es continua pel mateix fotograma.
        if (++retries > 8) throw e;
        process.stdout.write(`\n[tros ${w}] ${e.message}; reinicio el navegador\n`);
        await c.close();
        c = await openChrome();
        i--; continue;
      }
      const png = Buffer.from(data, "base64");
      if (!ff) await writeFile(path.join(out, `f_${String(i).padStart(6, "0")}.png`), png);
      else if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once("drain", r));
      done++;
    }
  } finally {
    await c.close();
    if (ff) { ff.stdin.end(); await new Promise(r => ff.on("exit", r)); children.delete(ff); }
  }
}

const t0 = Date.now();
const outFile = codec === "png" ? base + "-png" : `${base}-alfa.${ENC[codec].ext}`;
console.log(`${outW}x${outH} a ${fps} fps, ${frames} fotogrames (${(totalMs / 1000).toFixed(1)} s), ${workers} treballadors, còdec ${codec} -> ${outFile}`);
const timer = setInterval(() => {
  const pct = done / frames, el = (Date.now() - t0) / 1000;
  const left = pct > 0.01 ? Math.round(el / pct - el) : null;
  process.stdout.write(`\r${Math.round(pct * 100)} %` + (left != null ? `  (falten ~${Math.floor(left / 60)} min ${left % 60} s)` : "") + "   ");
}, 2000);

try {
  const tmp = await mkdtemp(path.join(tmpdir(), "joc-trossos-"));
  if (codec === "png") await mkdir(outFile, { recursive: true });
  const per = Math.ceil(frames / workers), parts = [];
  for (let w = 0; w < workers; w++) {
    const from = w * per, to = Math.min(frames, from + per);
    if (from >= to) break;
    parts.push({ from, to, out: codec === "png" ? outFile : path.join(tmp, `tros_${w}.mov`) });
  }
  await Promise.all(parts.map((p, w) => work(w, p.from, p.to, p.out)));
  if (codec !== "png") {
    const list = path.join(tmp, "llista.txt");
    // Barres normals: ffmpeg les accepta també a Windows i així no hi ha problemes d'escapament.
    await writeFile(list, parts.map(p => `file '${p.out.replace(/\\/g, "/").replace(/'/g, "'\\''")}'`).join("\n"));
    // Els trossos (Animation, sense pèrdua) s'ajunten i es codifiquen d'una sola tirada al format final.
    const enc = codec === "animation" ? ["-c", "copy"] : ENC[codec].args;
    process.stdout.write("\rAjuntant i codificant…            ");
    await new Promise((r, j) => spawn(FFMPEG, ["-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", list, ...enc, outFile], { stdio: "inherit" }).on("exit", c => c ? j(new Error("ffmpeg " + c)) : r()));
  }
  await rm(tmp, { recursive: true, force: true });
  clearInterval(timer);
  console.log(`\rFet en ${Math.round((Date.now() - t0) / 1000)} s: ${outFile}`);
} finally {
  clearInterval(timer);
  server.closeAllConnections?.();
  server.close();
}
process.exit(0);
