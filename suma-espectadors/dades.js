// Dades de "Suma espectadors". Capacitats aproximades (cal verificar-les abans de gravar): nom que es mostra, aforament i escuts.
// Les fotos són a img/estadis/<clau>.png.
window.ESTADIS = {
  "camp-nou": { nom: "Camp Nou", cap: 99354 },
  "bernabeu": { nom: "Santiago Bernabéu", cap: 83186 },
  "wembley": { nom: "Wembley", cap: 90000 },
  "metropolitano": { nom: "Metropolitano", cap: 70460 },
  "calderon": { nom: "Vicente Calderón", cap: 54907 },
  "san-siro": { nom: "San Siro", cap: 75817 },
  "allianz-arena": { nom: "Allianz Arena", cap: 75024 },
  "anfield": { nom: "Anfield", cap: 61276 },
  "old-trafford": { nom: "Old Trafford", cap: 74310 },
  "etihad": { nom: "Etihad", cap: 53400 },
  "el-sadar": { nom: "El Sadar", cap: 23576 },
  "montilivi": { nom: "Montilivi", cap: 14624 },
  "la-cartuja": { nom: "La Cartuja", cap: 68000 },
  "la-romareda": { nom: "La Romareda", cap: 33608 },
  "da-luz": { nom: "Estádio da Luz", cap: 64642 },
  "villamarin": { nom: "Benito Villamarín", cap: 60721 },
  "rcde": { nom: "RCDE Stadium", cap: 40500 },
  "coliseum": { nom: "Coliseum", cap: 16500 },
  "stamford-bridge": { nom: "Stamford Bridge", cap: 40341 },
  "parc-ol": { nom: "Parc OL", cap: 59186 },
  "olimpico": { nom: "Estadi Olímpic de Roma", cap: 70634 },
  "lusail": { nom: "Lusail", cap: 88966 },
  "maracana": { nom: "Maracanã", cap: 78838 },
  "principality": { nom: "Cardiff (Principality)", cap: 73931 },
  "luzhniki": { nom: "Luzhniki (Moscou)", cap: 81000 },
  "olimpiyskiy": { nom: "Olímpic de Kíiv", cap: 70050 },
  "parc-princeps": { nom: "Parc dels Prínceps", cap: 47929 },
  "vallecas": { nom: "Vallecas", cap: 14708 }
};
// Rondes: obj = suma d'espectadors a assolir, op = estadis que es poden triar (la solució és única).
window.RONDES = [
  { obj: 178711, op: ["san-siro", "parc-princeps", "stamford-bridge", "montilivi", "vallecas"] },
  { obj: 136350, op: ["vallecas", "coliseum", "luzhniki", "da-luz", "rcde"] },
  { obj: 269695, op: ["parc-ol", "olimpiyskiy", "san-siro", "metropolitano", "da-luz"] },
  { obj: 277207, op: ["la-cartuja", "da-luz", "olimpico", "principality", "parc-ol"] },
  { obj: 219486, op: ["bernabeu", "allianz-arena", "anfield", "parc-ol"] }
];
