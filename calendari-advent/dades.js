// "Calendari d'advent": 24 caselles, cada una amb una pregunta. El jugador escriu k respostes i el joc les corregeix sol.
// k = nombre de respostes que ha de dir el jugador. a = solucions vàlides:
//   nom (el que es mostra), img (retrat o escut; null = només s'accepta, no es mostra), alias (altres maneres d'escriure-ho).
// En cas d'error o de buit, surten les solucions amb imatge. Les marcades amb "verificar" convé comprovar-les.
(function () {   // dins d'una funció: la pàgina xifrada de la web ja té variables globals X i u8
const J = x => "img/jug/" + x, E = x => "img/esc/" + x + ".png";
const A = (nom, img, alias = []) => ({ nom, img, alias });
window.CASELLES = [
  { n: 1,  k: 1, q: "Digues un porter que no porti el dorsal 1", a: [
      A("Buffon (77)", J("gianluigi-buffon.png"), ["buffon", "gigi buffon", "gianluigi buffon"]), A("Donnarumma (99)", J("gianluigi-donnarumma.jpg"), ["donnarumma", "gigio donnarumma"]),
      A("Oblak (13)", J("jan-oblak.jpg"), ["oblak"]), A("Szczęsny (25)", null, ["szczesny", "szczesney", "wojciech szczesny"]), A("Kepa (13)", null, ["kepa"]),
      A("Lunin (13)", null, ["lunin"]), A("Ederson (31)", null, ["ederson"])] },
  { n: 2,  k: 1, q: "Digues un equip que tingui 2 Champions", a: [ // verificar: l'esborrany deia Man. United i Inter, però en tenen 3
      A("Chelsea", E("chelsea"), ["chelsea fc"]), A("Juventus", E("juventus"), ["juve"]), A("Benfica", E("benfica"), ["sl benfica"]), A("Porto", E("porto"), ["fc porto", "oporto"]),
      A("Nottingham Forest", E("forest"), ["forest", "nottingham"])] },
  { n: 3,  k: 3, q: "Digues 3 estadis on s'hagi jugat un Mundial", a: [ // Mundial 1982; verificar
      A("Camp Nou", E("barca"), ["nou camp", "spotify camp nou", "camp nou barcelona"]), A("Santiago Bernabéu", E("real-madrid"), ["bernabeu", "santiago bernabeu"]),
      A("Vicente Calderón", E("atletico"), ["calderon", "vicente calderon"]), A("Sarrià", E("espanyol"), ["sarria", "estadi de sarria"]),
      A("Mestalla", E("valencia"), ["luis casanova", "estadi mestalla"]), A("Balaídos", E("celta"), ["balaidos"]), A("La Rosaleda", E("malaga"), ["rosaleda"]),
      A("Sánchez-Pizjuán", E("sevilla"), ["sanchez pizjuan", "pizjuan", "ramon sanchez pizjuan"]), A("Riazor", E("depor"), ["estadio riazor"]),
      A("Martínez Valero", E("elche"), ["martinez valero"]), A("Carlos Tartiere", E("oviedo"), ["tartiere"]), A("San Mamés", E("athletic"), ["san mames"]),
      A("La Romareda", null, ["romareda"]), A("José Zorrilla", null, ["zorrilla", "jose zorrilla"]), A("El Molinón", null, ["molinon"]), A("José Rico Pérez", null, ["rico perez", "jose rico perez"])] },
  { n: 4,  k: 1, q: "Digues un equip que hagi passat per la Lliga sense la lletra A", a: [
      A("Elx", E("elche"), ["elche", "elx cf"]), A("Betis", E("betis"), ["real betis"]), A("Tenerife", E("x-tenerife"), ["cd tenerife"]), A("Oviedo", E("oviedo"), ["real oviedo"]),
      A("Sporting", null, ["sporting gijon", "sporting de gijon"]), A("Hèrcules", null, ["hercules"]), A("Xerez", null, ["xerez cd"]), A("Burgos", null, [])] },
  { n: 5,  k: 5, q: "Digues 5 equips que comparteixin ciutat", a: [ // la ciutat és Londres
      A("Arsenal", E("arsenal"), ["arsenal fc"]), A("Chelsea", E("chelsea"), ["chelsea fc"]), A("Tottenham", E("tottenham"), ["spurs", "tottenham hotspur"]), A("West Ham", E("westham"), ["west ham united"]),
      A("Crystal Palace", E("palace"), ["palace"]), A("Fulham", E("fulham"), ["fulham fc"]), A("Brentford", E("brentford"), []),
      A("QPR", null, ["queens park rangers"]), A("Millwall", null, []), A("Charlton", null, ["charlton athletic"]), A("Leyton Orient", null, [])] },
  { n: 6,  k: 6, q: "Digues 6 jugadors amb el dorsal 6", a: [
      A("Xavi", J("xavi.png"), ["xavi hernandez"]), A("Gavi", J("gavi.png"), []), A("Mikel Merino", J("mikel-merino.jpg"), ["merino"]),
      A("Koke", J("koke.png"), []), A("Roberto Carlos", J("roberto-carlos.jpg"), ["carlos"]), A("Camavinga", J("camavinga.jpg"), ["eduardo camavinga"]),
      A("Pogba", null, ["paul pogba"]), A("Kimmich", null, ["joshua kimmich"])] },
  { n: 7,  k: 1, q: "Digues el 7 més golejador de la història del Barça", a: [A("Pedrito", J("pedro.jpg"), ["pedro", "pedro rodriguez", "pedrito"])] }, // verificar
  { n: 8,  k: 1, q: "Digues el jugador amb 8 Pilotes d'Or", a: [A("Leo Messi", J("lionel-messi.png"), ["messi", "lionel messi", "lionel", "leo"])] },
  { n: 9,  k: 1, q: "Digues qui porta el 9 del Girona", a: [A("Abel Ruiz", J("abel-ruiz.jpg"), ["abel", "ruiz"])] }, // verificar
  { n: 10, k: 1, q: "Digues un equip sense dorsal 10", a: [A("Roma", E("roma"), ["as roma"]), A("Nàpols", E("napoli"), ["napoli", "ssc napoli", "napols"])] },
  { n: 11, k: 1, q: "Digues l'equip amb 11 Lligues espanyoles", a: [A("Atlètic de Madrid", E("atletico"), ["atletic", "atletico", "atletico madrid", "atletic madrid", "atletico de madrid", "atleti", "at madrid"])] },
  { n: 12, k: 1, q: "Quin jugador portava el 12 amb França?", a: [ // verificar
      A("Thierry Henry", J("thierry-henry.png"), ["henry", "thierry"]), A("Tolisso", J("corentin-tolisso.jpg"), ["corentin tolisso"]), A("Kolo Muani", J("kolo-muani.jpg"), ["randal kolo muani", "muani"])] },
  { n: 13, k: 1, q: "Digues un porter que hagi portat el 13 a l'Espanyol", a: [
      A("Dmitrovic", J("marko-dmitrovic.jpg"), ["marko dmitrovic"]), A("Joan García", J("joan-garcia.jpg"), ["joan garcia", "garcia"]), A("Kameni", J("carlos-kameni.jpg"), ["carlos kameni"])] },
  { n: 14, k: 1, q: "Digues un neerlandès amb el dorsal 14", a: [A("Johan Cruyff", J("johan-cruyff.jpg"), ["cruyff", "cruijff", "johan cruijff", "johan"])] },
  { n: 15, k: 1, q: "Digues l'equip amb 15 Champions", a: [A("Reial Madrid", E("real-madrid"), ["real madrid", "madrid", "reial madrid", "real madrid cf"])] }, // verificar el recompte actual
  { n: 16, k: 1, q: "Digues qui va debutar als 16 anys amb el Barça", a: [A("Lamine Yamal", J("lamine-yamal.png"), ["yamal", "lamine"]), A("Ansu Fati", null, ["ansu", "fati"])] },
  { n: 17, k: 2, q: "Digues 2 títols que va aixecar el Barça la temporada 16-17", a: [
      A("Copa del Rei", E("barca"), ["copa", "copa del rey"]), A("Supercopa d'Espanya", E("barca"), ["supercopa", "supercopa de espana", "supercopa despanya", "supercopa d espanya"])] },
  { n: 18, k: 1, q: "Digues l'equip que va acabar 18è a la Lliga 2025/26", a: [A("Mallorca", E("mallorca"), ["rcd mallorca"])] }, // verificar
  { n: 19, k: 1, q: "Digues un davanter que hagi portat el 19 i el 10", a: [A("Lamine Yamal", J("lamine-yamal.png"), ["yamal", "lamine"]), A("Leo Messi", J("lionel-messi.png"), ["messi", "lionel messi", "leo"])] },
  { n: 20, k: 1, q: "Digues un capità del Barça que hagi portat el 20", a: [A("Sergi Roberto", J("sergi-roberto.jpg"), ["sergi", "roberto"])] },
  { n: 21, k: 4, q: "Digues 4 equips on Pirlo va portar el 21", a: [
      A("AC Milan", E("milan"), ["milan", "milà", "ac milà", "ac milan"]), A("Juventus", E("juventus"), ["juve"]), A("New York City", E("w-new-york-city-fc"), ["nyc", "nycfc", "new york", "new york city fc"]),
      A("Itàlia", E("italia"), ["italia", "seleccio italiana", "selecció italiana", "italy"])] },
  { n: 22, k: 1, q: "Digues l'entrenador que ha guanyat 22 títols", a: [A("Luis Enrique", J("luis-enrique.png"), ["luis enrique", "lucho", "enrique"])] }, // verificar
  { n: 23, k: 1, q: "Digues un jugador anglès amb el dorsal 23", a: [A("David Beckham", J("david-beckham.png"), ["beckham", "david"])] },
  { n: 24, k: 1, q: "Digues l'equip amb 24 Copes del Rei", a: [A("Athletic Club", E("athletic"), ["athletic", "athletic de bilbao", "athletic bilbao", "athletic club bilbao", "bilbao"])] }
];

// Solucions obertes: les respostes de dalt són només exemples; aquí hi ha més noms que també es donen per bons (no tenen imatge).
const X = (n, llista) => window.CASELLES[n - 1].a.push(...llista.map(([nom, alias]) => A(nom, null, alias || [])));
X(1, [["Courtois (13)", ["courtois", "thibaut courtois"]], ["Raya"], ["Maignan"], ["Bono (13)", ["bono", "yassine bounou"]], ["Dibu Martínez", ["dibu", "emiliano martinez", "martinez"]], ["Mendy", ["edouard mendy"]],
  ["Vicario"], ["Reina", ["pepe reina"]], ["Claudio Bravo", ["bravo"]], ["Pinto", ["jose manuel pinto"]], ["Unai Simón", ["unai simon", "simon"]], ["Sirigu"], ["Meret"], ["Casteels"]]);
X(3, [["Estadio de Atocha", ["atocha", "anoeta"]], ["Estadio Hércules", ["hercules"]]]);
X(4, [["Toledo"], ["Eldense"], ["Lugo"], ["Elche"]]);
X(5, [["Wimbledon", ["afc wimbledon"]], ["Barnet"], ["Watford"], ["Orient"], ["Brentford FC"], ["Bromley"], ["Sutton"]]);
X(6, [["Verratti", ["marco verratti"]], ["Thiago", ["thiago alcantara"]], ["Nacho", ["nacho fernandez"]], ["Gabriel", ["gabriel magalhaes"]], ["Thiago Silva", []], ["Aké", ["ake", "nathan ake"]],
  ["Lisandro Martínez", ["lisandro martinez", "lisandro"]], ["Ramsey"], ["Mascherano", ["javier mascherano"]], ["Dani Parejo", ["parejo"]], ["Marcelo Brozović", ["brozovic"]], ["Fernandinho"], ["Rakitić", ["rakitic"]]]);
X(9, [["Dovbyk", ["artem dovbyk"]], ["Stuani", ["cristhian stuani"]]]);
X(10, [["Boca Juniors", ["boca"]], ["Nàpols SSC", []]]);
X(13, [["Casilla", ["francisco casilla"]]]);
X(16, [["Cubarsí", ["pau cubarsi", "cubarsi"]]]);
X(21, [["Brescia"], ["Inter", ["inter de milan", "internazionale"]]]);
})();
