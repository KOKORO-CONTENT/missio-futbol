// "Palmarès": objectius i banc de 27 jugadors/es. A cada partida surten tots, en ordre aleatori (l'ordre es comprova que sigui possible de completar).
// Palmarès actualitzats segons el "PROMPT 3" de Marc (16/11/2026); el que no hi surt és 0.
// c = Champions · l = lligues domèstiques · p = Pilotes d'Or · m = Mundials · a = ascensos de categoria · cc = Copa Catalunya
// foto: dins de img/ (cara + espatlles sense fons, retrats de Transfermarkt o de la web oficial del club).
window.OBJECTIU = { c: 17, l: 70, p: 10, m: 7, a: 6, cc: 1 };
window.JUGADORS = [
  { id: "busquets", nom: "Sergi Busquets", foto: "sergio-busquets.png", c: 3, l: 10, p: 0, m: 1, a: 1, cc: 2 },
  { id: "stuani", nom: "Stuani", foto: "cristhian-stuani.png", c: 0, l: 0, p: 0, m: 0, a: 2, cc: 1 },
  { id: "messi", nom: "Leo Messi", foto: "messi.png", c: 3, l: 13, p: 8, m: 1, a: 0, cc: 2 },
  { id: "modric", nom: "Luka Modrić", foto: "luka-modric.png", c: 6, l: 7, p: 1, m: 0, a: 0, cc: 0 },
  { id: "carvajal", nom: "Dani Carvajal", foto: "dani-carvajal.png", c: 5, l: 4, p: 0, m: 0, a: 0, cc: 0 },
  { id: "lewandowski", nom: "Lewandowski", foto: "robert-lewandowski.png", c: 1, l: 13, p: 0, m: 0, a: 0, cc: 0 },
  { id: "neuer", nom: "Manuel Neuer", foto: "manuel-neuer.png", c: 2, l: 13, p: 0, m: 1, a: 0, cc: 0 },
  { id: "ronaldinho", nom: "Ronaldinho", foto: "ronaldinho.png", c: 1, l: 3, p: 1, m: 1, a: 0, cc: 0 },
  { id: "aitana", nom: "Aitana Bonmatí", foto: "aitana-bonmati.png", c: 4, l: 11, p: 3, m: 1, a: 0, cc: 11 },
  { id: "iniesta", nom: "Andrés Iniesta", foto: "andres-iniesta.png", c: 4, l: 10, p: 0, m: 1, a: 0, cc: 0 },
  { id: "kane", nom: "Harry Kane", foto: "harry-kane.png", c: 0, l: 2, p: 1, m: 0, a: 0, cc: 0 },
  { id: "mbappe", nom: "Kylian Mbappé", foto: "kylian-mbappe.png", c: 0, l: 7, p: 0, m: 1, a: 0, cc: 0 },
  { id: "patri", nom: "Patri Guijarro", foto: "patri-guijarro.png", c: 4, l: 11, p: 0, m: 0, a: 0, cc: 11 },
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "cristiano-ronaldo.png", c: 5, l: 6, p: 5, m: 0, a: 0, cc: 0 },
  { id: "pedri", nom: "Pedri", foto: "pedri.png", c: 0, l: 3, p: 0, m: 1, a: 0, cc: 0 },
  { id: "raphinha", nom: "Raphinha", foto: "raphinha.png", c: 0, l: 3, p: 0, m: 0, a: 0, cc: 0 },
  { id: "lozano", nom: "Pol Lozano", foto: "pol-lozano.png", c: 0, l: 0, p: 0, m: 0, a: 2, cc: 0 },
  { id: "puado", nom: "Javi Puado", foto: "javi-puado.png", c: 0, l: 0, p: 0, m: 0, a: 1, cc: 0 },
  { id: "isco", nom: "Isco", foto: "isco.png", c: 5, l: 3, p: 0, m: 0, a: 0, cc: 0 },
  { id: "dembele", nom: "Dembélé", foto: "ousmane-dembele.png", c: 2, l: 6, p: 1, m: 1, a: 0, cc: 0 },
  { id: "xavi", nom: "Xavi Hernández", foto: "xavi-hernandez.png", c: 4, l: 9, p: 0, m: 1, a: 0, cc: 0 },
  { id: "urri", nom: "Urri", foto: "albert-orriols.png", c: 0, l: 0, p: 0, m: 0, a: 3, cc: 1 },
  { id: "alexia", nom: "Alèxia Putellas", foto: "alexia-putellas.png", c: 4, l: 10, p: 3, m: 1, a: 0, cc: 9 },
  { id: "neymar", nom: "Neymar", foto: "neymar.png", c: 1, l: 8, p: 0, m: 0, a: 0, cc: 0 },
  { id: "jenni", nom: "Jenni Hermoso", foto: "jenni-hermoso.png", c: 1, l: 8, p: 0, m: 1, a: 1, cc: 0 },
  { id: "maradona", nom: "Maradona", foto: "diego-maradona.png", c: 0, l: 3, p: 1, m: 1, a: 0, cc: 0 },
  { id: "zidane", nom: "Zidane", foto: "zinedine-zidane.png", c: 1, l: 3, p: 1, m: 1, a: 0, cc: 0 }
];
