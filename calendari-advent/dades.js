// "Calendari d'advent": 24 caselles, cada una amb una pregunta. El jugador escriu k respostes i el presentador dona el veredicte.
// k = nombre de respostes que ha de dir el jugador (normalment el número de la casella).
// a = respostes correctes (nom + imatge: retrat del jugador o escut). La imatge d'un estadi és l'escut del seu club.
// Les marcades amb "verificar" són dades de l'esborrany que convé comprovar abans de gravar.
const J = x => "img/jug/" + x, E = x => "img/esc/" + x + ".png";
window.CASELLES = [
  { n: 1,  k: 1, q: "Digues un porter que no porti el dorsal 1", a: [
      { nom: "Buffon (77)", img: J("gianluigi-buffon.png") }, { nom: "Donnarumma (99)", img: J("gianluigi-donnarumma.jpg") }, { nom: "Oblak (13)", img: J("jan-oblak.jpg") }] },
  { n: 2,  k: 2, q: "Digues 2 equips que tinguin 2 Champions", a: [ // verificar: l'esborrany deia Man. United i Inter, però en tenen 3
      { nom: "Chelsea", img: E("chelsea") }, { nom: "Juventus", img: E("juventus") }, { nom: "Benfica", img: E("benfica") }, { nom: "Porto", img: E("porto") }, { nom: "Nottingham Forest", img: E("forest") }] },
  { n: 3,  k: 3, q: "Digues 3 estadis on s'hagi jugat un Mundial", a: [ // Mundial 1982; verificar
      { nom: "Camp Nou", img: E("barca") }, { nom: "Santiago Bernabéu", img: E("real-madrid") }, { nom: "Vicente Calderón", img: E("atletico") }, { nom: "Sarrià", img: E("espanyol") },
      { nom: "Mestalla", img: E("valencia") }, { nom: "Balaídos", img: E("celta") }, { nom: "La Rosaleda", img: E("malaga") }, { nom: "Sánchez-Pizjuán", img: E("sevilla") }, { nom: "Riazor", img: E("depor") }] },
  { n: 4,  k: 4, q: "Digues 4 equips que hagin passat per la Lliga sense la lletra A", a: [
      { nom: "Elx", img: E("elche") }, { nom: "Betis", img: E("betis") }, { nom: "Tenerife", img: E("x-tenerife") }, { nom: "Oviedo", img: E("oviedo") }] },
  { n: 5,  k: 5, q: "Digues 5 equips que comparteixin ciutat", a: [ // la ciutat és Londres
      { nom: "Arsenal", img: E("arsenal") }, { nom: "Chelsea", img: E("chelsea") }, { nom: "Tottenham", img: E("tottenham") }, { nom: "West Ham", img: E("westham") },
      { nom: "Crystal Palace", img: E("palace") }, { nom: "Fulham", img: E("fulham") }, { nom: "Brentford", img: E("brentford") }] },
  { n: 6,  k: 6, q: "Digues 6 jugadors amb el dorsal 6", a: [
      { nom: "Xavi", img: J("xavi.png") }, { nom: "Gavi", img: J("gavi.png") }, { nom: "Mikel Merino", img: J("mikel-merino.jpg") },
      { nom: "Koke", img: J("koke.png") }, { nom: "Roberto Carlos", img: J("roberto-carlos.jpg") }, { nom: "Camavinga", img: J("camavinga.jpg") }] },
  { n: 7,  k: 1, q: "Digues el 7 més golejador de la història del Barça", a: [{ nom: "Pedrito", img: J("pedro.jpg") }] }, // verificar
  { n: 8,  k: 1, q: "Digues el jugador amb 8 Pilotes d'Or", a: [{ nom: "Leo Messi", img: J("lionel-messi.png") }] },
  { n: 9,  k: 1, q: "Digues qui porta el 9 del Girona", a: [{ nom: "Abel Ruiz", img: J("abel-ruiz.jpg") }] }, // verificar
  { n: 10, k: 2, q: "Digues 2 equips sense dorsal 10", a: [{ nom: "Roma", img: E("roma") }, { nom: "Nàpols", img: E("napoli") }] },
  { n: 11, k: 1, q: "Digues l'equip amb 11 Lligues espanyoles", a: [{ nom: "Atlètic de Madrid", img: E("atletico") }] },
  { n: 12, k: 3, q: "Digues 3 jugadors que hagin portat el 12 amb França", a: [ // verificar
      { nom: "Thierry Henry", img: J("thierry-henry.png") }, { nom: "Tolisso", img: J("corentin-tolisso.jpg") }, { nom: "Kolo Muani", img: J("kolo-muani.jpg") }] },
  { n: 13, k: 3, q: "Digues 3 porters que hagin portat el 13 a l'Espanyol", a: [
      { nom: "Dmitrovic", img: J("marko-dmitrovic.jpg") }, { nom: "Joan García", img: J("joan-garcia.jpg") }, { nom: "Kameni", img: J("carlos-kameni.jpg") }] },
  { n: 14, k: 1, q: "Digues un neerlandès amb el dorsal 14", a: [{ nom: "Johan Cruyff", img: J("johan-cruyff.jpg") }] },
  { n: 15, k: 1, q: "Digues l'equip amb 15 Champions", a: [{ nom: "Reial Madrid", img: E("real-madrid") }] }, // verificar el recompte actual
  { n: 16, k: 1, q: "Digues qui va debutar als 16 anys amb el Barça", a: [{ nom: "Lamine Yamal", img: J("lamine-yamal.png") }] },
  { n: 17, k: 2, q: "Digues 2 títols que va aixecar el Barça la temporada 16-17", a: [{ nom: "Copa del Rei", img: E("barca") }, { nom: "Supercopa d'Espanya", img: E("barca") }] },
  { n: 18, k: 1, q: "Digues l'equip que va acabar 18è a la Lliga 2025/26", a: [{ nom: "Mallorca", img: E("mallorca") }] }, // verificar
  { n: 19, k: 2, q: "Digues 2 davanters que hagin portat el 19 i el 10", a: [{ nom: "Lamine Yamal", img: J("lamine-yamal.png") }, { nom: "Leo Messi", img: J("lionel-messi.png") }] },
  { n: 20, k: 1, q: "Digues un capità del Barça que hagi portat el 20", a: [{ nom: "Sergi Roberto", img: J("sergi-roberto.jpg") }] },
  { n: 21, k: 4, q: "Digues 4 equips on Pirlo va portar el 21", a: [
      { nom: "AC Milan", img: E("milan") }, { nom: "Juventus", img: E("juventus") }, { nom: "New York City", img: E("w-new-york-city-fc") }, { nom: "Itàlia", img: E("italia") }] },
  { n: 22, k: 1, q: "Digues l'entrenador que ha guanyat 22 títols", a: [{ nom: "Luis Enrique", img: J("luis-enrique.png") }] }, // verificar
  { n: 23, k: 1, q: "Digues un jugador anglès amb el dorsal 23", a: [{ nom: "David Beckham", img: J("david-beckham.png") }] },
  { n: 24, k: 1, q: "Digues l'equip amb 24 Copes del Rei", a: [{ nom: "Athletic Club", img: E("athletic") }] }
];
