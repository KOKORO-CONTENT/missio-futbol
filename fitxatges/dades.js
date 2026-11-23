// "El camí dels fitxatges" (un sol jugador): tornar al Barça amb el mínim de fitxatges.
// A cada club s'obren dues opcions i cal dir un jugador/a (masculí o femení) que hagi estat als dos clubs.
// El Barça no es pot trobar abans de la ronda 5. Espanyol, Girona i Sabadell surten com a opcions impossibles (sense cap jugador vàlid).

// [id (fitxer d'img/escuts), nom que es veu]
window.CLUBS = {
  "barcelona": "Barça", "chelsea": "Chelsea", "psg": "PSG", "atletico": "Atlètic", "real-madrid": "Madrid", "sevilla": "Sevilla",
  "valencia": "València", "athletic": "Athletic", "real-sociedad": "Reial Societat", "villarreal": "Vila-real",
  "espanyol": "Espanyol", "girona": "Girona", "sabadell": "Sabadell"
};

// El camí és un graf: a cada club s'obren dues opcions. Mínim de camí: 5 fitxatges (p. ex. Barça > Chelsea > Atlètic > Sevilla > Athletic > Barça).
window.GRAF = {
  inici: "barcelona", meta: "barcelona",
  opcions: {
    "barcelona": ["chelsea", "psg"],
    "chelsea": ["atletico", "espanyol"],
    "psg": ["real-madrid", "atletico"],
    "atletico": ["sevilla", "girona"],
    "real-madrid": ["valencia", "sevilla"],
    "sevilla": ["athletic", "real-sociedad"],
    "valencia": ["real-sociedad", "athletic"],
    "athletic": ["sabadell", "barcelona"],
    "real-sociedad": ["barcelona", "villarreal"],
    "villarreal": ["girona", "barcelona"]
  }
};

