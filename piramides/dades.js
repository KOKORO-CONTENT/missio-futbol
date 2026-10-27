// "Piràmides": 4 escuts, 1 minut i mig cadascun. Cada piràmide té 5 nivells (5 → 1 respostes), que es fan en aquest ordre.
// Cada nivell: [numero de caselles, enunciat, [respostes vàlides]]. Cada resposta: [nom, paraules que es donen per bones...]
// (a més, es dóna per bo l'últim cognom si no el comparteix cap altre jugador del mateix escut).
// Es dóna per bona QUALSEVOL de la llista. Al final es revelen les primeres que no s'hagin fet servir: per això l'ordre és
// la proposta de solució (primer els més recents i els més històrics/coneguts).
// Fonts (octubre 2026): Transfermarkt (dorsals del Barça, porters, màxim de partits, màxims golejadors de l'Atlètic i de l'Espanyol,
// argentins i noruecs, plantilles 2026 i 2022/23 del City, entrenadors), fcbarcelona.es (entrenadors), Mundo Deportivo (campions del món),
// DAZN (Madrid + Atlètic), AS (Barça + Espanyol), ceroacero (campions de la Champions a l'Atlètic) i el lloc de naixement a Transfermarkt.
window.TEMPS = 90;
window.ESCUTS = [
  { nom: "FC Barcelona", escut: "img/escuts/barcelona.png", nivells: [
    [5, "Entrenadors del Barça", [
      ["Hansi Flick", "flick", "hansi"], ["Pep Guardiola", "guardiola", "pep", "josep guardiola"], ["Johan Cruyff", "cruyff", "cruijff", "johan"],
      ["Luis Enrique", "lucho", "enrique", "luis enrique martinez"], ["Frank Rijkaard", "rijkaard", "rijkard"],
      ["Xavi Hernández", "xavi"], ["Louis van Gaal", "van gaal", "vangaal"], ["Ronald Koeman", "koeman"], ["Ernesto Valverde", "valverde", "txingurri"],
      ["Quique Setién", "setien"], ["Tito Vilanova", "vilanova", "tito"], ["Tata Martino", "martino", "tata", "gerardo martino"],
      ["Bobby Robson", "robson"], ["Terry Venables", "venables"], ["Luis Aragonés", "aragones"], ["Carles Rexach", "rexach"],
      ["Radomir Antić", "antic"], ["Llorenç Serra Ferrer", "serra ferrer"], ["Udo Lattek", "lattek"], ["César Luis Menotti", "menotti"],
      ["Hennes Weisweiler", "weisweiler"], ["Rinus Michels", "michels"], ["Helenio Herrera", "herrera"], ["Ferdinand Daucik", "daucik"],
      ["Josep Samitier", "samitier"], ["Vic Buckingham", "buckingham"], ["Lucien Müller", "muller"]]],
    [4, "Dorsals 9 del Barça", [
      ["Gabriel Jesus", "jesus", "gabriel jesus"], ["Robert Lewandowski", "lewandowski", "lewa"], ["Luis Suárez", "suarez", "pistolero"],
      ["Ronaldo Nazário", "ronaldo", "ronaldo nazario", "fenomeno"], ["Memphis Depay", "memphis", "depay"], ["Martin Braithwaite", "braithwaite"],
      ["Zlatan Ibrahimović", "zlatan", "ibrahimovic", "ibra"], ["Samuel Eto'o", "etoo", "eto o", "eto"], ["Alexis Sánchez", "alexis"],
      ["Bojan Krkić", "bojan", "krkic"], ["Patrick Kluivert", "kluivert"], ["Sonny Anderson", "anderson", "sonny"], ["Romário", "romario"],
      ["Hristo Stoichkov", "stoichkov", "stoitchkov"], ["Michael Laudrup", "laudrup"], ["Gary Lineker", "lineker"], ["Meho Kodro", "kodro"],
      ["Óscar García", "oscar garcia"], ["Julio Salinas", "salinas"], ["Jordi Cruyff", "jordi cruyff", "jordi"], ["Guillermo Amor", "amor"],
      ["Toni Velamazán", "velamazan"], ["Xavi Escaich", "escaich", "xavier escaich"], ["Miguel Ángel Nadal", "nadal"], ["Mark Hughes", "hughes"],
      ["Pichi Alonso", "pichi", "alonso"], ["Johan Cruyff", "cruyff", "cruijff"], ["Hans Krankl", "krankl"], ["Sándor Kocsis", "kocsis"],
      ["László Kubala", "kubala"], ["Josep Samitier", "samitier"], ["Quini", "quini"]]],
    [3, "Defenses del Barça campions del món", [
      ["Gerard Piqué", "pique"], ["Carles Puyol", "puyol"], ["Pau Cubarsí", "cubarsi"], ["Eric García", "eric garcia", "eric"], ["Samuel Umtiti", "umtiti"],
      ["Lilian Thuram", "thuram"], ["Gianluca Zambrotta", "zambrotta"], ["Edmílson", "edmilson"], ["Juliano Belletti", "belletti"], ["Laurent Blanc", "blanc"],
      ["Ona Batlle", "batlle"], ["Irene Paredes", "paredes"], ["Laia Codina", "codina"]]],
    [2, "Porters suplents del Barça", [
      ["Wojciech Szczęsny", "szczesny", "sczesny"], ["Iñaki Peña", "pena", "inaki"], ["Neto", "neto", "norberto murara"], ["Jasper Cillessen", "cillessen"],
      ["Claudio Bravo", "bravo"], ["Marc-André ter Stegen", "ter stegen", "terstegen", "stegen"], ["Jordi Masip", "masip"], ["José Manuel Pinto", "pinto"],
      ["Oier Olazábal", "olazabal", "oier"], ["Dominik Livaković", "livakovic"], ["Albert Jorquera", "jorquera"], ["Rüştü Reçber", "rustu", "recber"],
      ["Robert Enke", "enke"], ["Francesc Arnau", "arnau"], ["Vítor Baía", "baia"], ["Carles Busquets", "carles busquets"], ["Julen Lopetegui", "lopetegui"],
      ["Jesús Angoy", "angoy"], ["Juan Carlos Unzué", "unzue"], ["Pepe Reina", "reina"], ["Richard Dutruel", "dutruel"], ["Víctor Valdés", "valdes"]]],
    [1, "Jugador amb més partits de la història del Barça", [
      ["Lionel Messi", "messi", "leo"]]]
  ] },
  { nom: "Atlético de Madrid", escut: "img/escuts/atletico.png", nivells: [
    [5, "Jugadors amb més de 25 gols a l'Atlètic", [
      ["Antoine Griezmann", "griezmann", "grizman"], ["Fernando Torres", "torres", "nino"], ["Sergio Agüero", "aguero", "kun"], ["Radamel Falcao", "falcao"],
      ["Luis Aragonés", "aragones"], ["Luis Suárez", "suarez", "pistolero"], ["Koke", "koke"], ["Saúl Ñíguez", "saul", "niguez"], ["Julián Álvarez", "julian alvarez", "alvarez", "arana"],
      ["Álvaro Morata", "morata"], ["Diego Costa", "costa"], ["Diego Forlán", "forlan"], ["Ángel Correa", "correa"], ["Yannick Carrasco", "carrasco"],
      ["Marcos Llorente", "llorente", "marcos llorente"], ["Raúl García", "raul garcia"], ["Alexander Sørloth", "sorloth"], ["João Félix", "joao felix", "felix"],
      ["Kévin Gameiro", "gameiro"], ["Diego Godín", "godin"], ["Diego Simeone", "simeone", "cholo"], ["Hugo Sánchez", "hugo sanchez", "hugo"], ["Paulo Futre", "futre"],
      ["Jimmy Floyd Hasselbaink", "hasselbaink"], ["Maxi Rodríguez", "maxi rodriguez", "maxi"], ["Christian Vieri", "vieri"], ["Julio Salinas", "salinas"],
      ["José Mari", "jose mari"], ["José Luis Caminero", "caminero"], ["Salva Ballesta", "ballesta"], ["Milinko Pantić", "pantic"], ["Juan Carlos Aguilera", "aguilera"],
      ["Quique Ramos", "quique ramos"], ["Luis García", "luis garcia"], ["Simão", "simao"], ["José Eulogio Gárate", "garate"], ["Adelardo", "adelardo"],
      ["Enrique Collar", "collar"], ["Adrián Escudero", "escudero"], ["Paco Campos", "campos"], ["Joaquín Peiró", "peiro"], ["Manolo", "manolo"],
      ["Rubén Cano", "ruben cano", "cano"], ["José Juncosa", "juncosa"], ["Jorge Mendonça", "mendonca"], ["Miguel González", "miguel gonzalez"],
      ["Kiko Narváez", "kiko", "narvaez"], ["Javier Irureta", "irureta"], ["Baltazar", "baltazar"], ["Larbi Ben Barek", "ben barek"], ["Roberto Marina", "marina"],
      ["Rubén Ayala", "ayala"], ["Negro Cabrera", "negro cabrera"], ["Agustín Sánchez", "agustin sanchez"], ["Francisco Arencibia", "arencibia"],
      ["Fernando Correa", "fernando correa"], ["Miguel Jones", "jones"], ["Julio Elícegui", "elicegui"], ["Leivinha", "leivinha"], ["Juan José Rubio", "rubio"],
      ["Vavá", "vava"], ["Henry Carlsson", "carlsson"], ["Francisco Molina", "francisco molina"], ["Alfonso Silva", "alfonso silva"], ["Pruden Sánchez", "pruden"],
      ["José Luis Pérez-Payá", "perez paya", "paya"], ["Jesús Landaburu", "landaburu"], ["Gabriel Taltavull", "taltavull"], ["José Cardona", "cardona"],
      ["Rafael Mújica", "mujica"], ["Manuel Jorge", "manuel jorge"], ["Luis Marín", "luis marin"], ["Jorge da Silva", "jorge da silva"], ["Juan Vázquez", "juan vazquez"],
      ["Eugenio Leal", "eugenio leal"], ["José Ufarte", "ufarte"], ["Ignacio Salcedo", "salcedo"], ["Rafa Delgado", "rafa delgado"], ["Adrián López", "adrian lopez"],
      ["Juan Carlos Arteche", "arteche"]]],
    [4, "Argentins de l'Atlètic", [
      ["Julián Álvarez", "julian alvarez", "alvarez", "arana"], ["Cristian Romero", "romero", "cuti romero", "cuti"], ["Giuliano Simeone", "giuliano", "giuliano simeone"],
      ["Sergio Agüero", "aguero", "kun"], ["Diego Simeone", "simeone", "cholo", "diego simeone"], ["Rodrigo De Paul", "de paul", "depaul"], ["Ángel Correa", "correa"],
      ["Nahuel Molina", "molina", "nahuel"], ["Thiago Almada", "almada"], ["Nico González", "nico gonzalez"], ["Juan Musso", "musso"],
      ["Nico Gaitán", "gaitan"], ["Luciano Vietto", "vietto"], ["Matías Kranevitter", "kranevitter"], ["Augusto Fernández", "augusto fernandez"],
      ["Cristian Ansaldi", "ansaldi"], ["José Sosa", "sosa"], ["Martín Demichelis", "demichelis"], ["Cata Díaz", "cata diaz"], ["Emiliano Insúa", "insua"],
      ["Éver Banega", "banega"], ["Eduardo Salvio", "salvio"], ["Luciano Galletti", "galletti"], ["Nehuén Pérez", "nehuen perez"], ["José Eulogio Gárate", "garate"]]],
    [3, "Jugadors que han estat a l'Atlètic i al Madrid", [
      ["Thibaut Courtois", "courtois"], ["Álvaro Morata", "morata"], ["Hugo Sánchez", "hugo sanchez", "hugo"], ["Marcos Llorente", "llorente", "marcos llorente"],
      ["Sergio Reguilón", "reguilon"], ["Santiago Solari", "solari"], ["Bernd Schuster", "schuster"], ["Raúl González", "raul", "raul gonzalez"],
      ["José Antonio Reyes", "reyes"], ["Juanfran Torres", "juanfran"], ["José Manuel Jurado", "jurado"], ["Juan Eduardo Esnáider", "esnaider"],
      ["José Luis Pérez Caminero", "caminero", "perez caminero"], ["Paco Llorente", "paco llorente"], ["Ramón Grosso", "grosso"]]],
    [2, "Campions de la Champions que són a l'Atlètic", [
      ["Julián Álvarez", "julian alvarez", "alvarez", "arana"], ["Kang-in Lee", "lee", "kang in lee", "kang-in", "kangin"]]],
    [1, "Català que juga a l'Atlètic", [
      ["Marc Pubill", "pubill"], ["Sergi Barjuán", "barjuan", "sergi"]]]
  ] },
  { nom: "RCD Espanyol", escut: "img/escuts/espanyol.png", nivells: [
    [5, "Jugadors del Barça i de l'Espanyol", [
      ["Joan García", "joan garcia"], ["Martin Braithwaite", "braithwaite"], ["Sergio García", "sergio garcia"], ["Iván de la Peña", "de la pena", "ivan de la pena", "pelat"],
      ["László Kubala", "kubala"], ["Ricardo Zamora", "zamora"], ["Coutinho", "coutinho"], ["Víctor Sánchez", "victor sanchez"], ["Jordi Cruyff", "jordi cruyff"],
      ["Óscar García", "oscar garcia"], ["Roger García", "roger"], ["Aleix Vidal", "vidal"], ["Abraham González", "abraham"], ["Simão", "simao"], ["Rufete", "rufete"],
      ["Toni Velamazán", "velamazan"], ["Jofre Mateu", "jofre mateu", "jofre"], ["Dani García Lara", "dani garcia"], ["Nando", "nando"], ["Cristóbal Parralo", "parralo"],
      ["Xavi Escaich", "escaich"], ["Igor Korneyev", "korneyev"], ["Miquel Soler", "soler"], ["Ernesto Valverde", "valverde"], ["Urbano Ortega", "urbano"],
      ["Pichi Alonso", "pichi", "alonso"], ["Canito", "canito"], ["Urruti", "urruti", "urruticoechea"], ["Marcial", "marcial"], ["Corominas", "corominas"],
      ["Cayetano Ré", "cayetano re", "re"], ["Zoltan Czibor", "czibor"], ["Justo Tejada", "tejada"]]],
    [4, "Jugadors catalans de l'Espanyol", [
      ["Javi Puado", "puado"], ["Sergio García", "sergio garcia"], ["Joan Capdevila", "capdevila"], ["Víctor Sánchez", "victor sanchez"], ["Joan García", "joan garcia"],
      ["Edu Expósito", "exposito", "edu exposito"], ["Pere Milla", "milla"], ["Jofre Carreras", "carreras"], ["Gerard Moreno", "gerard moreno", "moreno"],
      ["Marc Roca", "roca"], ["Javi Hernández", "javi hernandez"], ["Álex Calatrava", "calatrava"], ["Ángel Fortuño", "fortuno"], ["Roger Hinojo", "hinojo"],
      ["Marcos Fernández", "marcos fernandez"], ["David López", "david lopez"], ["David García", "david garcia"], ["Toni Jiménez", "toni jimenez"],
      ["Jordi Lardín", "lardin"], ["Antonio Argilés", "argiles"], ["Javier Marcet", "marcet"], ["José Parra", "parra"], ["José Prat", "prat"],
      ["José Egea", "egea"], ["Raúl Tamudo", "tamudo"]]],
    [3, "Porters mítics de l'Espanyol", [
      ["Thomas N'Kono", "nkono", "n kono"], ["Carlos Kameni", "kameni"], ["Toni Jiménez", "toni jimenez"], ["Ricardo Zamora", "zamora"], ["Diego López", "diego lopez"],
      ["Kiko Casilla", "casilla"], ["Joan García", "joan garcia"], ["Marko Dmitrović", "dmitrovic"], ["Pau López", "pau lopez"], ["Cristian Álvarez", "cristian alvarez"],
      ["Fernando Pacheco", "pacheco"], ["Gorka Iraizoz", "iraizoz"]]],
    [2, "Entrenadors de l'Espanyol", [
      ["Manolo González", "manolo gonzalez"], ["Mauricio Pochettino", "pochettino", "poche"], ["Quique Sánchez Flores", "quique", "sanchez flores", "quique flores"],
      ["Marcelo Bielsa", "bielsa", "loco"], ["Ernesto Valverde", "valverde"], ["Luis Aragonés", "aragones"], ["Javier Aguirre", "aguirre", "vasco aguirre"],
      ["Juande Ramos", "juande"], ["Vicente Moreno", "vicente moreno"], ["Rubi", "rubi"], ["Abelardo", "abelardo"], ["Pablo Machín", "machin"],
      ["Diego Martínez", "diego martinez"], ["Luis García Plaza", "luis garcia plaza", "garcia plaza"], ["Luis Blanco", "blanco"], ["Francisco Rufete", "rufete"],
      ["David Gallego", "gallego"], ["Constantin Gâlcă", "galca"], ["Sergio González", "sergio gonzalez"], ["Raúl Longhi", "longhi"], ["Mané", "mane"],
      ["Tintín Márquez", "tintin", "marquez"], ["Miguel Ángel Lotina", "lotina"], ["Luis Fernández", "luis fernandez"], ["Javier Clemente", "clemente"],
      ["José Antonio Camacho", "camacho"], ["Luis Miguel Ramis", "ramis"], ["László Kubala", "kubala"], ["Ricardo Zamora", "zamora"]]],
    [1, "Màxim golejador de l'Espanyol a la Lliga", [
      ["Raúl Tamudo", "tamudo"]]]
  ] },
  { nom: "Manchester City", escut: "img/escuts/man-city.png", nivells: [
    [5, "Campions de la Champions amb el City", [
      ["Rodri", "rodri", "rodrigo hernandez"], ["Phil Foden", "foden"], ["Bernardo Silva", "bernardo"], ["Kevin De Bruyne", "de bruyne", "debruyne", "kdb"],
      ["John Stones", "stones"], ["Rúben Dias", "ruben dias", "dias"], ["Manuel Akanji", "akanji"], ["Kyle Walker", "walker"], ["Ederson", "ederson"],
      ["İlkay Gündoğan", "gundogan"], ["Jack Grealish", "grealish"], ["Julián Álvarez", "julian alvarez", "alvarez", "arana"], ["Riyad Mahrez", "mahrez"],
      ["Nathan Aké", "ake"], ["Aymeric Laporte", "laporte"], ["Rico Lewis", "rico lewis"], ["Stefan Ortega", "ortega"], ["Sergio Gómez", "sergio gomez"],
      ["Erling Haaland", "haaland"]]],
    [4, "Jugadors no anglesos del City", [
      ["Joško Gvardiol", "gvardiol"], ["Gianluigi Donnarumma", "donnarumma", "gigio"], ["Jérémy Doku", "doku"], ["Rayan Cherki", "cherki"],
      ["Rayan Aït-Nouri", "ait nouri", "aitnouri"], ["Matheus Nunes", "nunes"], ["Enzo Fernández", "enzo fernandez", "enzo"], ["Mateo Kovačić", "kovacic"],
      ["Abdukodir Khusanov", "khusanov"], ["Iliman Ndiaye", "ndiaye"], ["Ayyoub Bouaddi", "bouaddi"], ["Gerónimo Rulli", "rulli"], ["Vitor Reis", "vitor reis"],
      ["Allan", "allan"], ["Antoine Semenyo", "semenyo"], ["Rodri", "rodri"], ["Bernardo Silva", "bernardo"], ["Rúben Dias", "ruben dias", "dias"],
      ["Kevin De Bruyne", "de bruyne", "debruyne"], ["Vincent Kompany", "kompany"], ["Sergio Agüero", "aguero", "kun"], ["David Silva", "david silva"],
      ["Yaya Touré", "yaya toure", "toure"], ["Ederson", "ederson"], ["Manuel Akanji", "akanji"], ["Julián Álvarez", "julian alvarez", "alvarez"],
      ["İlkay Gündoğan", "gundogan"], ["Riyad Mahrez", "mahrez"], ["Erling Haaland", "haaland"]]],
    [3, "Entrenadors del City", [
      ["Enzo Maresca", "maresca"], ["Pep Guardiola", "guardiola", "pep"], ["Roberto Mancini", "mancini"], ["Manuel Pellegrini", "pellegrini"], ["Mark Hughes", "hughes"],
      ["Sven-Göran Eriksson", "eriksson"], ["Kevin Keegan", "keegan"], ["Stuart Pearce", "pearce"], ["Joe Royle", "royle"], ["Frank Clark", "frank clark"],
      ["Joe Mercer", "mercer"], ["Malcolm Allison", "allison"], ["Peter Reid", "reid"], ["Howard Kendall", "kendall"], ["Brian Kidd", "kidd"], ["Tony Book", "tony book"],
      ["Alan Ball", "alan ball"], ["Steve Coppell", "coppell"], ["Brian Horton", "horton"]]],
    [2, "Porters del City", [
      ["Gianluigi Donnarumma", "donnarumma", "gigio"], ["Ederson", "ederson"], ["Joe Hart", "hart"], ["Claudio Bravo", "bravo"], ["Willy Caballero", "caballero"],
      ["Stefan Ortega", "ortega"], ["James Trafford", "trafford"], ["Zack Steffen", "steffen"], ["Scott Carson", "carson"], ["Costel Pantilimon", "pantilimon"],
      ["Kasper Schmeichel", "kasper schmeichel"], ["Shay Given", "given"], ["David James", "david james"], ["Nicky Weaver", "weaver"], ["Bert Trautmann", "trautmann"],
      ["Joe Corrigan", "corrigan"], ["Peter Schmeichel", "peter schmeichel"], ["David Seaman", "seaman"], ["Frank Swift", "swift"], ["Márton Fülöp", "fulop"],
      ["Andreas Isaksson", "isaksson"], ["Gerónimo Rulli", "rulli"], ["Marcus Bettinelli", "bettinelli"]]],
    [1, "Noruec del City", [
      ["Erling Haaland", "haaland"], ["Oscar Bobb", "bobb"], ["Sverre Nypan", "nypan"], ["Alf-Inge Haaland", "alf inge haaland", "alf-inge", "alf inge"],
      ["Egil Østenstad", "ostenstad"], ["Åge Hareide", "hareide"]]]
  ] }
];
