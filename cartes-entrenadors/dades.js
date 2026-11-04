// "Cartes entrenadors" (2 jugadors). 25 equips (escuts); a la taula en surten 5 alhora, sempre amb com a mínim una resposta.
// El jugador amb torn (A = jugador 1, L = jugador 2) pre-selecciona 3, 4 o 5 cartes i escriu un entrenador que hagi dirigit TOTS els equips triats.
// Cada carta val 1 punt; amb un ple (5 cartes) són 5 + 3 punts extra.
window.TITOL = ["Entrenadors", "Quin entrenador?"];
window.MIN = 3;
window.MAX = 5;
window.PLE_EXTRA = 3;
// [id (img/escuts/<id>.png), nom]
window.EQUIPS = [
  ["sevilla", "Sevilla"], ["psg", "PSG"], ["arsenal", "Arsenal"], ["chelsea", "Chelsea"], ["valencia", "València"],
  ["villa", "Aston Villa"], ["villarreal", "Villarreal"], ["inter", "Inter"], ["manutd", "Manchester United"], ["tottenham", "Tottenham"],
  ["roma", "Roma"], ["juventus", "Juventus"], ["milan", "Milan"], ["napoli", "Nàpols"], ["bayern", "Bayern"],
  ["madrid", "Reial Madrid"], ["liverpool", "Liverpool"], ["newcastle", "Newcastle"], ["everton", "Everton"], ["celta", "Celta"],
  ["atletico", "Atlètic de Madrid"], ["monaco", "Mònaco"], ["fiorentina", "Fiorentina"], ["leicester", "Leicester"], ["fulham", "Fulham"]
];
// [nom, equips de la baralla que ha dirigit, paraules que es donen per bones, foto (img/cares), trajectòria [[anys, equip, id escut (si és a la baralla)]]]
window.ENTRENADORS = [
  ["Unai Emery", ["sevilla", "psg", "arsenal", "villa", "villarreal", "valencia"], ["emery", "unai"], "unai-emery", [
    ["2006–08", "Almeria"], ["2008–12", "València", "valencia"], ["2012", "Spartak de Moscou"], ["2013–16", "Sevilla", "sevilla"],
    ["2016–18", "PSG", "psg"], ["2018–19", "Arsenal", "arsenal"], ["2020–22", "Villarreal", "villarreal"], ["2022–", "Aston Villa", "villa"]]],
  ["José Mourinho", ["chelsea", "inter", "manutd", "tottenham", "roma", "madrid"], ["mourinho", "mou", "jose mourinho"], "jose-mourinho", [
    ["2002–04", "Porto"], ["2004–07", "Chelsea", "chelsea"], ["2008–10", "Inter", "inter"], ["2010–13", "Reial Madrid", "madrid"],
    ["2013–15", "Chelsea", "chelsea"], ["2016–18", "Manchester United", "manutd"], ["2019–21", "Tottenham", "tottenham"], ["2021–24", "Roma", "roma"], ["2024–25", "Fenerbahçe"]]],
  ["Carlo Ancelotti", ["juventus", "milan", "napoli", "bayern", "madrid", "chelsea", "psg", "everton"], ["ancelotti", "carletto", "carlo"], "carlo-ancelotti", [
    ["1996–98", "Parma"], ["1999–2001", "Juventus", "juventus"], ["2001–09", "Milan", "milan"], ["2009–11", "Chelsea", "chelsea"],
    ["2011–13", "PSG", "psg"], ["2013–15", "Reial Madrid", "madrid"], ["2016–17", "Bayern", "bayern"], ["2018–19", "Nàpols", "napoli"],
    ["2019–21", "Everton", "everton"], ["2021–25", "Reial Madrid", "madrid"], ["2025–", "Brasil"]]],
  ["Rafa Benítez", ["valencia", "liverpool", "newcastle", "everton", "celta", "inter", "chelsea", "napoli", "madrid"], ["benitez", "rafa benitez", "rafa"], "rafa-benitez", [
    ["2001–04", "València", "valencia"], ["2004–10", "Liverpool", "liverpool"], ["2010", "Inter", "inter"], ["2012–13", "Chelsea", "chelsea"],
    ["2013–15", "Nàpols", "napoli"], ["2015–16", "Reial Madrid", "madrid"], ["2016–19", "Newcastle", "newcastle"], ["2019–21", "Dalian Pro"],
    ["2021–22", "Everton", "everton"], ["2023–24", "Celta", "celta"]]],
  ["Claudio Ranieri", ["atletico", "monaco", "fiorentina", "leicester", "fulham", "valencia", "chelsea", "juventus", "roma", "inter", "napoli"], ["ranieri", "claudio ranieri"], "claudio-ranieri", [
    ["1991–93", "Nàpols", "napoli"], ["1993–97", "Fiorentina", "fiorentina"], ["1997–99", "València", "valencia"], ["1999–2000", "Atlètic de Madrid", "atletico"],
    ["2000–04", "Chelsea", "chelsea"], ["2007–09", "Juventus", "juventus"], ["2009–11", "Roma", "roma"], ["2011", "Inter", "inter"],
    ["2012–14", "Mònaco", "monaco"], ["2015–17", "Leicester", "leicester"], ["2018–19", "Fulham", "fulham"], ["2019–21", "Sampdoria"]]],
  ["Antonio Conte", ["juventus", "chelsea", "inter", "tottenham", "napoli"], ["conte"], "antonio-conte", [
    ["2007–09", "Bari"], ["2009–10", "Atalanta"], ["2011–14", "Juventus", "juventus"], ["2014–16", "Itàlia"], ["2016–18", "Chelsea", "chelsea"],
    ["2019–21", "Inter", "inter"], ["2021–23", "Tottenham", "tottenham"], ["2024–", "Nàpols", "napoli"]]],
  ["Mauricio Pochettino", ["tottenham", "psg", "chelsea"], ["pochettino", "poche"], "mauricio-pochettino", [
    ["2009–12", "Espanyol"], ["2013–14", "Southampton"], ["2014–19", "Tottenham", "tottenham"], ["2021–22", "PSG", "psg"], ["2023–24", "Chelsea", "chelsea"], ["2024–", "Estats Units"]]],
  ["Thomas Tuchel", ["psg", "chelsea", "bayern"], ["tuchel"], "thomas-tuchel", [
    ["2009–14", "Mainz"], ["2015–17", "Dortmund"], ["2018–20", "PSG", "psg"], ["2021–22", "Chelsea", "chelsea"], ["2023–24", "Bayern", "bayern"], ["2025–", "Anglaterra"]]],
  ["Manuel Pellegrini", ["villarreal", "madrid"], ["pellegrini"], "manuel-pellegrini", [
    ["2004–09", "Villarreal", "villarreal"], ["2009–10", "Reial Madrid", "madrid"], ["2010–12", "Màlaga"], ["2013–16", "Manchester City"],
    ["2018–19", "West Ham"], ["2020–25", "Betis"]]],
  ["Julen Lopetegui", ["madrid", "sevilla"], ["lopetegui"], "julen-lopetegui", [
    ["2014–15", "Porto"], ["2016–18", "Espanya"], ["2018", "Reial Madrid", "madrid"], ["2019–22", "Sevilla", "sevilla"], ["2022–23", "Wolves"], ["2024–25", "West Ham"]]],
  ["Roberto Mancini", ["fiorentina", "inter"], ["mancini"], "roberto-mancini", [
    ["2001–02", "Fiorentina", "fiorentina"], ["2002–04", "Lazio"], ["2004–08", "Inter", "inter"], ["2009–13", "Manchester City"],
    ["2013–14", "Galatasaray"], ["2014–16", "Inter", "inter"], ["2018–23", "Itàlia"]]],
  ["Roy Hodgson", ["inter", "liverpool", "fulham"], ["hodgson"], "roy-hodgson", [
    ["1990–92", "Neuchâtel Xamax"], ["1995–97", "Inter", "inter"], ["1997–98", "Blackburn"], ["2007–10", "Fulham", "fulham"],
    ["2010–11", "Liverpool", "liverpool"], ["2012–16", "Anglaterra"], ["2017–21", "Crystal Palace"]]],
  ["Arsène Wenger", ["monaco", "arsenal"], ["wenger"], "arsene-wenger", [
    ["1984–87", "Nancy"], ["1987–94", "Mònaco", "monaco"], ["1995–96", "Nagoya Grampus"], ["1996–2018", "Arsenal", "arsenal"]]],
  ["Luis Enrique", ["roma", "celta", "psg"], ["luis enrique", "lucho"], "luis-enrique", [
    ["2008–11", "Barça B"], ["2011–12", "Roma", "roma"], ["2013–14", "Celta", "celta"], ["2014–17", "Barça"], ["2018–22", "Espanya"], ["2023–", "PSG", "psg"]]],
  ["Massimiliano Allegri", ["milan", "juventus"], ["allegri", "max allegri"], "massimiliano-allegri", [
    ["2008–10", "Cagliari"], ["2010–14", "Milan", "milan"], ["2014–19", "Juventus", "juventus"], ["2021–24", "Juventus", "juventus"], ["2025–", "Milan", "milan"]]]
];
