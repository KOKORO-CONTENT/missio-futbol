// "El camí dels fitxatges": un camí de clubs. Parteix d'un escut i s'obren dos clubs nous; el concursant tria a quin dels dos
// i ha de dir un jugador que hagi jugat als dos clubs (el de dalt i el triat). El triat és el punt de partida de la ronda següent.
// Document de la proposta: Barça · Arsenal/Bayern · City/PSG · Chelsea/Atlètic · Vila-real/Betis · Barça/Madrid.
window.CONCURSANTS = ["Gemma", "Iris"];

// [id (fitxer d'img/escuts), nom que es veu]
window.CLUBS = {
  "barcelona": "Barça", "arsenal": "Arsenal", "bayern": "Bayern", "man-city": "Man. City", "psg": "PSG",
  "chelsea": "Chelsea", "atletico": "Atlètic", "villarreal": "Vila-real", "betis": "Betis", "real-madrid": "Madrid"
};

// El camí: club de sortida i, a cada ronda, les dues opcions. (Es poden afegir més camins a RUTES i canviar-ne l'ordre.)
window.RUTES = [
  { sortida: "barcelona", rondes: [["arsenal", "bayern"], ["man-city", "psg"], ["chelsea", "atletico"], ["villarreal", "betis"], ["barcelona", "real-madrid"]] }
];

// Jugadors/es que han jugat als dos clubs (primer equip). Clau: els dos ids ordenats alfabèticament i separats per "|".
// Surt al quadre de controls i serveix per validar sol el nom que s'escriu; si cal, el presentador pot donar-ho per bo o per fals.
// Revisat amb Wikidata (jugadors amb els dos clubs a la trajectòria) + coneixement propi per als fitxatges recents que Wikidata no té; si en falta algun, afegeix-lo aquí o dóna-ho per bo des del panell.
window.PARELLES = {
  "arsenal|barcelona": ["Thierry Henry", "Cesc Fàbregas", "Thomas Vermaelen", "Giovanni van Bronckhorst", "Emmanuel Petit", "Alexander Hleb", "Alex Song", "Marc Overmars", "Sylvinho", "Alexis Sánchez", "Pierre-Emerick Aubameyang", "Héctor Bellerín", "Denis Suárez"],
  "barcelona|bayern": ["Robert Lewandowski", "Thiago Alcântara", "Philippe Coutinho", "Arturo Vidal", "Mark van Bommel", "João Cancelo", "Pepe Reina", "Patrik Andersson", "Mark Hughes"],
  "arsenal|man-city": ["Raheem Sterling", "Patrick Vieira", "Emmanuel Adebayor", "Nicolas Anelka", "Samir Nasri", "Bacary Sagna", "Kolo Touré", "Gaël Clichy", "Oleksandr Zinchenko", "Gabriel Jesus", "David Seaman", "Andy Cole", "Sylvinho"],
  "arsenal|psg": ["Nicolas Anelka", "Mikel Arteta", "Lassana Diarra"],
  "bayern|man-city": ["Jérôme Boateng", "Martín Demichelis", "Owen Hargreaves", "Daniel Van Buyten", "Dietmar Hamann", "Leroy Sané", "João Cancelo", "Michael Tarnat"],
  "bayern|psg": ["Kingsley Coman", "Juan Bernat", "Eric Maxim Choupo-Moting", "Bixente Lizarazu", "Renato Sanches"],
  "chelsea|man-city": ["Kevin De Bruyne", "Frank Lampard", "Nicolas Anelka", "Raheem Sterling", "Cole Palmer", "Mateo Kovačić", "Wayne Bridge", "Shaun Wright-Phillips", "Willy Caballero", "Nathan Aké", "Daniel Sturridge", "George Weah", "Tal Ben Haim", "Scott Sinclair"],
  "atletico|man-city": ["Sergio Agüero", "Julián Álvarez", "Rodri", "Martín Demichelis", "Martin Petrov", "Kiki Musampa"],
  "chelsea|psg": ["Thiago Silva", "David Luiz", "Nicolas Anelka", "Claude Makélélé", "Christopher Nkunku", "George Weah", "Lassana Diarra", "Mateja Kežman"],
  "atletico|psg": ["Thiago Motta", "Kevin Gameiro", "Lucas Hernández", "Mateja Kežman", "Cristian Rodríguez", "Grégory Coupet", "Peter Luccin"],
  "chelsea|villarreal": ["Nicolas Jackson", "Alexandre Pato", "Juliano Belletti", "Bertrand Traoré"],
  "betis|chelsea": ["Gustavo Poyet", "Charly Musonda"],
  "atletico|villarreal": ["Diego Forlán", "Diego Godín", "Rodri", "Joan Capdevila", "Fabricio Coloccini", "Sergio Asenjo", "Luciano Vietto", "Adrián López", "Oliver Torres", "Ariel Ibagaza", "Léo Baptistão", "Rafael Santos Borré"],
  "atletico|betis": ["Antonio Adán", "Joel Robles", "Dani Pacheco", "Léo Baptistão", "Rubén Pérez"],
  "barcelona|villarreal": ["Pepe Reina", "Juan Román Riquelme", "Giovani dos Santos", "Jonathan dos Santos", "Martín Cáceres", "Paco Alcácer", "Manu Trigueros", "Edmílson", "Juliano Belletti", "Juan Pablo Sorín", "Sonny Anderson", "Guillermo Amor"],
  "barcelona|betis": ["Claudio Bravo", "Marc Bartra", "José Manuel Pinto", "Martín Montoya", "Cristian Tello", "Carles Aleña", "Joan Verdú", "Héctor Bellerín", "Emerson Royal", "Junior Firpo", "Juan Miranda", "Alfonso Pérez"],
  "barcelona|real-madrid": ["Luis Figo", "Ronaldo Nazário", "Michael Laudrup", "Bernd Schuster", "Luis Enrique", "Gheorghe Hagi", "Javier Saviola", "Julen Lopetegui", "Robert Prosinečki", "Samuel Eto'o", "Albert Celades", "Alfonso Pérez", "Ricardo Zamora", "José Samitier"],
  "betis|real-madrid": ["Isco", "Dani Ceballos", "Sergio Canales", "Antonio Adán", "Rafael van der Vaart", "Javi García", "Robert Jarni", "Willian José", "Rafael Gordillo", "Alfonso Pérez"],
  "real-madrid|villarreal": ["Denis Cheryshev", "Roberto Soldado", "Diego López", "Dani Parejo", "Raúl Albiol", "Borja Valero", "Cicinho"]
};