// Jugadors/es que han jugat als dos clubs (primer equip, masculí i femení). Clau: els dos ids ordenats alfabèticament i separats per "|".
// El primer de cada llista és el de la pista. Fet amb Wikidata + coneixement propi; si en falta algun, afegeix-lo aquí o dóna-ho per bo des del panell.
window.PARELLES = {
  "barcelona|chelsea": ["Samuel Eto'o", "Cesc Fàbregas", "Deco", "Ricardo Quaresma", "João Félix", "Pedro", "Andreas Christensen", "Eiður Guðjohnsen", "Emmanuel Petit", "Mark Hughes", "Juliano Belletti", "Oriol Romeu", "Boudewijn Zenden", "Albert Ferrer", "Winston Bogarde", "Pierre-Emerick Aubameyang", "Marcos Alonso", "Keira Walsh", "Adriana Martín"],
  "barcelona|psg": ["Zlatan Ibrahimović", "Ronaldinho", "Dani Alves", "Thiago Motta", "Rafinha", "Ludovic Giuly", "Maxwell", "Juan Pablo Sorín", "Frédéric Déhu", "Richard Dutruel", "Neymar", "Lionel Messi", "Ousmane Dembélé", "Lucas Digne", "Lieke Martens", "Irene Paredes", "Élise Bussaglia", "Nataša Andonova", "Kheira Hamraoui"],
  "atletico|chelsea": ["Fernando Torres", "Diego Costa", "César Azpilicueta", "João Félix", "Filipe Luís", "Tiago", "Mateja Kežman", "Jimmy Floyd Hasselbaink", "Maniche", "Jesper Grønkjær", "Thibaut Courtois", "Saúl Ñíguez", "Álvaro Morata", "Hedvig Lindahl", "Ana Borges", "Adriana Martín"],
  "psg|real-madrid": ["Nicolas Anelka", "David Beckham", "Claude Makélélé", "Pablo Sarabia", "Gabriel Heinze", "Lassana Diarra", "Nenê", "Ángel Di María", "Keylor Navas", "Sergio Ramos", "Achraf Hakimi", "Kylian Mbappé", "Marco Asensio", "Aurélie Kaci"],
  "atletico|psg": ["Thiago Motta", "Mateja Kežman", "Cristian Rodríguez", "Kévin Gameiro", "Grégory Coupet", "Souleymane Bamba", "Ramón Heredia", "Peter Luccin", "Kang-in Lee", "Lucas Hernández", "Aminata Diallo"],
  "atletico|sevilla": ["Diego Simeone", "César Azpilicueta", "Éver Banega", "José Antonio Reyes", "Moacir", "Kévin Gameiro", "Luciano Vietto", "Geoffrey Kondogbia", "Vitolo", "Matías Kranevitter", "Manu del Moral", "José María Romero Poyón", "Salva Ballesta", "Miquel Soler", "Juan Velasco Damas", "Sebastián Losada", "Esteban Suárez", "Antonio López Habas", "Pablo Alfaro", "Lola Gallardo", "Alexandra López", "Grace Kazadi"],
  "real-madrid|valencia": ["Denis Cheryshev", "Fernando Gago", "Ezequiel Garay", "Álvaro Negredo", "Roberto Soldado", "Fernando Morientes", "Santiago Cañizares", "Rodrigo Moreno", "Dani Parejo", "Predrag Mijatović", "Iván Helguera", "Quique Sánchez Flores", "Iván Campo", "César Sánchez Domínguez", "Luis Milla", "José Manuel Ochotorena", "Rubén Sobrinas", "Juan Marrero Pérez", "Miguel Tendillo", "Simón Lecue", "Juan Cruz Sol", "Gerardo", "Raúl Albiol", "Claudia Zornoza"],
  "real-madrid|sevilla": ["Sergio Ramos", "Javier Hernández", "Davor Šuker", "Denis Cheryshev", "Javier Saviola", "José Antonio Reyes", "Álvaro Negredo", "Pablo Sarabia", "Iván Zamorano", "Robert Prosinečki", "Aleix Vidal", "Diego López", "Júlio Baptista", "Jesús Pereda", "Paco Buyo", "Dejan Petković", "David Soria", "Juan Agüero", "Sergio Sánchez", "Miquel Soler", "Enrique Mateos", "Bryan Rabello", "Sebastián Losada", "Nando Muñoz", "David Cobeño", "Federico Magallanes", "Olga Carmona"],
  "athletic|sevilla": ["Fernando Llorente", "Luis de la Fuente", "Aitor Ocio", "Patxi Ferreira", "Vanesa Gimbert"],
  "real-sociedad|sevilla": ["Adnan Januzaj", "Jonathas", "Carlos Fernández", "José Luis Martí", "Raúl Navas", "Jon Guridi", "Gema Gili"],
  "real-sociedad|valencia": ["David Silva", "Valeri Karpin", "Mathew Ryan", "Miguel Ángel Moyá", "Gerardo", "Gema Gili", "Manuela Lareo"],
  "athletic|valencia": ["Aritz Aduriz", "Andoni Zubizarreta", "Asier del Horno", "Iago Herrerín", "Unai Núñez", "Julen Agirrezabala", "Manuela Lareo"],
  "athletic|barcelona": ["Ernesto Valverde", "Julio Salinas", "Jon Andoni Goikoetxea", "Andoni Zubizarreta", "Santi Ezquerro", "José Ramón Alexanko", "Iñigo Martínez", "Irene Paredes", "Marta Unzué", "Leire Landa"],
  "barcelona|real-sociedad": ["Claudio Bravo", "Txiki Begiristain", "Rafinha", "José Mari Bakero", "Periko Alonso", "Meho Kodro", "Franck Songo'o", "Luis López Rekarte", "Antoine Griezmann", "Irene Paredes", "Bárbara Latorre", "Gema Gili", "Leire Landa", "Nuria Rábano Blanco", "Elixabete Sarasola"],
  "real-sociedad|villarreal": ["Nihat Kahveci", "José Ángel Valdés", "Javi Gracia", "Joseba Llorente", "Imanol Alguacil", "Gerardo", "Paola Soldevila"],
  "barcelona|villarreal": ["Pepe Reina", "Juan Román Riquelme", "Giovani dos Santos", "Martín Cáceres", "Paco Alcácer", "Manu Trigueros", "Edmílson", "Juliano Belletti", "Juan Pablo Sorín", "Jonathan dos Santos", "Juan Antonio Pizzi", "Sonny Anderson", "Javier Aquino", "Guillermo Amor", "Thomas Christiansen", "Roberto Fernández Bonillo", "Ilias Akhomach", "Matías Nahuel Leiva", "Joan Ángel Román", "Roger Garcia Junyent", "Quique Álvarez", "Salma Paralluelo", "Virginia Torrecilla"],
  "chelsea|espanyol": [], "atletico|girona": [], "athletic|sabadell": [], "girona|villarreal": []
};

// Pistes: posició i nacionalitat del primer jugador de la llista (primer es dóna la posició i, si es torna a prémer, la nacionalitat).
window.PISTES = {
  "barcelona|chelsea": { pos: "Davanter", nac: "Camerun" },
  "barcelona|psg": { pos: "Davanter", nac: "Suècia" },
  "atletico|chelsea": { pos: "Davanter", nac: "Espanya" },
  "psg|real-madrid": { pos: "Davanter", nac: "França" },
  "atletico|psg": { pos: "Migcampista", nac: "Itàlia" },
  "atletico|sevilla": { pos: "Migcampista", nac: "Argentina" },
  "real-madrid|valencia": { pos: "Migcampista", nac: "Rússia" },
  "real-madrid|sevilla": { pos: "Defensa", nac: "Espanya" },
  "athletic|sevilla": { pos: "Davanter", nac: "Espanya" },
  "real-sociedad|sevilla": { pos: "Extrem", nac: "Bèlgica" },
  "real-sociedad|valencia": { pos: "Migcampista", nac: "Espanya" },
  "athletic|valencia": { pos: "Davanter", nac: "Espanya" },
  "athletic|barcelona": { pos: "Davanter", nac: "Espanya" },
  "barcelona|real-sociedad": { pos: "Porter", nac: "Xile" },
  "real-sociedad|villarreal": { pos: "Davanter", nac: "Turquia" },
  "barcelona|villarreal": { pos: "Porter", nac: "Espanya" }
};

