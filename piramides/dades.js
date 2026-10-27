// "Piràmides": 4 escuts, 40 segons cadascun. Cada piràmide té 5 nivells (5 → 1 respostes), que es fan en aquest ordre.
// Cada nivell: [numero de caselles, enunciat, [respostes vàlides]]. Cada resposta: [nom, paraules que es donen per bones...].
// Es dóna per bona qualsevol de la llista (no només les primeres). Al final es revelen les primeres que no s'hagin fet servir.
// REVISAR amb Transfermarkt: les llistes estan fetes de memòria (octubre 2026). Afegir-hi respostes aquí no costa res.
window.TEMPS = 40;
window.ESCUTS = [
  { nom: "FC Barcelona", escut: "img/escuts/barcelona.png", nivells: [
    [5, "Entrenadors del Barça", [
      ["Pep Guardiola", "guardiola", "pep"], ["Johan Cruyff", "cruyff", "cruijff", "johan"], ["Frank Rijkaard", "rijkaard", "rijkard"],
      ["Luis Enrique", "lucho", "enrique"], ["Xavi Hernández", "xavi"], ["Ronald Koeman", "koeman"], ["Ernesto Valverde", "valverde", "txingurri"],
      ["Quique Setién", "setien"], ["Louis van Gaal", "van gaal", "vangaal"], ["Bobby Robson", "robson"], ["Tito Vilanova", "vilanova", "tito"],
      ["Gerardo Martino", "martino", "tata"], ["Hansi Flick", "flick", "hansi"], ["Rinus Michels", "michels"], ["Terry Venables", "venables"],
      ["Radomir Antić", "antic"], ["Carles Rexach", "rexach"], ["Helenio Herrera", "herrera"], ["Luis Aragonés", "aragones"], ["Lucien Müller", "muller"]]],
    [4, "Dorsals 9 del Barça", [
      ["Ronaldo Nazário", "ronaldo", "ronaldo nazario", "fenomeno"], ["Romário", "romario"], ["Patrick Kluivert", "kluivert"], ["Samuel Eto'o", "etoo", "eto o"],
      ["Zlatan Ibrahimović", "zlatan", "ibrahimovic", "ibra"], ["Alexis Sánchez", "alexis"], ["Luis Suárez", "suarez", "pistolero"],
      ["Robert Lewandowski", "lewandowski", "lewa"], ["Memphis Depay", "memphis", "depay"], ["Julio Salinas", "salinas"]]],
    [3, "Defenses del Barça campions del món", [
      ["Carles Puyol", "puyol"], ["Gerard Piqué", "pique"], ["Jordi Alba", "alba"], ["Lilian Thuram", "thuram"], ["Samuel Umtiti", "umtiti"],
      ["Gianluca Zambrotta", "zambrotta"], ["Edmílson", "edmilson"], ["Juliano Belletti", "belletti"]]],
    [2, "Porters suplents del Barça", [
      ["Jordi Masip", "masip"], ["Antonio Adán", "adan"], ["José Manuel Pinto", "pinto"], ["Neto", "neto", "norberto murara"], ["Iñaki Peña", "pena", "inaki"],
      ["Jasper Cillessen", "cillessen"], ["Oier Olazábal", "olazabal", "oier"], ["Arnau Tenas", "tenas"], ["Albano Bizzarri", "bizzarri"],
      ["Wojciech Szczęsny", "szczesny", "sczesny"]]],
    [1, "Jugador amb més partits de la història del Barça", [
      ["Xavi Hernández", "xavi"]]]
  ] },
  { nom: "Atlético de Madrid", escut: "img/escuts/atletico.png", nivells: [
    [5, "Jugadors amb més de 25 gols a l'Atlètic", [
      ["Antoine Griezmann", "griezmann", "grizman"], ["Fernando Torres", "torres", "nino"], ["Sergio Agüero", "aguero", "kun"], ["Radamel Falcao", "falcao"],
      ["Diego Forlán", "forlan"], ["Diego Costa", "costa"], ["Luis Aragonés", "aragones"], ["Adelardo", "adelardo"], ["Koke", "koke"],
      ["Saúl Ñíguez", "saul"], ["Ángel Correa", "correa"], ["Yannick Carrasco", "carrasco"], ["Álvaro Morata", "morata"], ["Raúl García", "raul garcia"],
      ["Gárate", "garate"], ["Collar", "collar"]]],
    [4, "Argentins de l'Atlètic", [
      ["Diego Simeone", "simeone", "cholo"], ["Giuliano Simeone", "giuliano"], ["Sergio Agüero", "aguero", "kun"], ["Ángel Correa", "correa"],
      ["Rodrigo De Paul", "de paul", "depaul"], ["Julián Álvarez", "julian alvarez", "alvarez", "arana"], ["Nahuel Molina", "molina", "nahuel"],
      ["Nicolás Gaitán", "gaitan"], ["Luciano Vietto", "vietto"], ["Matías Kranevitter", "kranevitter"], ["Nico González", "nico gonzalez"]]],
    [3, "Jugadors que han estat a l'Atlètic i al Madrid", [
      ["Thibaut Courtois", "courtois"], ["Álvaro Morata", "morata"], ["Paulo Futre", "futre"], ["Hugo Sánchez", "hugo sanchez", "hugo"],
      ["Bernd Schuster", "schuster"], ["Santiago Solari", "solari"], ["Antonio Adán", "adan"], ["Quique Sánchez Flores", "quique flores", "quique sanchez flores"]]],
    [2, "Campions de la Champions que són a l'Atlètic", [
      ["Julián Álvarez", "julian alvarez", "alvarez", "arana"]]],
    [1, "Català que juga a l'Atlètic", [
      ["Marc Pubill", "pubill"]]]
  ] },
  { nom: "RCD Espanyol", escut: "img/escuts/espanyol.png", nivells: [
    [5, "Jugadors del Barça i de l'Espanyol", [
      ["Sergio García", "sergio garcia"], ["Luis García", "luis garcia"], ["Iván de la Peña", "de la pena", "ivan de la pena", "pelat"],
      ["Jordi Cruyff", "jordi cruyff", "jordi"], ["Ricardo Zamora", "zamora"], ["Pichi Alonso", "pichi", "alonso"], ["Nayim", "nayim"],
      ["Albert Celades", "celades"], ["Joan García", "joan garcia"]]],
    [4, "Jugadors catalans de l'Espanyol", [
      ["Raúl Tamudo", "tamudo"], ["Sergio García", "sergio garcia"], ["Joan Capdevila", "capdevila"], ["Joan García", "joan garcia"],
      ["Marc Roca", "roca"], ["Javi Puado", "puado"], ["Jofre Carreras", "carreras"], ["Pol Lozano", "lozano"], ["Dani Jarque", "jarque"],
      ["Víctor Sánchez", "victor sanchez"], ["Albert Lopo", "lopo"], ["Adrià Pedrosa", "pedrosa"], ["Carlos Romero", "romero"]]],
    [3, "Porters mítics de l'Espanyol", [
      ["Thomas N'Kono", "nkono", "n kono"], ["Ricardo Zamora", "zamora"], ["Carlos Kameni", "kameni"], ["Diego López", "diego lopez"],
      ["Francisco Pacheco", "pacheco"], ["Pau López", "pau lopez"], ["Joan García", "joan garcia"]]],
    [2, "Entrenadors de l'Espanyol", [
      ["Mauricio Pochettino", "pochettino", "poche"], ["Quique Sánchez Flores", "quique", "sanchez flores", "quique flores"], ["Ernesto Valverde", "valverde"],
      ["Javier Aguirre", "aguirre", "vasco aguirre"], ["Joaquín Caparrós", "caparros"], ["Vicente Moreno", "moreno"], ["Manolo González", "manolo gonzalez"],
      ["Rubi", "rubi"], ["Juande Ramos", "juande"], ["Miguel Ángel Lotina", "lotina"], ["Abelardo", "abelardo"], ["Pablo Machín", "machin"], ["Luis Fernández", "luis fernandez"]]],
    [1, "Màxim golejador de l'Espanyol a la Lliga", [
      ["Raúl Tamudo", "tamudo"]]]
  ] },
  { nom: "Manchester City", escut: "img/escuts/man-city.png", nivells: [
    [5, "Campions de la Champions amb el City", [
      ["Erling Haaland", "haaland"], ["Rodri", "rodri", "rodrigo hernandez"], ["Phil Foden", "foden"], ["Bernardo Silva", "bernardo"], ["John Stones", "stones"],
      ["Manuel Akanji", "akanji"], ["Rúben Dias", "ruben dias", "dias"], ["Joško Gvardiol", "gvardiol"], ["Nathan Aké", "ake"], ["Ederson", "ederson"],
      ["Kyle Walker", "walker"], ["Kevin De Bruyne", "de bruyne", "debruyne", "kdb"], ["İlkay Gündoğan", "gundogan"], ["Jack Grealish", "grealish"],
      ["Julián Álvarez", "julian alvarez", "alvarez", "arana"], ["Mateo Kovačić", "kovacic"]]],
    [4, "Jugadors no anglesos del City", [
      ["Erling Haaland", "haaland"], ["Rodri", "rodri"], ["Bernardo Silva", "bernardo"], ["Joško Gvardiol", "gvardiol"], ["Rúben Dias", "ruben dias", "dias"],
      ["Jérémy Doku", "doku"], ["Gianluigi Donnarumma", "donnarumma", "gigio"], ["Tijjani Reijnders", "reijnders"], ["Rayan Cherki", "cherki"],
      ["Rayan Aït-Nouri", "ait nouri", "aitnouri"], ["Omar Marmoush", "marmoush"], ["Matheus Nunes", "nunes"], ["Savinho", "savinho", "savio"],
      ["Mateo Kovačić", "kovacic"], ["Nathan Aké", "ake"], ["Manuel Akanji", "akanji"], ["Ederson", "ederson"], ["Sergio Agüero", "aguero", "kun"],
      ["Vincent Kompany", "kompany"], ["David Silva", "david silva"], ["Yaya Touré", "yaya toure", "toure"], ["Kevin De Bruyne", "de bruyne", "debruyne"]]],
    [3, "Entrenadors del City", [
      ["Pep Guardiola", "guardiola", "pep"], ["Roberto Mancini", "mancini"], ["Manuel Pellegrini", "pellegrini"], ["Mark Hughes", "hughes"],
      ["Kevin Keegan", "keegan"], ["Joe Mercer", "mercer"], ["Malcolm Allison", "allison"], ["Sven-Göran Eriksson", "eriksson"], ["Stuart Pearce", "pearce"],
      ["Peter Reid", "reid"], ["Brian Horton", "horton"]]],
    [2, "Porters del City", [
      ["Ederson", "ederson"], ["Gianluigi Donnarumma", "donnarumma", "gigio"], ["Joe Hart", "hart"], ["Claudio Bravo", "bravo"], ["Willy Caballero", "caballero"],
      ["Bert Trautmann", "trautmann"], ["Shay Given", "given"], ["Stefan Ortega", "ortega"], ["James Trafford", "trafford"], ["Scott Carson", "carson"],
      ["Costel Pantilimon", "pantilimon"], ["Joe Corrigan", "corrigan"]]],
    [1, "Noruec del City", [
      ["Erling Haaland", "haaland"], ["Oscar Bobb", "bobb"]]]
  ] }
];
