// "GeoFutbol": com el GeoGuessr, però en lloc d'un carrer surt un futbolista i s'ha de clicar al mapa del món
// on juga ara (l'estadi del seu club). Clubs comprovats a l'octubre del 2026.
// ll: [longitud, latitud] de l'estadi. foto: dins de img/. escut: dins de img/escuts/.
window.JUGADORS = [
  { id: "romeu", nom: "Oriol Romeu", foto: "oriol-romeu.png", club: "Avispa Fukuoka", escut: "avispa-fukuoka.png", estadi: "Best Denki Stadium", lloc: "Fukuoka, Japó", ll: [130.4614, 33.5859] },
  { id: "messi", nom: "Leo Messi", foto: "lionel-messi.png", club: "Inter Miami", escut: "inter-miami.png", estadi: "Nu Stadium", lloc: "Miami, Estats Units", ll: [-80.2620, 25.7955] },
  { id: "suarez", nom: "Luis Suárez", foto: "luis-suarez.png", club: "Inter Miami", escut: "inter-miami.png", estadi: "Nu Stadium", lloc: "Miami, Estats Units", ll: [-80.2620, 25.7955] },
  { id: "neymar", nom: "Neymar Jr", foto: "neymar.png", club: "Santos", escut: "santos.png", estadi: "Vila Belmiro", lloc: "Santos, Brasil", ll: [-46.3390, -23.9512] },
  { id: "coutinho", nom: "Philippe Coutinho", foto: "philippe-coutinho.jpg", club: "Santos", escut: "santos.png", estadi: "Vila Belmiro", lloc: "Santos, Brasil", ll: [-46.3390, -23.9512] },
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "cristiano-ronaldo.png", club: "Al-Nassr", escut: "al-nassr.png", estadi: "Al-Awwal Park", lloc: "Riad, Aràbia Saudita", ll: [46.6247, 24.7246] },
  { id: "griezmann", nom: "Antoine Griezmann", foto: "antoine-griezmann.png", club: "Orlando City", escut: "orlando-city.png", estadi: "Inter&Co Stadium", lloc: "Orlando, Estats Units", ll: [-81.3893, 28.5411] },
  { id: "marta", nom: "Marta", foto: "marta.jpg", club: "Orlando Pride", escut: "orlando-pride.png", estadi: "Inter&Co Stadium", lloc: "Orlando, Estats Units", ll: [-81.3893, 28.5411] },
  { id: "lewandowski", nom: "Robert Lewandowski", foto: "robert-lewandowski.png", club: "Chicago Fire", escut: "chicago-fire.png", estadi: "Soldier Field", lloc: "Chicago, Estats Units", ll: [-87.6167, 41.8623] },
  { id: "muller", nom: "Thomas Müller", foto: "thomas-muller.png", club: "Vancouver Whitecaps", escut: "vancouver-whitecaps.png", estadi: "BC Place", lloc: "Vancouver, Canadà", ll: [-123.1119, 49.2767] },
  { id: "son", nom: "Son Heung-min", foto: "son-heung-min.jpg", club: "LAFC", escut: "lafc.png", estadi: "BMO Stadium", lloc: "Los Angeles, Estats Units", ll: [-118.2847, 34.0129] },
  { id: "navas", nom: "Keylor Navas", foto: "keylor-navas.jpg", club: "Pumas UNAM", escut: "pumas.png", estadi: "Estadi Olímpic Universitari", lloc: "Ciutat de Mèxic, Mèxic", ll: [-99.1921, 19.3320] },
  { id: "kante", nom: "N'Golo Kanté", foto: "ngolo-kante.png", club: "Fenerbahçe", escut: "fenerbahce.png", estadi: "Şükrü Saracoğlu", lloc: "Istanbul, Turquia", ll: [29.0369, 40.9876] },
  { id: "gundogan", nom: "İlkay Gündoğan", foto: "ilkay-gundogan.jpg", club: "Galatasaray", escut: "galatasaray.png", estadi: "RAMS Park", lloc: "Istanbul, Turquia", ll: [28.9908, 41.1034] },
  { id: "dimaria", nom: "Ángel Di María", foto: "angel-di-maria.jpg", club: "Rosario Central", escut: "rosario-central.png", estadi: "Gigante de Arroyito", lloc: "Rosario, Argentina", ll: [-60.6747, -32.9137] },
  { id: "memphis", nom: "Memphis Depay", foto: "memphis-depay.jpg", club: "Corinthians", escut: "corinthians.png", estadi: "Neo Química Arena", lloc: "São Paulo, Brasil", ll: [-46.4742, -23.5453] },
  { id: "hulk", nom: "Hulk", foto: "hulk.jpg", club: "Atlético Mineiro", escut: "atletico-mineiro.png", estadi: "Arena MRV", lloc: "Belo Horizonte, Brasil", ll: [-44.0108, -19.9096] },
  { id: "quinones", nom: "Julián Quiñones", foto: "julian-quinones.png", club: "Al-Qadsiah", escut: "al-qadsiah.png", estadi: "Estadi Príncep Saud bin Jalawi", lloc: "Al-Khobar, Aràbia Saudita", ll: [50.1950, 26.2620] },
  { id: "sarabia", nom: "Pablo Sarabia", foto: "pablo-sarabia.jpg", club: "Al-Arabi", escut: "al-arabi.png", estadi: "Grand Hamad Stadium", lloc: "Doha, Qatar", ll: [51.4995, 25.2697] },
  { id: "jovic", nom: "Luka Jović", foto: "luka-jovic.jpg", club: "AEK Atenes", escut: "aek-atenes.png", estadi: "OPAP Arena", lloc: "Atenes, Grècia", ll: [23.7337, 38.0364] }
];

// Jugadors per partida. No es repeteixen: d'una partida a la següent surten primer els que encara no han sortit.
window.RONDES = 10;
// Crèdit de km per fallar en tota la partida: cada ronda resta la distància entre el pin i l'estadi.
// Si s'acaba abans del darrer jugador, es perd.
window.KM_LIMIT = 5000;
// Si ORDRE té ids, surten en aquest ordre (en lloc de l'atzar).
window.ORDRE = [];
