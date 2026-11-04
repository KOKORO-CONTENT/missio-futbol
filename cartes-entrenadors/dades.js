// "Cartes entrenadors" (2 jugadors). Cartes: clubs i seleccions; a la taula en surten 5 alhora, sempre amb com a mínim una resposta.
// El jugador amb torn (A = jugador 1, L = jugador 2) pre-selecciona 3, 4 o 5 cartes i escriu un entrenador que hagi dirigit TOTS els equips triats.
// Cada carta val 1 punt; amb un ple (5 cartes) són 5 + 3 punts extra.
// El Barça surt a la taula a la primera ronda (BARCA_RONDES); després, a l'atzar. L'Espanyol surt en una ronda final (RONDA_ESPANYOL).
// Les rondes combinen taules on l'entrenador pot lligar 3, 4 o 5 cartes, i no es repeteixen entrenadors.
// Entrenadors de classe mundial (llista de l'equip) que hagin treballat entre el 2005 i l'actualitat (el joc ho comprova amb la trajectòria).
// Trajectòries: Viquipèdia (infobox), generat amb eines/construeix_dades.py. Els filials (Barça B...) no compten com a l'equip.
// Pistes (botó "Pista"): 1r clic = nacionalitat de l'entrenador (la senyera si és català); 2n clic = les cartes lligades.
window.TITOL = ["Entrenadors", "Quin entrenador?"];
window.MIN = 3;
window.MAX = 5;
window.PLE_EXTRA = 3;
window.BARCA_RONDES = 1;           // el Barça surt a la taula només a la primera ronda; després és aleatori
window.TACTIL = false;             // false: sense seguiment de la mà (càmera) ni tocs a la pantalla; només ratolí
window.RONDA_ESPANYOL = 7;         // ronda final en què surt l'Espanyol (la 1a és la primera taula; cada resposta bona passa a la següent)
window.SVG = ["sel-catalunya"];    // escuts en SVG (la resta, PNG)
// [id (img/escuts/<id>.png), nom]; sel-* = seleccions (bandera)
window.EQUIPS = [
  ["barcelona", "Barça"],
  ["madrid", "Reial Madrid"],
  ["bayern", "Bayern"],
  ["manutd", "Manchester United"],
  ["chelsea", "Chelsea"],
  ["tottenham", "Tottenham"],
  ["psg", "PSG"],
  ["city", "Manchester City"],
  ["valencia", "València"],
  ["villarreal", "Villarreal"],
  ["sevilla", "Sevilla"],
  ["arsenal", "Arsenal"],
  ["liverpool", "Liverpool"],
  ["dortmund", "Dortmund"],
  ["mainz", "Mainz"],
  ["juventus", "Juventus"],
  ["milan", "Milan"],
  ["napoli", "Nàpols"],
  ["inter", "Inter"],
  ["roma", "Roma"],
  ["betis", "Betis"],
  ["athletic", "Athletic"],
  ["espanyol", "Espanyol"],
  ["leverkusen", "Leverkusen"],
  ["ajax", "Ajax"],
  ["benfica", "Benfica"],
  ["porto", "Porto"],
  ["celta", "Celta"],
  ["hoffenheim", "Hoffenheim"],
  ["leipzig", "RB Leipzig"],
  ["aberdeen", "Aberdeen"],
  ["laspalmas", "Las Palmas"],
  ["villa", "Aston Villa"],
  ["everton", "Everton"],
  ["monaco", "Mònaco"],
  ["besiktas", "Beşiktaş"],
  ["getafe", "Getafe"],
  ["sel-espanya", "Espanya"],
  ["sel-alemanya", "Alemanya"],
  ["sel-paisos-baixos", "Països Baixos"],
  ["sel-portugal", "Portugal"],
  ["sel-brasil", "Brasil"],
  ["sel-anglaterra", "Anglaterra"],
  ["sel-escocia", "Escòcia"],
  ["sel-eua", "Estats Units"],
  ["sel-catalunya", "Catalunya"]
];
// codi (img/banderes/<codi>.png; "es-ct" = senyera, .svg) -> nom del país
window.PAISOS = { "es": "Espanya", "es-ct": "Catalunya", "it": "Itàlia", "pt": "Portugal", "ar": "Argentina", "de": "Alemanya", "cl": "Xile", "gb-eng": "Anglaterra", "gb-sct": "Escòcia", "fr": "França", "nl": "Països Baixos", "br": "Brasil" };
// [nom, equips de la baralla que ha dirigit, paraules que es donen per bones, foto (img/cares), trajectòria [[anys, equip, id escut (si és a la baralla)]], nacionalitat (codi de PAISOS)]
window.ENTRENADORS = [
  ["Carlo Ancelotti", ["bayern", "chelsea", "everton", "juventus", "madrid", "milan", "napoli", "psg", "sel-brasil"], ["ancelotti", "carletto", "carlo"], "carlo-ancelotti", [["1992–95", "Italy National Football Team"], ["1995–96", "AC Reggiana 1919"], ["1999–01", "Juventus", "juventus"], ["2001–09", "Milan", "milan"], ["2009–11", "Chelsea", "chelsea"], ["2011–13", "PSG", "psg"], ["2013–15", "Reial Madrid", "madrid"], ["2016–17", "Bayern", "bayern"], ["2018–19", "Nàpols", "napoli"], ["2019–21", "Everton", "everton"], ["2021–25", "Reial Madrid", "madrid"], ["2025–", "Brasil", "sel-brasil"]], "it"],
  ["José Mourinho", ["benfica", "chelsea", "inter", "madrid", "manutd", "porto", "roma", "tottenham"], ["mourinho", "mou", "jose mourinho"], "jose-mourinho", [["2000", "Benfica", "benfica"], ["2001–02", "U.D. Leiria"], ["2002–04", "Porto", "porto"], ["2004–07", "Chelsea", "chelsea"], ["2008–10", "Inter", "inter"], ["2010–13", "Reial Madrid", "madrid"], ["2013–15", "Chelsea", "chelsea"], ["2016–18", "Manchester United", "manutd"], ["2019–21", "Tottenham", "tottenham"], ["2021–24", "Roma", "roma"], ["2025–26", "Benfica", "benfica"], ["2026–", "Reial Madrid", "madrid"]], "pt"],
  ["Unai Emery", ["arsenal", "psg", "sevilla", "valencia", "villa", "villarreal"], ["emery", "unai"], "unai-emery", [["2004–06", "Lorca Deportiva"], ["2006–08", "UD Almería"], ["2008–12", "València", "valencia"], ["2012", "Spartak Moscow"], ["2013–16", "Sevilla", "sevilla"], ["2016–18", "PSG", "psg"], ["2018–19", "Arsenal", "arsenal"], ["2020–22", "Villarreal", "villarreal"], ["2022–", "Aston Villa", "villa"]], "es"],
  ["Thomas Tuchel", ["bayern", "chelsea", "dortmund", "mainz", "psg", "sel-anglaterra"], ["tuchel"], "thomas-tuchel", [["2007–08", "Augsburg II"], ["2009–14", "Mainz", "mainz"], ["2015–17", "Dortmund", "dortmund"], ["2018–20", "PSG", "psg"], ["2021–22", "Chelsea", "chelsea"], ["2023–24", "Bayern", "bayern"], ["2025–", "Anglaterra", "sel-anglaterra"]], "de"],
  ["Mauricio Pochettino", ["chelsea", "espanyol", "psg", "sel-eua", "tottenham"], ["pochettino", "poche"], "mauricio-pochettino", [["2009–12", "Espanyol", "espanyol"], ["2013–14", "Southampton"], ["2014–19", "Tottenham", "tottenham"], ["2021–22", "PSG", "psg"], ["2023–24", "Chelsea", "chelsea"], ["2024–", "Estats Units", "sel-eua"]], "ar"],
  ["Jupp Heynckes", ["athletic", "bayern", "benfica", "leverkusen", "madrid"], ["heynckes", "jupp"], "jupp-heynckes", [["1979–87", "Borussia Mönchengladbach"], ["1987–91", "Bayern", "bayern"], ["1992–94", "Athletic", "athletic"], ["1994–95", "Eintracht Frankfurt"], ["1995–97", "CD Tenerife"], ["1997–98", "Reial Madrid", "madrid"], ["1999–00", "Benfica", "benfica"], ["2001–03", "Athletic", "athletic"], ["2009", "Bayern", "bayern"], ["2009–11", "Leverkusen", "leverkusen"], ["2011–13", "Bayern", "bayern"], ["2017–18", "Bayern", "bayern"]], "de"],
  ["Luis Enrique", ["barcelona", "celta", "psg", "roma", "sel-espanya"], ["luis enrique", "lucho", "enrique"], "luis-enrique", [["2008–11", "Barcelona Atlètic"], ["2011–12", "Roma", "roma"], ["2013–14", "Celta", "celta"], ["2014–17", "Barça", "barcelona"], ["2018–19", "Espanya", "sel-espanya"], ["2019–22", "Espanya", "sel-espanya"], ["2023–", "PSG", "psg"]], "es"],
  ["Louis van Gaal", ["ajax", "barcelona", "bayern", "manutd", "sel-paisos-baixos"], ["van gaal", "vangaal", "gaal"], "louis-van-gaal", [["1991–97", "Ajax", "ajax"], ["1997–00", "Barça", "barcelona"], ["2000–01", "Països Baixos", "sel-paisos-baixos"], ["2001", "Netherlands national under-19 football team"], ["2002–03", "Barça", "barcelona"], ["2005–09", "AZ Alkmaar"], ["2009–11", "Bayern", "bayern"], ["2012–14", "Països Baixos", "sel-paisos-baixos"], ["2014–16", "Manchester United", "manutd"], ["2021–22", "Països Baixos", "sel-paisos-baixos"]], "nl"],
  ["Ernesto Valverde", ["athletic", "barcelona", "espanyol", "valencia", "villarreal"], ["valverde", "txingurri", "ernesto"], "ernesto-valverde", [["2001–02", "Athletic Bilbao (assistant)"], ["2002–03", "Bilbao Athletic"], ["2003–05", "Athletic", "athletic"], ["2006–08", "Espanyol", "espanyol"], ["2008–09", "Olympiacos"], ["2009–10", "Villarreal", "villarreal"], ["2010–12", "Olympiacos"], ["2012–13", "València", "valencia"], ["2013–17", "Athletic", "athletic"], ["2017–20", "Barça", "barcelona"], ["2022–26", "Athletic", "athletic"]], "es"],
  ["Jürgen Klopp", ["dortmund", "liverpool", "mainz", "sel-alemanya"], ["klopp", "jurgen"], "jurgen-klopp", [["2001–08", "Mainz", "mainz"], ["2008–15", "Dortmund", "dortmund"], ["2015–24", "Liverpool", "liverpool"], ["2026–", "Alemanya", "sel-alemanya"]], "de"],
  ["Hansi Flick", ["barcelona", "bayern", "hoffenheim", "sel-alemanya"], ["flick", "hansi"], "hansi-flick", [["1996–00", "Victoria Bammental"], ["2000–05", "Hoffenheim", "hoffenheim"], ["2019–21", "Bayern", "bayern"], ["2021–23", "Alemanya", "sel-alemanya"], ["2024–", "Barça", "barcelona"]], "de"],
  ["Julian Nagelsmann", ["bayern", "hoffenheim", "leipzig", "sel-alemanya"], ["nagelsmann", "julian"], "julian-nagelsmann", [["2016–19", "Hoffenheim", "hoffenheim"], ["2019–21", "RB Leipzig", "leipzig"], ["2021–23", "Bayern", "bayern"], ["2023–26", "Alemanya", "sel-alemanya"]], "de"],
  ["Manuel Pellegrini", ["betis", "city", "madrid", "villarreal"], ["pellegrini", "ingeniero"], "manuel-pellegrini", [["1988–89", "Club Universidad de Chile"], ["1990–91", "Club Deportivo Palestino"], ["1991", "Chile national under-20 football team"], ["1992–93", "O'Higgins"], ["1994–96", "Club Deportivo Universidad Católica"], ["1998", "Club Deportivo Palestino"], ["1999–00", "LDU Quito"], ["2001–02", "San Lorenzo de Almagro"], ["2004–09", "Villarreal", "villarreal"], ["2009–10", "Reial Madrid", "madrid"], ["2013–16", "Manchester City", "city"], ["2020–", "Betis", "betis"]], "cl"],
  ["Quique Setién", ["barcelona", "betis", "laspalmas", "villarreal"], ["setien", "quique setien", "quique"], "quique-setien", [["2001–02", "Racing de Santander"], ["2003", "Polideportivo Ejido"], ["2006", "Equatorial Guinea national football team"], ["2007–08", "CD Logroñés"], ["2009–15", "CD Lugo"], ["2015–17", "Las Palmas", "laspalmas"], ["2017–19", "Betis", "betis"], ["2020", "Barça", "barcelona"], ["2022–23", "Villarreal", "villarreal"], ["2024–25", "Beijing Guoan"]], "es"],
  ["Pep Guardiola", ["barcelona", "bayern", "city"], ["guardiola", "pep", "josep guardiola"], "pep-guardiola", [["2007–08", "Barcelona B"], ["2008–12", "Barça", "barcelona"], ["2013–16", "Bayern", "bayern"], ["2016–26", "Manchester City", "city"]], "es-ct"],
  ["Xabi Alonso", ["chelsea", "leverkusen", "madrid"], ["xabi alonso", "xabi", "alonso"], "xabi-alonso", [["2019–22", "Real Sociedad B"], ["2022–25", "Leverkusen", "leverkusen"], ["2025–26", "Reial Madrid", "madrid"], ["2026–", "Chelsea", "chelsea"]], "es"],
  ["Alex Ferguson", ["aberdeen", "manutd", "sel-escocia"], ["ferguson", "sir alex", "alex ferguson", "fergie"], "alex-ferguson", [["1974", "East Stirlingshire"], ["1974–78", "St Mirren"], ["1978–86", "Aberdeen", "aberdeen"], ["1985–86", "Escòcia", "sel-escocia"], ["1986–13", "Manchester United", "manutd"]], "gb-sct"],
  ["Vicente del Bosque", ["besiktas", "madrid", "sel-espanya"], ["del bosque", "delbosque", "bosque", "vicente"], "vicente-del-bosque", [["1987–90", "Real Madrid Castilla"], ["1994", "Reial Madrid", "madrid"], ["1996", "Reial Madrid", "madrid"], ["1999–03", "Reial Madrid", "madrid"], ["2004–05", "Beşiktaş", "besiktas"], ["2008–16", "Espanya", "sel-espanya"]], "es"],
  ["Bernd Schuster", ["besiktas", "getafe", "madrid"], ["schuster", "bernd"], "bernd-schuster", [["1997–98", "Fortuna Köln"], ["1998–99", "Köln"], ["2001–03", "Xerez CD"], ["2003–04", "Shakhtar Donetsk"], ["2004–05", "Levante UD"], ["2005–07", "Getafe", "getafe"], ["2007–08", "Reial Madrid", "madrid"], ["2010–11", "Beşiktaş", "besiktas"], ["2013–14", "Málaga"], ["2018–19", "Dalian Yifang"]], "de"],
  ["Luiz Felipe Scolari", ["chelsea", "sel-brasil", "sel-portugal"], ["scolari", "felipao", "luiz felipe"], "luiz-felipe-scolari", [["1982", "Centro Sportivo Alagoano"], ["1983", "Grêmio Esportivo Brasil"], ["1986", "Esporte Clube Pelotas"], ["1987", "Grêmio FBPA"], ["1988", "Goiás Esporte Clube"], ["1990", "Kuwait national football team"], ["1990", "Coritiba Foot Ball Club"], ["1991", "Criciúma Esporte Clube"], ["2001–02", "Brasil", "sel-brasil"], ["2003–08", "Portugal", "sel-portugal"], ["2008–09", "Chelsea", "chelsea"], ["2012–14", "Brasil", "sel-brasil"]], "br"],
  ["Johan Cruyff", ["ajax", "barcelona", "sel-catalunya"], ["cruyff", "cruijff", "johan", "cruif"], "johan-cruyff", [["1985–88", "Ajax", "ajax"], ["1988–96", "Barça", "barcelona"], ["2009–13", "Catalunya", "sel-catalunya"]], "nl"],
  ["Arsène Wenger", ["arsenal", "monaco"], ["wenger"], "arsene-wenger", [["1984–87", "AS Nancy"], ["1987–94", "Mònaco", "monaco"], ["1995–96", "Nagoya Grampus Eight"], ["1996–18", "Arsenal", "arsenal"]], "fr"],
  ["Álvaro Arbeloa", ["madrid"], ["arbeloa"], "alvaro-arbeloa", [["2025–26", "Real Madrid Castilla"], ["2026", "Reial Madrid", "madrid"], ["2026–", "Fulham"]], "es"],
  ["Zinedine Zidane", ["madrid"], ["zidane", "zizou"], "zinedine-zidane", [["2014–16", "Real Madrid Castilla"], ["2016–18", "Reial Madrid", "madrid"], ["2019–21", "Reial Madrid", "madrid"], ["2026–", "France national football team"]], "fr"],
  ["Xavi Hernández", ["barcelona"], ["xavi", "xavi hernandez"], "xavi-hernandez", [["2019–21", "Al Sadd"], ["2021–24", "Barça", "barcelona"]], "es-ct"],
  ["Mikel Arteta", ["arsenal"], ["arteta", "mikel"], "mikel-arteta", [["2019–", "Arsenal", "arsenal"]], "es"]
];
