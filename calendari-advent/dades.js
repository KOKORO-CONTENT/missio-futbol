(function () {   // dins d'una funció: la pàgina xifrada de la web ja té variables globals X i u8
// "Calendari d'advent": 24 caselles, cada una amb una pregunta. El jugador escriu k respostes i el joc les corregeix sol.
// k = nombre de respostes que ha de dir el jugador. a = solucions vàlides (obertes: n'hi pot haver més):
//   nom (el que es mostra), img (foto, escut, "jersey:kit|NOM|dorsal" o "cup:..."; null = només s'accepta, no es mostra), alias (altres maneres d'escriure-ho).
// nota = text que surt al revelar. tots = en cas d'encert també es mostren totes les imatges.
// Les marcades amb "verificar" són dades de l'esborrany que convé comprovar abans de gravar.
const J = x => "img/jug/" + x, E = x => "img/esc/" + x + ".png";
const Y = (kit, nom, num) => "jersey:" + kit + "|" + nom + "|" + num;
const A = (nom, img, alias = []) => ({ nom, img, alias });
window.CASELLES = [
  { n: 1,  k: 1, q: "Digues un porter que no porti el dorsal 1", a: [
      A("Buffon (77)", Y("parma", "BUFFON", 77), ["buffon", "gigi buffon", "gianluigi buffon"]), A("Donnarumma (99)", Y("milan", "DONNARUMMA", 99), ["donnarumma", "gigio donnarumma"]),
      A("Oblak (13)", Y("atletico", "OBLAK", 13), ["oblak"])] },
  { n: 2,  k: 1, q: "Digues un equip que tingui 2 Champions", a: [ // verificar: l'esborrany deia Man. United i Inter, però en tenen 3
      A("Chelsea", E("chelsea"), ["chelsea fc"]), A("Juventus", E("juventus"), ["juve"]), A("Benfica", E("benfica"), ["sl benfica"]), A("Porto", E("porto"), ["fc porto", "oporto"]),
      A("Nottingham Forest", E("forest"), ["forest", "nottingham"])] },
  { n: 3,  k: 3, q: "Digues 3 estadis de la lliga espanyola on s'hagi jugat un Mundial", a: [ // Mundial 1982; verificar
      A("Camp Nou", E("barca"), ["nou camp", "spotify camp nou", "camp nou barcelona"]), A("Santiago Bernabéu", E("real-madrid"), ["bernabeu", "santiago bernabeu"]),
      A("Vicente Calderón", E("atletico"), ["calderon", "vicente calderon"]), A("Sarrià", E("espanyol"), ["sarria", "estadi de sarria"]),
      A("Mestalla", E("valencia"), ["luis casanova", "estadi mestalla"]), A("Balaídos", E("celta"), ["balaidos"]), A("La Rosaleda", E("malaga"), ["rosaleda"]),
      A("Sánchez-Pizjuán", E("sevilla"), ["sanchez pizjuan", "pizjuan", "ramon sanchez pizjuan"]), A("Riazor", E("depor"), ["estadio riazor"]),
      A("Martínez Valero", E("elche"), ["martinez valero"]), A("Carlos Tartiere", E("oviedo"), ["tartiere"]), A("San Mamés", E("athletic"), ["san mames"]),
      A("La Romareda", null, ["romareda"]), A("José Zorrilla", null, ["zorrilla", "jose zorrilla"]), A("El Molinón", null, ["molinon"]), A("José Rico Pérez", null, ["rico perez", "jose rico perez"])] },
  { n: 4,  k: 1, q: "Digues un equip que hagi passat per la Lliga sense la lletra A", a: [
      A("Elx", E("elche"), ["elche", "elx cf"]), A("Betis", E("betis"), ["real betis"]), A("Tenerife", E("x-tenerife"), ["cd tenerife"]), A("Oviedo", E("oviedo"), ["real oviedo"]),
      A("Sporting", null, ["sporting gijon", "sporting de gijon"]), A("Hèrcules", null, ["hercules"]), A("Xerez", null, ["xerez cd"]), A("Burgos", null, [])] },
  { n: 5,  k: 5, q: "Digues 5 equips que comparteixin ciutat", nota: "La ciutat és Londres", a: [
      A("Arsenal", E("arsenal"), ["arsenal fc"]), A("Chelsea", E("chelsea"), ["chelsea fc"]), A("Tottenham", E("tottenham"), ["spurs", "tottenham hotspur"]), A("West Ham", E("westham"), ["west ham united"]),
      A("Crystal Palace", E("palace"), ["palace"]), A("Fulham", E("fulham"), ["fulham fc"]), A("Brentford", E("brentford"), [])] },
  { n: 6,  k: 6, q: "Digues 6 jugadors amb el dorsal 6", a: [
      A("Xavi", Y("barca", "XAVI", 6), ["xavi hernandez"]), A("Gavi", Y("barca", "GAVI", 6), []), A("Mikel Merino", Y("spain", "MERINO", 6), ["merino"]),
      A("Koke", Y("atletico", "KOKE", 6), []), A("Roberto Carlos", Y("brazil", "R. CARLOS", 6), ["carlos"]), A("Camavinga", Y("madrid", "CAMAVINGA", 6), ["eduardo camavinga"])] },
  { n: 7,  k: 1, q: "Digues el 7 més golejador de la història del Barça", a: [A("Pedrito", Y("barca", "PEDRITO", 7), ["pedro", "pedro rodriguez", "pedrito"])] }, // verificar
  { n: 8,  k: 1, q: "Digues el jugador amb 8 Pilotes d'Or", a: [A("Leo Messi", J("messi-balon-or.png"), ["messi", "lionel messi", "lionel", "leo"])] },
  { n: 9,  k: 1, q: "Digues qui porta el 9 del Girona", a: [A("Stuani", Y("girona", "STUANI", 9), ["cristhian stuani", "stuani"])] }, // verificar
  { n: 10, k: 1, q: "Digues un equip sense dorsal 10", a: [A("Roma (Totti)", Y("roma", "TOTTI", 10), ["roma", "as roma", "totti"]), A("Nàpols", null, ["napoli", "ssc napoli", "napols"])] },
  { n: 11, k: 1, q: "Digues l'equip amb 11 Lligues espanyoles", a: [A("Atlètic de Madrid", E("atletico"), ["atletic", "atletico", "atletico madrid", "atletic madrid", "atletico de madrid", "atleti", "at madrid"])] },
  { n: 12, k: 1, q: "Quin jugador portava el 12 amb França?", a: [ // verificar
      A("Thierry Henry", Y("france", "HENRY", 12), ["henry", "thierry"]), A("Tolisso", Y("france", "TOLISSO", 12), ["corentin tolisso"]), A("Kolo Muani", Y("france", "KOLO MUANI", 12), ["randal kolo muani", "muani"])] },
  { n: 13, k: 1, q: "Digues un porter que hagi portat el 13 a l'Espanyol", a: [
      A("Joan García", Y("espanyol", "JOAN GARCIA", 13), ["joan garcia", "garcia"]), A("Dmitrovic", Y("espanyol", "DMITROVIC", 13), ["marko dmitrovic"]), A("Kameni", Y("espanyol", "KAMENI", 13), ["carlos kameni"])] },
  { n: 14, k: 1, q: "Digues un neerlandès amb el dorsal 14", a: [A("Johan Cruyff", Y("netherlands", "CRUYFF", 14), ["cruyff", "cruijff", "johan cruijff", "johan"])] },
  { n: 15, k: 1, q: "Digues l'equip amb 15 Champions", a: [A("Reial Madrid", E("real-madrid"), ["real madrid", "madrid", "reial madrid", "real madrid cf"])] }, // verificar el recompte actual
  { n: 16, k: 1, q: "Digues un jugador que va debutar amb 16 anys al Mònaco", a: [A("Mbappé (33)", Y("monaco", "MBAPPÉ", 33), ["mbappe", "kylian mbappe", "kylian"])] },
  { n: 17, k: 2, q: "Digues 2 títols que va aixecar el Barça la temporada 16-17", tots: true, a: [
      A("Copa del Rei", "cup:copa", ["copa", "copa del rey"]), A("Supercopa d'Espanya", "cup:supercopa", ["supercopa", "supercopa de espana", "supercopa despanya", "supercopa d espanya"])] },
  { n: 18, k: 1, q: "Digues l'equip que va acabar 18è a la Lliga 2025/26", a: [A("Mallorca", E("mallorca"), ["rcd mallorca"])] }, // verificar
  { n: 19, k: 1, q: "Digues un davanter que hagi portat el 19 i el 10", tots: true, a: [
      A("Lamine Yamal · 19", Y("barca", "YAMAL", 19), ["yamal", "lamine yamal", "lamine"]), A("Lamine Yamal · 10", Y("barca", "YAMAL", 10), ["yamal", "lamine yamal", "lamine"]),
      A("Leo Messi", null, ["messi", "leo messi", "lionel messi", "lionel", "leo"])] },
  { n: 20, k: 1, q: "Digues un capità del Barça que hagi portat el 20", a: [A("Sergi Roberto", Y("barca", "S. ROBERTO", 20), ["sergi", "roberto", "sergio roberto"])] },
  { n: 21, k: 4, q: "Digues 4 equips on Pirlo va portar el 21", tots: true, a: [
      A("AC Milan", Y("milan", "PIRLO", 21), ["milan", "milà", "ac milà", "ac milan"]), A("Juventus", Y("juve", "PIRLO", 21), ["juve"]), A("New York City", Y("nyc", "PIRLO", 21), ["nyc", "nycfc", "new york", "new york city fc"]),
      A("Itàlia", Y("italia", "PIRLO", 21), ["italia", "seleccio italiana", "selecció italiana", "italy"])] },
  { n: 22, k: 1, q: "Digues l'entrenador que ha guanyat 22 títols", a: [A("Luis Enrique", J("luis-enrique.png"), ["luis enrique", "lucho", "enrique"])] }, // verificar
  { n: 23, k: 1, q: "Digues un jugador anglès amb el dorsal 23", a: [A("David Beckham", Y("madrid", "BECKHAM", 23), ["beckham", "david"])] },
  { n: 24, k: 1, q: "Digues l'equip amb 24 Copes del Rei", a: [A("Athletic Club", E("athletic"), ["athletic", "athletic de bilbao", "athletic bilbao", "athletic club bilbao", "bilbao"])] }
];

// Solucions obertes: les respostes de dalt són només exemples; aquí hi ha més noms que també es donen per bons (no tenen imatge).
const X = (n, llista) => window.CASELLES[n - 1].a.push(...llista.map(([nom, alias]) => A(nom, null, alias || [])));
X(1, [["Szczęsny (25)", ["szczesny", "szczesney", "wojciech szczesny"]], ["Kepa (13)", ["kepa"]], ["Lunin (13)", ["lunin"]], ["Ederson (31)", ["ederson"]],
  ["Courtois (13)", ["courtois", "thibaut courtois"]], ["Raya"], ["Maignan"], ["Bono (13)", ["bono", "yassine bounou"]], ["Dibu Martínez", ["dibu", "emiliano martinez", "martinez"]], ["Mendy", ["edouard mendy"]],
  ["Vicario"], ["Reina", ["pepe reina"]], ["Claudio Bravo", ["bravo"]], ["Pinto", ["jose manuel pinto"]], ["Unai Simón", ["unai simon", "simon"]], ["Sirigu"], ["Meret"], ["Casteels"]]);
X(3, [["Estadio de Atocha", ["atocha", "anoeta"]], ["Estadio Hércules", ["hercules"]]]);
X(4, [["Toledo"], ["Eldense"], ["Lugo"]]);
X(5, [["QPR", ["queens park rangers"]], ["Millwall"], ["Charlton", ["charlton athletic"]], ["Wimbledon", ["afc wimbledon"]], ["Barnet"], ["Watford"], ["Orient"], ["Brentford FC"], ["Bromley"], ["Sutton"]]);
X(6, [["Pogba", ["paul pogba"]], ["Kimmich", ["joshua kimmich"]], ["Verratti", ["marco verratti"]], ["Thiago", ["thiago alcantara"]], ["Nacho", ["nacho fernandez"]], ["Gabriel", ["gabriel magalhaes"]], ["Thiago Silva", []], ["Aké", ["ake", "nathan ake"]],
  ["Lisandro Martínez", ["lisandro martinez", "lisandro"]], ["Ramsey"], ["Mascherano", ["javier mascherano"]], ["Dani Parejo", ["parejo"]], ["Marcelo Brozović", ["brozovic"]], ["Fernandinho"], ["Rakitić", ["rakitic"]]]);
X(9, [["Abel Ruiz", ["abel", "ruiz"]], ["Dovbyk", ["artem dovbyk"]]]);
X(10, [["Boca Juniors", ["boca"]]]);
X(13, [["Casilla", ["francisco casilla"]]]);
X(21, [["Brescia"], ["Inter", ["inter de milan", "internazionale"]]]);
})();
