// QUI HA ESTAT MÉS TEMPS LESIONAT · dies de baixa acumulats a tota la carrera (Transfermarkt, historial de lesions).
// Sancions no incloses (per això Transfermarkt i no Besoccer). Aitana i Alèxia: xifres de l'usuari (Besoccer).
// club/escut: club ACTUAL o l'últim en què ha jugat (revisat a Transfermarkt el 28/10/2026).
// r: frase que surt sota cada jugador en resoldre (dades de Transfermarkt, redactades per l'usuari).
window.JUGADORS = [
  { nom: "Ansu Fati", club: "AS Monaco", escut: "monaco", foto: "ansu-fati", dies: 835, r: "Va estar 306 dies lesionat del menisc l'any 2021." },
  { nom: "Andreas Christensen", club: "FC Barcelona", escut: "barca", foto: "andreas-christensen", dies: 739, r: "Ha tingut més de 30 lesions, la més llarga al tendó d'Aquil·les." },
  { nom: "Dembélé", club: "PSG", escut: "psg", foto: "ousmane-dembele", dies: 1006, r: "La més repetida ha sigut als isquiotibials." },
  { nom: "Raphinha", club: "FC Barcelona", escut: "barca", foto: "raphinha", dies: 355, r: "La temporada 2025/26 va estar 125 dies lesionat." },
  { nom: "Frenkie de Jong", club: "FC Barcelona", escut: "barca", foto: "frenkie-de-jong", dies: 899, r: "Ha tingut molts problemes als turmells." },
  { nom: "Umtiti", club: "Lille", escut: "lille", foto: "samuel-umtiti", dies: 1113, r: "376 dies per la lesió de genoll." },
  { nom: "Rodri", club: "FC Barcelona", escut: "barca", foto: "rodri", dies: 452, r: "Del 2020 al 2025 no va patir cap lesió." },
  { nom: "Messi", club: "Inter Miami", escut: "intermiami", foto: "lionel-messi", dies: 865, r: "Majoritàriament lesions musculars o infeccioses." },
  { nom: "Aitana Bonmatí", club: "FC Barcelona", escut: "barca", foto: "aitana-bonmati", dies: 192, r: "La més important ha estat una fractura de peroné l'any passat." },
  { nom: "Alèxia Putellas", club: "London City", escut: "london-city", foto: "alexia-putellas", dies: 360, r: "Va estar 295 dies sense jugar pel lligament creuat anterior." },
  { nom: "Gavi", club: "FC Barcelona", escut: "barca", foto: "gavi", dies: 580, r: "El lligament creuat li va fer perdre 58 partits." },
  { nom: "Javi Puado", club: "Espanyol", escut: "espanyol", foto: "javi-puado", dies: 460, r: "Només ha tingut 7 lesions a la seva carrera." },
  { nom: "Modrić", club: "AC Milan", escut: "acmilan", foto: "luka-modric", dies: 564, r: "La temporada que va estar més lesionat va ser la 14/15." },
  { nom: "Mbappé", club: "Reial Madrid", escut: "madrid", foto: "kylian-mbappe", dies: 312, r: "La lesió més llarga ha estat un traumatisme cranial l'any 2016." },
  { nom: "Courtois", club: "Reial Madrid", escut: "madrid", foto: "thibaut-courtois", dies: 727, r: "Trencament del lligament creuat anterior l'any 2023." },
  { nom: "Bale", club: "Los Angeles FC", escut: "lafc", foto: "gareth-bale", dies: 1122, r: "Ha tingut més de 40 lesions." },
  { nom: "Hazard", club: "Reial Madrid", escut: "madrid", foto: "eden-hazard", dies: 731, r: "Els principals problemes al peu i al turmell." },
  { nom: "Rüdiger", club: "Reial Madrid", escut: "madrid", foto: "antonio-rudiger", dies: 860, r: "Arrossega problemes al genoll des de la Roma 2015/16." },
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
  [ "antonio-rudiger", "andreas-christensen" ],
  [ "samuel-umtiti", "ousmane-dembele" ],
  [ "kylian-mbappe", "raphinha" ],
  [ "julian-alvarez", "aitana-bonmati" ]
];
