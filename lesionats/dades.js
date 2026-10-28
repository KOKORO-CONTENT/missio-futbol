// QUI HA ESTAT MÉS TEMPS LESIONAT · dies de baixa acumulats a tota la carrera (Transfermarkt, historial de lesions).
// Sancions no incloses (per això Transfermarkt i no Besoccer). Aitana i Alèxia: xifres de l'usuari (Besoccer).
// club/escut: club ACTUAL o l'últim en què ha jugat (revisat a Transfermarkt el 28/10/2026).
// curt/fet/dl: titular de la lesió més llarga (que es mostra en resoldre): "<curt> <fet> i va estar <dl> dies lesionat".
window.JUGADORS = [
  { nom: "Ansu Fati",           club: "AS Monaco",       escut: "monaco",     foto: "ansu-fati",           dies: 835,  curt: "Ansu Fati",   fet: "es va trencar el menisc el 2020", dl: "306" },
  { nom: "Andreas Christensen", club: "FC Barcelona",    escut: "barca",      foto: "andreas-christensen", dies: 739,  curt: "Christensen", fet: "va patir una irritació del tendó d'Aquil·les el 2024", dl: "149" },
  { nom: "Dembélé",             club: "PSG",             escut: "psg",        foto: "ousmane-dembele",     dies: 1006, curt: "Dembélé",     fet: "es va lesionar la cuixa el 2020", dl: "192" },
  { nom: "Raphinha",            club: "FC Barcelona",    escut: "barca",      foto: "raphinha",            dies: 355,  curt: "Raphinha",    fet: "es va lesionar la cuixa el 2025", dl: "58" },
  { nom: "Frenkie de Jong",     club: "FC Barcelona",    escut: "barca",      foto: "frenkie-de-jong",     dies: 899,  curt: "De Jong",     fet: "es va lesionar el turmell el 2024", dl: "163" },
  { nom: "Umtiti",              club: "Lille",           escut: "lille",      foto: "samuel-umtiti",       dies: 1113, curt: "Umtiti",      fet: "es va operar del genoll el 2024", dl: "364" },
  { nom: "Rodri",               club: "FC Barcelona",    escut: "barca",      foto: "rodri",               dies: 452,  curt: "Rodri",       fet: "es va trencar els creuats el 2024", dl: "220" },
  { nom: "Messi",               club: "Inter Miami",     escut: "intermiami", foto: "lionel-messi",        dies: 865,  curt: "Messi",       fet: "es va fracturar un metatarsià el 2006", dl: "88" },
  { nom: "Aitana Bonmatí",      club: "FC Barcelona",    escut: "barca",      foto: "aitana-bonmati",      dies: 192,  curt: "Aitana",      fet: "es va fracturar el peroné el 2025", dl: "152", fem: true },
  { nom: "Alèxia Putellas",     club: "London City",     escut: "london-city", foto: "alexia-putellas",    dies: 360,  curt: "Alèxia",      fet: "es va trencar els creuats el 2022", dl: "uns 300", fem: true },
  { nom: "Gavi",                club: "FC Barcelona",    escut: "barca",      foto: "gavi",                dies: 580,  curt: "Gavi",        fet: "es va trencar els creuats el 2023", dl: "316" },
  { nom: "Javi Puado",          club: "Espanyol",        escut: "espanyol",   foto: "javi-puado",          dies: 460,  curt: "Puado",       fet: "es va trencar els creuats el 2026", dl: "264" },
  { nom: "Modrić",              club: "AC Milan",        escut: "acmilan",    foto: "luka-modric",         dies: 564,  curt: "Modrić",      fet: "es va lesionar la cuixa el 2014", dl: "113" },
  { nom: "Mbappé",              club: "Reial Madrid",    escut: "madrid",     foto: "kylian-mbappe",       dies: 312,  curt: "Mbappé",      fet: "va patir un traumatisme cranial el 2016", dl: "36" },
  { nom: "Courtois",            club: "Reial Madrid",    escut: "madrid",     foto: "thibaut-courtois",    dies: 727,  curt: "Courtois",    fet: "es va trencar els creuats el 2023", dl: "235" },
  { nom: "Bale",                club: "Los Angeles FC",  escut: "lafc",       foto: "gareth-bale",         dies: 1122, curt: "Bale",        fet: "es va trencar un lligament del turmell el 2007", dl: "212" },
  { nom: "Hazard",              club: "Reial Madrid",    escut: "madrid",     foto: "eden-hazard",         dies: 731,  curt: "Hazard",      fet: "es va operar del turmell el 2017", dl: "81" },
  { nom: "Rüdiger",             club: "Reial Madrid",    escut: "madrid",     foto: "antonio-rudiger",     dies: 860,  curt: "Rüdiger",     fet: "es va trencar els creuats el 2016", dl: "138" },
  { nom: "David López",         club: "Girona",          escut: "girona",     foto: "david-lopez",         dies: 432,  curt: "David López", fet: "es va trencar els creuats el 2019", dl: "201" },
  { nom: "Julián Álvarez",      club: "Atlètic de Madrid", escut: "atletico", foto: "julian-alvarez",      dies: 50,   curt: "Julián",      fet: "es va fer un esquinç de turmell el 2026", dl: "26" }
];

// Parelles fixes, en aquest ordre (id de la foto). La resta de jugadors s'aparellen a l'atzar entre els que tenen dies semblants.
window.PARELLES = [
  ["frenkie-de-jong", "gareth-bale"],
  ["luka-modric", "alexia-putellas"],
  ["eden-hazard", "lionel-messi"],
  ["javi-puado", "rodri"],
  ["thibaut-courtois", "ansu-fati"],
  ["antonio-rudiger", "andreas-christensen"],
  ["samuel-umtiti", "ousmane-dembele"],
  ["kylian-mbappe", "raphinha"],
  ["julian-alvarez", "aitana-bonmati"]
];
