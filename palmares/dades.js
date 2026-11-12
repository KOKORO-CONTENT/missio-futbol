// "Palmarès": objectiu i 23 jugadors/es amb els seus títols (comprovats a Wikipedia el novembre del 2026).
// c = Champions · l = lligues nacionals (només 1a divisió) · p = Pilotes d'Or · m = Mundials · a = ascensos de categoria
// foto: dins de img/ (cara + espatlles sense fons). Es poden canviar els números o afegir-hi jugadors.
window.OBJECTIU = { c: 15, l: 50, p: 10, m: 5, a: 5 };
window.SKIPS = 3;
window.JUGADORS = [
  { id: "messi", nom: "Leo Messi", foto: "messi.png", c: 4, l: 12, p: 8, m: 1, a: 0 },
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "cristiano-ronaldo.png", c: 5, l: 7, p: 5, m: 0, a: 0 },
  { id: "iniesta", nom: "Andrés Iniesta", foto: "andres-iniesta.png", c: 4, l: 9, p: 0, m: 1, a: 0 },
  { id: "xavi", nom: "Xavi Hernández", foto: "xavi-hernandez.png", c: 4, l: 8, p: 0, m: 1, a: 0 },
  { id: "busquets", nom: "Sergio Busquets", foto: "sergio-busquets.png", c: 3, l: 9, p: 0, m: 1, a: 1 },
  { id: "pique", nom: "Gerard Piqué", foto: "gerard-pique.png", c: 4, l: 10, p: 0, m: 1, a: 0 },
  { id: "ramos", nom: "Sergio Ramos", foto: "sergio-ramos.png", c: 4, l: 7, p: 0, m: 1, a: 0 },
  { id: "ronaldo", nom: "Ronaldo Nazário", foto: "ronaldo-nazario.png", c: 0, l: 1, p: 2, m: 2, a: 0 },
  { id: "ronaldinho", nom: "Ronaldinho", foto: "ronaldinho.png", c: 1, l: 2, p: 1, m: 1, a: 0 },
  { id: "courtois", nom: "Thibaut Courtois", foto: "thibaut-courtois.png", c: 2, l: 7, p: 0, m: 0, a: 0 },
  { id: "lewandowski", nom: "Robert Lewandowski", foto: "robert-lewandowski.png", c: 1, l: 14, p: 0, m: 0, a: 1 },
  { id: "aitana", nom: "Aitana Bonmatí", foto: "aitana-bonmati.png", c: 4, l: 7, p: 3, m: 1, a: 0 },
  { id: "alexia", nom: "Alexia Putellas", foto: "alexia-putellas.png", c: 4, l: 8, p: 2, m: 1, a: 0 },
  { id: "rodri", nom: "Rodri", foto: "rodri.png", c: 1, l: 4, p: 1, m: 1, a: 0 },
  { id: "dembele", nom: "Ousmane Dembélé", foto: "ousmane-dembele.png", c: 2, l: 6, p: 1, m: 1, a: 0 },
  { id: "mbappe", nom: "Kylian Mbappé", foto: "kylian-mbappe.png", c: 0, l: 7, p: 0, m: 1, a: 0 },
  { id: "raphinha", nom: "Raphinha", foto: "raphinha.png", c: 0, l: 3, p: 0, m: 0, a: 0 },
  { id: "lamine", nom: "Lamine Yamal", foto: "lamine-yamal.png", c: 0, l: 3, p: 0, m: 1, a: 0 },
  { id: "coutinho", nom: "Philippe Coutinho", foto: "philippe-coutinho.png", c: 1, l: 3, p: 0, m: 0, a: 1 },
  { id: "stuani", nom: "Cristhian Stuani", foto: "cristhian-stuani.png", c: 0, l: 1, p: 0, m: 0, a: 3 },
  { id: "nacho", nom: "Nacho Fernández", foto: "nacho-fernandez.png", c: 6, l: 4, p: 0, m: 0, a: 0 },
  { id: "isco", nom: "Isco", foto: "isco.png", c: 5, l: 3, p: 0, m: 0, a: 0 },
  { id: "luuk", nom: "Luuk de Jong", foto: "luuk-de-jong.png", c: 0, l: 7, p: 0, m: 0, a: 0 }
];
