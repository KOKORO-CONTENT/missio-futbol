// "GeoFutbol": com el GeoGuessr, però en lloc d'un carrer surt un futbolista i s'ha de clicar al mapa del món
// on juga ara (l'estadi del seu club). Clubs comprovats a l'octubre del 2026.
// ll: [longitud, latitud] de l'estadi. foto: dins de img/.
window.JUGADORS = [
  { id: "romeu", nom: "Oriol Romeu", foto: "oriol-romeu.png", club: "Avispa Fukuoka", estadi: "Best Denki Stadium", lloc: "Fukuoka, Japó", ll: [130.4614, 33.5859] },
  { id: "messi", nom: "Leo Messi", foto: "lionel-messi.png", club: "Inter Miami", estadi: "Nu Stadium (Miami Freedom Park)", lloc: "Miami, Estats Units", ll: [-80.2620, 25.7955] },
  { id: "neymar", nom: "Neymar Jr", foto: "neymar.png", club: "Santos", estadi: "Vila Belmiro", lloc: "Santos, Brasil", ll: [-46.3390, -23.9512] },
  { id: "cristiano", nom: "Cristiano Ronaldo", foto: "cristiano-ronaldo.png", club: "Al-Nassr", estadi: "Al-Awwal Park", lloc: "Riad, Aràbia Saudita", ll: [46.6247, 24.7246] },
  { id: "griezmann", nom: "Antoine Griezmann", foto: "antoine-griezmann.png", club: "Orlando City", estadi: "Inter&Co Stadium", lloc: "Orlando, Estats Units", ll: [-81.3893, 28.5411] },
  { id: "lewandowski", nom: "Robert Lewandowski", foto: "robert-lewandowski.png", club: "Chicago Fire", estadi: "Soldier Field", lloc: "Chicago, Estats Units", ll: [-87.6167, 41.8623] },
  { id: "muller", nom: "Thomas Müller", foto: "thomas-muller.png", club: "Vancouver Whitecaps", estadi: "BC Place", lloc: "Vancouver, Canadà", ll: [-123.1119, 49.2767] },
  { id: "son", nom: "Son Heung-min", foto: "son-heung-min.jpg", club: "LAFC", estadi: "BMO Stadium", lloc: "Los Angeles, Estats Units", ll: [-118.2847, 34.0129] },
  { id: "navas", nom: "Keylor Navas", foto: "keylor-navas.jpg", club: "Pumas UNAM", estadi: "Estadi Olímpic Universitari", lloc: "Ciutat de Mèxic, Mèxic", ll: [-99.1921, 19.3320] },
  { id: "kante", nom: "N'Golo Kanté", foto: "ngolo-kante.png", club: "Fenerbahçe", estadi: "Şükrü Saracoğlu", lloc: "Istanbul, Turquia", ll: [29.0369, 40.9876] }
];

// Rondes per partida (com el GeoGuessr: 5). Si ORDRE té ids, surten en aquest ordre; si és buit, a l'atzar.
window.RONDES = 5;
window.ORDRE = [];
// Punts mínims per guanyar la partida (el màxim és 5.000 per ronda).
window.OBJECTIU = 15000;
