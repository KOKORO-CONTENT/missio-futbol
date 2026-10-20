// "GeoFutbol": com el GeoGuessr, però en lloc d'un carrer surt un futbolista i s'ha de clicar al mapa del món
// on juga ara (l'estadi del seu club). Clubs comprovats a l'octubre del 2026.
// ll: [longitud, latitud] de l'estadi. foto: dins de img/. escut: dins de img/escuts/.
window.JUGADORS = [
  { id: "dro", nom: "Dro Fernández", foto: "caps/dro.png?v=2", club: "PSG", escut: "psg.png", estadi: "Parc des Princes", lloc: "París, França", ll: [2.2530, 48.8414] },
  { id: "romeu", nom: "Oriol Romeu", foto: "caps/oriol-romeu.png?v=2", club: "Avispa Fukuoka", escut: "avispa-fukuoka.png", estadi: "Best Denki Stadium", lloc: "Fukuoka, Japó", ll: [130.4614, 33.5859] },
  { id: "lewandowski", nom: "Robert Lewandowski", foto: "caps/robert-lewandowski.png?v=2", club: "Chicago Fire", escut: "chicago-fire.png", estadi: "Soldier Field", lloc: "Chicago, Estats Units", ll: [-87.6167, 41.8623] },
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "caps/cristiano-ronaldo.png?v=2", club: "Al-Nassr", escut: "al-nassr.png", estadi: "Al-Awwal Park", lloc: "Riad, Aràbia Saudita", ll: [46.6247, 24.7246] },
  { id: "salma", nom: "Salma Paralluelo", foto: "caps/salma-paralluelo.png?v=2", club: "OL Lyonnes", escut: "ol-lyonnes.png", estadi: "Parc OL", lloc: "Lió, França", ll: [4.9822, 45.7653] },
  { id: "villalibre", nom: "Asier Villalibre", foto: "caps/asier-villalibre.png?v=2", club: "Racing de Santander", escut: "racing.png", estadi: "El Sardinero", lloc: "Santander, Espanya", ll: [-3.7930, 43.4762] },
  { id: "lautaro", nom: "Lautaro Martínez", foto: "caps/lautaro-martinez.png?v=2", club: "Inter de Milà", escut: "inter.png", estadi: "San Siro", lloc: "Milà, Itàlia", ll: [9.1240, 45.4781] },
  { id: "pauvictor", nom: "Pau Víctor", foto: "caps/pau-victor.png?v=2", club: "Braga", escut: "braga.png", estadi: "Estádio Municipal de Braga", lloc: "Braga, Portugal", ll: [-8.4297, 41.5626] },
  { id: "jenni", nom: "Jenni Hermoso", foto: "caps/jenni-hermoso.png?v=2", club: "Atlètic de Madrid", escut: "atletico.png", estadi: "Centre Esportiu d'Alcalá de Henares", lloc: "Alcalá de Henares, Espanya", ll: [-3.3561, 40.5049] },
  { id: "guiu", nom: "Marc Guiu", foto: "caps/marc-guiu.png?v=2", club: "RB Leipzig", escut: "leipzig.png", estadi: "Red Bull Arena", lloc: "Leipzig, Alemanya", ll: [12.3483, 51.3458] },
  { id: "riqui", nom: "Riqui Puig", foto: "caps/riqui-puig.png?v=2", club: "LA Galaxy", escut: "la-galaxy.png", estadi: "Dignity Health Sports Park", lloc: "Carson (Los Angeles), Estats Units", ll: [-118.2610, 33.8644] },
  { id: "neymar", nom: "Neymar Jr", foto: "caps/neymar.png?v=2", club: "Santos", escut: "santos.png", estadi: "Vila Belmiro", lloc: "Santos, Brasil", ll: [-46.339, -23.9512] },
  { id: "stuani", nom: "Cristhian Stuani", foto: "caps/cristhian-stuani.png?v=2", club: "Girona", escut: "girona.png", estadi: "Montilivi", lloc: "Girona, Catalunya", ll: [2.8287, 41.9612] },
  { id: "griezmann", nom: "Antoine Griezmann", foto: "caps/antoine-griezmann.png?v=2", club: "Orlando City", escut: "orlando-city.png", estadi: "Inter&Co Stadium", lloc: "Orlando, Estats Units", ll: [-81.3893, 28.5411] },
  { id: "alexia", nom: "Alèxia Putellas", foto: "caps/alexia-putellas.png?v=2", club: "London City Lionesses", escut: "london-city.png", estadi: "Hayes Lane", lloc: "Londres, Anglaterra", ll: [0.0186, 51.3897] },
  { id: "roque", nom: "Vitor Roque", foto: "caps/vitor-roque.png?v=2", club: "Palmeiras", escut: "palmeiras.png", estadi: "Allianz Parque", lloc: "São Paulo, Brasil", ll: [-46.6783, -23.5275] },
  { id: "degea", nom: "David de Gea", foto: "caps/david-de-gea.png?v=2", club: "Fiorentina", escut: "fiorentina.png", estadi: "Artemio Franchi", lloc: "Florència, Itàlia", ll: [11.2826, 43.7809] },
  { id: "vozinha", nom: "Vozinha", foto: "caps/vozinha.png?v=2", club: "Colo-Colo", escut: "colo-colo.png", estadi: "Estadi Monumental", lloc: "Santiago, Xile", ll: [-70.6106, -33.5065] },
  { id: "laia", nom: "Laia Aleixandri", foto: "caps/laia-aleixandri.png?v=2", club: "Barça", escut: "barca.png", estadi: "Estadi Johan Cruyff", lloc: "Sant Joan Despí, Catalunya", ll: [2.0617, 41.3699] },
  { id: "gundogan", nom: "İlkay Gündoğan", foto: "caps/ilkay-gundogan.png?v=2", club: "Galatasaray", escut: "galatasaray.png", estadi: "RAMS Park", lloc: "Istanbul, Turquia", ll: [28.9908, 41.1034] }
];

// Jugadors per partida. No es repeteixen: d'una partida a la següent surten primer els que encara no han sortit.
window.RONDES = 0;   // 0 = tots els de la llista: es juga fins que s'acaben els km
// Crèdit de km per fallar en tota la partida: cada ronda resta la distància entre el pin i l'estadi.
// Si s'acaba abans del darrer jugador, es perd.
window.KM_LIMIT = 5000;
// Si ORDRE té ids, surten en aquest ordre (en lloc de l'atzar).
window.ORDRE = [];
