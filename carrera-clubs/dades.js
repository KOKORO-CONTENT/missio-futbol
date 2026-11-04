// "Carrera de clubs": cada jugador té 3 bifurcacions seguides (club, país, títol...). Totes les dades han de ser
// certes: a "no" només hi va el que el jugador MAI ha guanyat; a "clubs" tots els clubs on ha jugat.
// cap: dins de img/caps/. Si no hi ha cap, es dibuixa un cercle amb les inicials.
window.JUGADORS = [
  { nom: "Robert Lewandowski", cap: "robert-lewandowski.png", nac: "Polònia",
    clubs: ["Lech Poznań", "Borussia Dortmund", "Bayern Munic", "FC Barcelona", "Chicago Fire"],
    titols: ["Champions League", "Bundesliga", "LaLiga"], no: ["Mundial", "Premier League", "Eurocopa"] },
  { nom: "Cristiano Ronaldo", cap: "cristiano-ronaldo.png", nac: "Portugal",
    clubs: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al-Nassr"],
    titols: ["Eurocopa", "Champions League", "Premier League", "Serie A"], no: ["Mundial", "Copa Amèrica", "Bundesliga"] },
  { nom: "Neymar Jr", cap: "neymar.png", nac: "Brasil",
    clubs: ["Santos", "FC Barcelona", "PSG", "Al-Hilal"],
    titols: ["Champions League", "Copa Libertadores", "Ligue 1"], no: ["Mundial", "Premier League", "Eurocopa"] },
  { nom: "Antoine Griezmann", cap: "antoine-griezmann.png", nac: "França",
    clubs: ["Real Sociedad", "Atlètic de Madrid", "FC Barcelona", "Orlando City"],
    titols: ["Mundial", "Europa League"], no: ["Champions League", "Premier League", "Eurocopa"] },
  { nom: "Lautaro Martínez", cap: "lautaro-martinez.png", nac: "Argentina",
    clubs: ["Racing Club", "Inter"],
    titols: ["Mundial", "Copa Amèrica", "Serie A"], no: ["Champions League", "Premier League", "Eurocopa"] },
  { nom: "David de Gea", cap: "david-de-gea.png", nac: "Espanya",
    clubs: ["Atlètic de Madrid", "Manchester United", "Fiorentina"],
    titols: ["Europa League", "Premier League"], no: ["Champions League", "Mundial", "Serie A"] },
  { nom: "İlkay Gündoğan", cap: "ilkay-gundogan.png", nac: "Alemanya",
    clubs: ["Nuremberg", "Borussia Dortmund", "Manchester City", "FC Barcelona", "Galatasaray"],
    titols: ["Premier League", "Champions League", "Bundesliga"], no: ["Mundial", "Eurocopa", "Serie A"] },
  { nom: "Riqui Puig", cap: "riqui-puig.png", nac: "Espanya",
    clubs: ["FC Barcelona", "LA Galaxy"],
    titols: [], no: [] },
  { nom: "Vitor Roque", cap: "vitor-roque.png", nac: "Brasil",
    clubs: ["Athletico Paranaense", "FC Barcelona", "Palmeiras"],
    titols: [], no: [] },
  { nom: "Pau Víctor", cap: "pau-victor.png", nac: "Espanya",
    clubs: ["Girona", "FC Barcelona", "Braga"],
    titols: [], no: [] }
];
// Clubs de relleno (els que ha jugat el jugador es descarten sols).
window.CLUBS_FALSOS = ["Real Madrid", "Bayern Munic", "Juventus", "Liverpool", "Chelsea", "Arsenal", "Manchester City", "AC Milan", "Ajax", "Benfica", "Sevilla", "València", "Roma", "Nàpols", "Tottenham", "Boca Juniors", "Flamengo", "River Plate", "Villarreal", "Athletic Club"];
window.PAISOS = ["Argentina", "Brasil", "Portugal", "França", "Espanya", "Alemanya", "Itàlia", "Anglaterra", "Croàcia", "Uruguai", "Polònia", "Països Baixos", "Bèlgica", "Turquia"];
// Escuts disponibles a img/escuts/
window.ESCUTS = { "FC Barcelona": "barca.png", "Atlètic de Madrid": "atletico.png", "Inter": "inter.png", "PSG": "psg.png", "Santos": "santos.png", "Galatasaray": "galatasaray.png", "Fiorentina": "fiorentina.png", "Orlando City": "orlando-city.png", "Chicago Fire": "chicago-fire.png", "Al-Nassr": "al-nassr.png", "Palmeiras": "palmeiras.png", "Braga": "braga.png", "Girona": "girona.png", "LA Galaxy": "la-galaxy.png", "Borussia Dortmund": "dortmund.png", "Real Madrid": "real-madrid.png", "Bayern Munic": "bayern.png", "Juventus": "juventus.png", "Liverpool": "liverpool.png", "Chelsea": "chelsea.png", "Arsenal": "arsenal.png", "Manchester City": "man-city.png", "Manchester United": "man-united.png", "AC Milan": "milan.png", "Ajax": "ajax.png", "Benfica": "benfica.png", "Sevilla": "sevilla.png", "València": "valencia.png", "Roma": "roma.png", "Nàpols": "napoli.png", "Tottenham": "tottenham.png", "Boca Juniors": "boca.png", "Flamengo": "flamengo.png", "River Plate": "river.png", "Villarreal": "villarreal.png", "Athletic Club": "athletic.png", "Sporting CP": "sporting.png", "Lech Poznań": "lech.png", "Real Sociedad": "real-sociedad.png", "Nuremberg": "nuremberg.png", "Racing Club": "racing-club.png", "Athletico Paranaense": "athletico-pr.png", "Al-Hilal": "al-hilal.png" };
// Banderes (img/flags/) i logos de competició (img/comp/)
window.BANDERES = { "Polònia": "pl", "Portugal": "pt", "Brasil": "br", "França": "fr", "Argentina": "ar", "Espanya": "es", "Alemanya": "de", "Itàlia": "it", "Anglaterra": "gb-eng", "Croàcia": "hr", "Uruguai": "uy", "Països Baixos": "nl", "Bèlgica": "be", "Turquia": "tr" };
window.COMPS = { "Champions League": "champions", "Europa League": "europa", "Premier League": "premier", "Bundesliga": "bundesliga", "LaLiga": "laliga", "Serie A": "seriea", "Ligue 1": "ligue1", "Eurocopa": "eurocopa", "Mundial": "mundial", "Copa Libertadores": "libertadores", "Copa Amèrica": "copaamerica" };
