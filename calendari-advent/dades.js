// "Calendari d'advent": 24 caselles, cada una amb una pregunta. El presentador diu si l'ha encertat (verd) o no (vermell).
// q = pregunta que surt dins la casella; a = resposta que surt en donar el veredicte.
// Les marcades amb "verificar" són dades de l'esborrany que convé comprovar abans de gravar.
window.CASELLES = [
  { n: 1,  q: "Digues un porter que no porti el dorsal 1", a: "Buffon (77), Donnarumma (99), Oblak (13)..." },
  { n: 2,  q: "Digues un equip que tingui 2 Champions", a: "Chelsea, Juventus, Benfica, Porto, Nottingham Forest" }, // verificar: l'esborrany deia Man. United i Inter, però en tenen 3
  { n: 3,  q: "Digues un estadi de la Lliga on s'hagi jugat un Mundial", a: "Camp Nou, Bernabéu, Vicente Calderón, Sarrià, Mestalla, Balaídos, La Rosaleda, Sánchez-Pizjuán, Riazor, El Molinón, Carlos Tartiere, La Romareda, José Zorrilla, Martínez Valero, Rico Pérez, San Mamés" }, // Mundial 1982; verificar
  { n: 4,  q: "Digues un equip que hagi passat per la Lliga sense la lletra A al nom", a: "Elx, Betis, Tenerife, Oviedo..." },
  { n: 5,  q: "Digues dos equips que comparteixin ciutat", a: "Madrid: Reial Madrid i Atlètic. Londres: Arsenal, Chelsea, Tottenham, West Ham..." },
  { n: 6,  q: "Digues un jugador que hagi portat el dorsal 6", a: "Xavi, Gavi, Mikel Merino, Koke, Roberto Carlos, Camavinga..." },
  { n: 7,  q: "Quin és el 7 més golejador de la història del Barça?", a: "Pedrito" }, // verificar
  { n: 8,  q: "Quin jugador té 8 Pilotes d'Or?", a: "Leo Messi" },
  { n: 9,  q: "Qui porta el 9 del Girona?", a: "Abel Ruiz" }, // verificar
  { n: 10, q: "Digues un equip que no tingui dorsal 10", a: "La Roma (Totti) i el Nàpols (Maradona)" },
  { n: 11, q: "Quin equip té 11 Lligues espanyoles?", a: "Atlètic de Madrid" },
  { n: 12, q: "Quin jugador ha portat el 12 amb França?", a: "Thierry Henry, Tolisso, Kolo Muani..." }, // verificar
  { n: 13, q: "Digues un porter que hagi portat el 13 a l'Espanyol", a: "Dmitrovic, Joan García, Kameni" },
  { n: 14, q: "Digues un neerlandès amb el dorsal 14", a: "Johan Cruyff" },
  { n: 15, q: "Quin equip té 15 Champions?", a: "Reial Madrid" }, // verificar el recompte actual
  { n: 16, q: "Quin jugador va debutar als 16 anys amb el Barça?", a: "Lamine Yamal" },
  { n: 17, q: "Quins títols va aixecar el Barça la temporada 16-17?", a: "Copa del Rei i Supercopa d'Espanya" },
  { n: 18, q: "Quin equip va acabar 18è a la Lliga 2025/26?", a: "Mallorca" }, // verificar
  { n: 19, q: "Digues un davanter que hagi portat el 19 i el 10", a: "Lamine Yamal, Leo Messi" },
  { n: 20, q: "Digues un capità del Barça que hagi portat el 20", a: "Sergi Roberto" },
  { n: 21, q: "A quins equips va portar Pirlo el dorsal 21?", a: "AC Milan, Juventus, New York City i selecció italiana" },
  { n: 22, q: "Quin entrenador ha guanyat 22 títols?", a: "Luis Enrique" }, // verificar
  { n: 23, q: "Digues un jugador anglès amb el dorsal 23", a: "David Beckham" },
  { n: 24, q: "Quin equip té 24 Copes del Rei?", a: "Athletic Club" }
];
