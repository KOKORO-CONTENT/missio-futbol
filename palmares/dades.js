// "Palmarès": objectius i banc de 27 jugadors/es. A cada partida surten tots, en ordre aleatori (l'ordre es comprova que sigui possible de completar).
// Fonts: secció "Honours" de la Viquipèdia (consultada el 12-13/11/2026), Transfermarkt i Viquipèdia en català (Copa Catalunya).
// c = Champions · l = lligues nacionals de 1a divisió (inclou les finals de playoff de MLS/NWSL/WPS) · p = Pilotes d'Or
// m = Mundials · a = ascensos de categoria · cc = Copa Catalunya
// foto: dins de img/ (cara + espatlles sense fons, retrats de Transfermarkt o de la web oficial del club).
window.OBJECTIU = { c: 17, l: 63, p: 10, m: 7, a: 6, cc: 1 };
window.JUGADORS = [
  { id: "busquets", nom: "Sergi Busquets", foto: "sergio-busquets.png", c: 3, l: 10, p: 0, m: 1, a: 1, cc: 0 },       // l: 9 Lliga + MLS Cup 2025 · a: Barça B 2007-08
  { id: "stuani", nom: "Stuani", foto: "cristhian-stuani.png", c: 0, l: 1, p: 0, m: 0, a: 2, cc: 0 },                  // l: Uruguai 2004 · a: Middlesbrough 2016, Girona 2022
  { id: "messi", nom: "Leo Messi", foto: "messi.png", c: 4, l: 13, p: 8, m: 1, a: 0, cc: 0 },                          // l: 10 Lliga + 2 Ligue 1 + MLS Cup 2025
  { id: "modric", nom: "Luka Modrić", foto: "luka-modric.png", c: 6, l: 7, p: 1, m: 0, a: 0, cc: 0 },                  // l: 3 Croàcia + 4 Lliga
  { id: "carvajal", nom: "Dani Carvajal", foto: "dani-carvajal.png", c: 6, l: 4, p: 0, m: 0, a: 1, cc: 0 },           // a: Castilla 2011-12
  { id: "lewandowski", nom: "Lewandowski", foto: "robert-lewandowski.png", c: 1, l: 14, p: 0, m: 0, a: 1, cc: 0 },    // l: 1 Polònia + 10 Bundesliga + 3 Lliga · a: Znicz Pruszków 2006-07
  { id: "neuer", nom: "Manuel Neuer", foto: "manuel-neuer.png", c: 2, l: 13, p: 0, m: 1, a: 0, cc: 0 },
  { id: "ronaldinho", nom: "Ronaldinho", foto: "ronaldinho.png", c: 1, l: 3, p: 1, m: 1, a: 0, cc: 0 },               // l: 2 Lliga + Serie A 2010-11
  { id: "aitana", nom: "Aitana Bonmatí", foto: "aitana-bonmati.png", c: 4, l: 7, p: 3, m: 1, a: 0, cc: 4 },           // cc: 2016-2019
  { id: "iniesta", nom: "Andrés Iniesta", foto: "andres-iniesta.png", c: 4, l: 10, p: 0, m: 1, a: 0, cc: 0 },         // l: 9 Lliga + J1 2023
  { id: "kane", nom: "Harry Kane", foto: "harry-kane.png", c: 0, l: 2, p: 0, m: 0, a: 0, cc: 0 },
  { id: "mbappe", nom: "Kylian Mbappé", foto: "kylian-mbappe.png", c: 0, l: 7, p: 0, m: 1, a: 0, cc: 0 },
  { id: "morgan", nom: "Alex Morgan", foto: "alex-morgan.png", c: 1, l: 3, p: 0, m: 2, a: 0, cc: 0 },                 // l: WPS 2011, NWSL 2013, D1 Féminine 2016-17
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "cristiano-ronaldo.png", c: 5, l: 8, p: 5, m: 0, a: 0, cc: 0 },
  { id: "pedri", nom: "Pedri", foto: "pedri.png", c: 0, l: 3, p: 0, m: 1, a: 0, cc: 0 },
  { id: "raphinha", nom: "Raphinha", foto: "raphinha.png", c: 0, l: 3, p: 0, m: 0, a: 0, cc: 0 },
  { id: "lozano", nom: "Pol Lozano", foto: "pol-lozano.png", c: 0, l: 0, p: 0, m: 0, a: 4, cc: 0 },                   // a: 4 ascensos
  { id: "puado", nom: "Javi Puado", foto: "javi-puado.png", c: 0, l: 0, p: 0, m: 0, a: 3, cc: 0 },                     // a: Espanyol B, Espanyol 2021 i 2024
  { id: "isco", nom: "Isco", foto: "isco.png", c: 5, l: 3, p: 0, m: 0, a: 1, cc: 0 },                                  // a: Valencia Mestalla 2010-11
  { id: "dembele", nom: "Dembélé", foto: "ousmane-dembele.png", c: 2, l: 6, p: 1, m: 1, a: 0, cc: 0 },
  { id: "xavi", nom: "Xavi Hernández", foto: "xavi-hernandez.png", c: 4, l: 9, p: 0, m: 1, a: 1, cc: 0 },              // l: 8 Lliga + Qatar 2018-19 · a: Barça B
  { id: "urri", nom: "Urri", foto: "albert-orriols.png", c: 0, l: 0, p: 0, m: 0, a: 0, cc: 1 },                        // Albert Orriols (CE Sabadell, Copa Catalunya 2025-26)
  { id: "alexia", nom: "Alèxia Putellas", foto: "alexia-putellas.png", c: 4, l: 10, p: 2, m: 1, a: 0, cc: 8 },        // cc: 2008, 2012, 2014-2019
  { id: "neymar", nom: "Neymar", foto: "neymar.png", c: 1, l: 8, p: 0, m: 0, a: 0, cc: 0 },                           // l: 2 Lliga + 5 Ligue 1 + Saudi 2023-24
  { id: "jenni", nom: "Jenni Hermoso", foto: "jenni-hermoso.png", c: 1, l: 8, p: 0, m: 1, a: 0, cc: 0 },
  { id: "maradona", nom: "Maradona", foto: "diego-maradona.png", c: 0, l: 3, p: 0, m: 1, a: 0, cc: 0 },               // època de jugador: l: Boca 1981 + 2 Serie A
  { id: "zidane", nom: "Zidane", foto: "zinedine-zidane.png", c: 1, l: 3, p: 1, m: 1, a: 0, cc: 0 }                   // època de jugador: l: 2 Serie A + Lliga 2002-03
];
