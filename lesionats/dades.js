// QUI HA ESTAT MÉS TEMPS LESIONAT · dies de baixa acumulats a tota la carrera (Transfermarkt, historial de lesions).
// Sancions no incloses (per això Transfermarkt i no Besoccer). Aitana i Alèxia: xifres de l'usuari (Besoccer).
// club/escut: club ACTUAL o l'últim en què ha jugat (revisat a Transfermarkt el 28/10/2026).
// r: frase que surt sota cada jugador en resoldre (dades de Transfermarkt, redactades per l'usuari).
window.JUGADORS = [
  { nom: "Ansu Fati", club: "AS Monaco", escut: "monaco", foto: "ansu-fati", dies: 835, r: "Des del 2021 ha sofert un calvari de lesions." },
  { nom: "Andreas Christensen", club: "FC Barcelona", escut: "barca", foto: "andreas-christensen", dies: 739, r: "Ha tingut més de 30 lesions, la més llarga al tendó d'Aquil·les." },
  { nom: "Dembélé", club: "PSG", escut: "psg", foto: "ousmane-dembele", dies: 1006, r: "12 lesions amb el Barça. 2 Pilotes d'Or amb el PSG." },
  { nom: "Raphinha", club: "FC Barcelona", escut: "barca", foto: "raphinha", dies: 355, r: "Especialista en lesionar-se quan juga amb la selecció brasilera." },
  { nom: "Frenkie de Jong", club: "FC Barcelona", escut: "barca", foto: "frenkie-de-jong", dies: 899, r: "El turmell dret és el seu punt dèbil." },
  { nom: "Umtiti", club: "Lilla", escut: "lille", foto: "samuel-umtiti", dies: 1113, r: "376 dies per una lesió de genoll." },
  { nom: "Rodri", club: "FC Barcelona", escut: "barca", foto: "rodri", dies: 452, r: "Va recollir la Pilota d'Or lesionat, portant crosses." },
  { nom: "Messi", club: "Inter Miami", escut: "intermiami", foto: "lionel-messi", dies: 865, r: "La pitjor lesió va ser el 2006, un total de 90 dies fora del terreny de joc." },
  { nom: "Aitana Bonmatí", club: "FC Barcelona", escut: "barca", foto: "aitana-bonmati", dies: 192, r: "La més important ha estat una fractura de peroné la temporada 25/26." },
  { nom: "Alèxia Putellas", club: "London City", escut: "london-city", foto: "alexia-putellas", dies: 360, r: "Va marcar a la final de Bilbao després de tornar d'un calvari de 2 anys." },
  { nom: "Gavi", club: "FC Barcelona", escut: "barca", foto: "gavi", dies: 580, r: "El lligament creuat li va fer perdre 58 partits." },
  { nom: "Javi Puado", club: "Espanyol", escut: "espanyol", foto: "javi-puado", dies: 460, r: "Només ha patit 7 lesions a la seva carrera." },
  { nom: "Modrić", club: "AC Milan", escut: "acmilan", foto: "luka-modric", dies: 564, r: "El 2026 es va trencar la cara (literalment). Doble fractura de pòmul." },
  { nom: "Mbappé", club: "Reial Madrid", escut: "madrid", foto: "kylian-mbappe", dies: 312, r: "Amb el Reial Madrid ha patit 7 lesions." },
  { nom: "Courtois", club: "Reial Madrid", escut: "madrid", foto: "thibaut-courtois", dies: 727, r: "El Madrid va fitxar Lunin per culpa d'una lesió llarga del belga." },
  { nom: "Bale", club: "Los Angeles FC", escut: "lafc", foto: "gareth-bale", dies: 1122, r: "Wales. Golf. Madrid. In that order." },
  { nom: "Hazard", club: "Retirat · ex-Madrid", escut: "madrid", foto: "eden-hazard", dies: 731, r: "En la seva època al Madrid va patir 18 lesions." },
  { nom: "Rüdiger", club: "Reial Madrid", escut: "madrid", foto: "antonio-rudiger", dies: 860, r: "Ell és més de lesionar que de patir lesions." },
  { nom: "David López", club: "Girona", escut: "girona", foto: "david-lopez", dies: 432, r: "201 dies lesionat per un lligament creuat." },
  { nom: "Julián Álvarez", club: "Atlètic de Madrid", escut: "atletico", foto: "julian-alvarez", dies: 50, r: "Amb 26 anys només ha tingut 3 lesions." }
];

// Parelles fixes, en aquest ordre (id de la foto). La resta de jugadors s'aparellen a l'atzar entre els que tenen dies semblants.
window.PARELLES = [
  [ "frenkie-de-jong", "gareth-bale" ],
  [ "luka-modric", "alexia-putellas" ],
  [ "eden-hazard", "lionel-messi" ],
  [ "javi-puado", "rodri" ],
  [ "thibaut-courtois", "ansu-fati" ],
  [ "david-lopez", "gavi" ],
  [ "antonio-rudiger", "andreas-christensen" ],
  [ "kylian-mbappe", "raphinha" ],
  [ "julian-alvarez", "aitana-bonmati" ],
  [ "samuel-umtiti", "ousmane-dembele" ]
];