// Fotos (img/jugadors/): nom -> fitxer
window.FOTOS = {
  "Samuel Eto'o": "samuel-eto-o.jpg",
  "Cesc Fàbregas": "cesc-fabregas.jpg",
  "Deco": "deco.jpg",
  "Ricardo Quaresma": "ricardo-quaresma.jpg",
  "João Félix": "joao-felix.jpg",
  "Pedro": "pedro.jpg",
  "Andreas Christensen": "andreas-christensen.jpg",
  "Eiður Guðjohnsen": "ei-ur-gu-johnsen.jpg",
  "Emmanuel Petit": "emmanuel-petit.jpg",
  "Mark Hughes": "mark-hughes.jpg",
  "Juliano Belletti": "juliano-belletti.jpg",
  "Oriol Romeu": "oriol-romeu.jpg",
  "Boudewijn Zenden": "boudewijn-zenden.jpg",
  "Albert Ferrer": "albert-ferrer.jpg",
  "Winston Bogarde": "winston-bogarde.jpg",
  "Keira Walsh": "keira-walsh.jpg",
  "Zlatan Ibrahimović": "zlatan-ibrahimovic.jpg",
  "Ronaldinho": "ronaldinho.jpg",
  "Dani Alves": "dani-alves.jpg",
  "Thiago Motta": "thiago-motta.jpg",
  "Rafinha": "rafinha.jpg",
  "Maxwell": "maxwell.jpg",
  "Juan Pablo Sorín": "juan-pablo-sorin.jpg",
  "Frédéric Déhu": "frederic-dehu.jpg",
  "Lieke Martens": "lieke-martens.jpg",
  "Élise Bussaglia": "elise-bussaglia.jpg",
  "Nataša Andonova": "natasa-andonova.jpg",
  "Kheira Hamraoui": "kheira-hamraoui.jpg",
  "Fernando Torres": "fernando-torres.jpg",
  "Diego Costa": "diego-costa.jpg",
  "César Azpilicueta": "cesar-azpilicueta.jpg",
  "Filipe Luís": "filipe-luis.jpg",
  "Tiago": "tiago.jpg",
  "Mateja Kežman": "mateja-kezman.jpg",
  "Jimmy Floyd Hasselbaink": "jimmy-floyd-hasselbaink.jpg",
  "Nicolas Anelka": "nicolas-anelka.jpg",
  "David Beckham": "david-beckham.jpg",
  "Claude Makélélé": "claude-makelele.jpg",
  "Pablo Sarabia": "pablo-sarabia.jpg",
  "Gabriel Heinze": "gabriel-heinze.jpg",
  "Lassana Diarra": "lassana-diarra.jpg",
  "Kévin Gameiro": "kevin-gameiro.jpg",
  "Grégory Coupet": "gregory-coupet.jpg",
  "Souleymane Bamba": "souleymane-bamba.jpg",
  "Peter Luccin": "peter-luccin.jpg",
  "Diego Simeone": "diego-simeone.jpg",
  "Éver Banega": "ever-banega.jpg",
  "José Antonio Reyes": "jose-antonio-reyes.jpg",
  "Luciano Vietto": "luciano-vietto.jpg",
  "Vitolo": "vitolo.jpg",
  "Manu del Moral": "manu-del-moral.jpg",
  "Salva Ballesta": "salva-ballesta.jpg",
  "Miquel Soler": "miquel-soler.jpg",
  "Esteban Suárez": "esteban-suarez.jpg",
  "Antonio López Habas": "antonio-lopez-habas.jpg",
  "Lola Gallardo": "lola-gallardo.jpg",
  "Alexandra López": "alexandra-lopez.jpg",
  "Grace Kazadi": "grace-kazadi.jpg",
  "Álvaro Negredo": "alvaro-negredo.jpg",
  "Roberto Soldado": "roberto-soldado.jpg",
  "Fernando Morientes": "fernando-morientes.jpg",
  "Santiago Cañizares": "santiago-canizares.jpg",
  "Rodrigo Moreno": "rodrigo-moreno.jpg",
  "Dani Parejo": "dani-parejo.jpg",
  "Predrag Mijatović": "predrag-mijatovic.jpg",
  "Iván Helguera": "ivan-helguera.jpg",
  "Iván Campo": "ivan-campo.jpg",
  "César Sánchez Domínguez": "cesar-sanchez-dominguez.jpg",
  "José Manuel Ochotorena": "jose-manuel-ochotorena.jpg",
  "Gerardo": "gerardo.jpg"
};
