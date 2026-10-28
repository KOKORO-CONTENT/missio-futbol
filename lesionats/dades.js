// QUI HA ESTAT MÉS TEMPS LESIONAT · dies de baixa acumulats (Transfermarkt, historial de lesions).
// L'ordre de la llista no importa: a cada partida es barreja. Sancions no incloses (per això Transfermarkt i no Besoccer).
// Aitana i Alèxia: sense dada de Transfermarkt; les xifres són les de l'usuari (Besoccer / pendent de revisar).
window.JUGADORS = [
  { nom: "Ansu Fati",           club: "FC Barcelona",   escut: "barca",    foto: "ansu-fati",           dies: 749 },
  { nom: "Andreas Christensen", club: "FC Barcelona",   escut: "barca",    foto: "andreas-christensen", dies: 861 },
  { nom: "Dembélé",             club: "PSG",            escut: "psg",      foto: "ousmane-dembele",     dies: 1006 },
  { nom: "Raphinha",            club: "FC Barcelona",   escut: "barca",    foto: "raphinha",            dies: 355 },
  { nom: "Frenkie de Jong",     club: "FC Barcelona",   escut: "barca",    foto: "frenkie-de-jong",     dies: 899 },
  { nom: "Umtiti",              club: "FC Barcelona",   escut: "barca",    foto: "samuel-umtiti",       dies: 1113 },
  { nom: "Rodri",               club: "Manchester City", escut: "mancity", foto: "rodri",               dies: 452 },
  { nom: "Messi",               club: "FC Barcelona",   escut: "barca",    foto: "lionel-messi",        dies: 865 },
  { nom: "Aitana Bonmatí",      club: "FC Barcelona",   escut: "barca",    foto: "aitana-bonmati",      dies: 192, rol: "Jugadora" },
  { nom: "Alèxia Putellas",     club: "FC Barcelona",   escut: "barca",    foto: "alexia-putellas",     dies: 360, rol: "Jugadora" },
  { nom: "Gavi",                club: "FC Barcelona",   escut: "barca",    foto: "gavi",                dies: 580 },
  { nom: "Javi Puado",          club: "Espanyol",       escut: "espanyol", foto: "javi-puado",          dies: 460 },
  { nom: "Modrić",              club: "Reial Madrid",   escut: "madrid",   foto: "luka-modric",         dies: 564 },
  { nom: "Mbappé",              club: "Reial Madrid",   escut: "madrid",   foto: "kylian-mbappe",       dies: 312 },
  { nom: "Courtois",            club: "Reial Madrid",   escut: "madrid",   foto: "thibaut-courtois",    dies: 600 },
  { nom: "Bale",                club: "Reial Madrid",   escut: "madrid",   foto: "gareth-bale",         dies: 1122 },
  { nom: "Hazard",              club: "Reial Madrid",   escut: "madrid",   foto: "eden-hazard",         dies: 731 },
  { nom: "Rüdiger",             club: "Reial Madrid",   escut: "madrid",   foto: "antonio-rudiger",     dies: 860 },
  { nom: "David López",         club: "Girona",         escut: "girona",   foto: "david-lopez",         dies: 432 }
];

// Parelles fixes (id de la foto). Els jugadors que no hi surten s'aparellen a l'atzar a cada partida.
window.PARELLES = [
  ["frenkie-de-jong", "gareth-bale"],
  ["luka-modric", "alexia-putellas"],
  ["eden-hazard", "lionel-messi"],
  ["javi-puado", "rodri"],
  ["thibaut-courtois", "ansu-fati"],
  ["antonio-rudiger", "andreas-christensen"],
  ["samuel-umtiti", "ousmane-dembele"],
  ["kylian-mbappe", "raphinha"]
];
