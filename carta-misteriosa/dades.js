// "Carta misteriosa": a cada ronda, una carta visible i una de secreta (borrosa) amb una categoria en comú.
// El concursant tria amb quina es queda; al final s'enfronten l'alineació escollida i la descartada (futbol 7)
// i es revelen les cartes secretes.
// pos: POR, DEF, MC, DC (on va al camp), EST (estadi), ENT (entrenador).
// pista: imatge petita a la carta visible. extra: imatge que surt a la carta secreta quan es revela.
window.RONDES = [
  { cat: "One club man", pos: "DEF",
    vis: { nom: "Paolo Maldini", foto: "cares/maldini.jpg" },
    sec: { nom: "Carles Puyol", foto: "cares/puyol.jpeg" } },
  { cat: "Nascuts al 2002", pos: "MC",
    vis: { nom: "Kika Nazareth", foto: "cares/kika-nazareth.jpg", pista: "escut-barca.png" },
    sec: { nom: "Eduardo Camavinga", foto: "cares/camavinga.jpg" } },
  { cat: "Porter de 1,95", pos: "POR",
    vis: { nom: "Dibu Martínez", foto: "cares/dibu.jpg" },
    sec: { nom: "Wojciech Szczęsny", foto: "cares/szczesny.jpg" } },
  { cat: "Capità d'una selecció del Mundial 2026", pos: "DC",
    vis: { nom: "Harry Kane", foto: "cares/kane.jpg" },
    sec: { nom: "Romelu Lukaku", foto: "cares/lukaku.png" } },
  { cat: "Jugador africà", pos: "MC",
    vis: { nom: "N'Golo Kanté", foto: "cares/kante.png" },
    sec: { nom: "Franck Kessié", foto: "cares/kessie.jpg", extra: "costa-ivori.png" } },
  { cat: "Golejadors", pos: "DC",
    vis: { nom: "Roberto Fernández", foto: "cares/roberto-fernandez.jpg" },
    sec: { nom: "Clàudia Pina", foto: "cares/claudia-pina.jpg" } },
  { cat: "Laterals", pos: "DEF",
    vis: { nom: "Nuno Mendes", foto: "cares/nuno-mendes.jpg" },
    sec: { nom: "Alejandro Balde", foto: "cares/balde.jpg" } },
  { cat: "Migcampistes nominats a la Pilota d'Or", pos: "MC",
    vis: { nom: "Dani Olmo", foto: "cares/olmo.jpg" },
    sec: { nom: "Luka Modrić", foto: "cares/modric.jpg" } },
  { cat: "Estadi", pos: "EST",
    vis: { nom: "Metropolitano", foto: "estadis/metropolitano.jpg" },
    sec: { nom: "Mestalla", foto: "estadis/mestalla.jpg" } },
  { cat: "Entrenador d'un equip de LaLiga 24/25", pos: "ENT",
    vis: { nom: "Míchel", foto: "cares/michel.jpg" },
    sec: { nom: "Manolo González", foto: "cares/manolo-gonzalez.jpg" } }
];
