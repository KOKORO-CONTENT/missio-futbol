// "Endevina el jugador": la trajectòria de clubs de cada jugador/a, en ordre cronològic (BeSoccer / Transfermarkt; Jenni Hermoso, ceroacero).
// Equips filials i categories inferiors dins del club (Barça Atlètic -> Barça, Celta Fortuna -> Celta, Man. City U21 -> Man. City).
// [club, fitxer d'img/escuts, anys]. noms: paraules que es donen per bones en escriure la resposta.
// pistes: l'ordre en què es giren les cartes (índexs de clubs). Primer les pistes de misteri (on va començar, on juga ara,
// clubs d'una sola temporada) i al final els clubs que el delaten (on hi va ser més anys o on és un ídol).
// Surten en aquest ordre (Gemma vs Iris). dona: true -> el títol diu "Endevina la jugadora".
window.JUGADORS = [
  { nom: "Denis Suárez", foto: "denis-suarez.jpg", noms: ["denis", "suarez"], clubs: [
    ["Celta", "celta", "2009–2011 · 2019–2022"],
    ["Manchester City", "man-city", "2011–2013"],
    ["Barça", "barcelona", "2013–2014 · 2016–2019"],
    ["Sevilla", "sevilla", "2014–2016"],
    ["Vila-real", "villarreal", "2015–2016 · 2023–2025"],
    ["Arsenal", "arsenal", "2019"],
    ["Espanyol", "espanyol", "2022–2023"],
    ["Alavés", "alaves", "2025–"]
  ], pistes: [7, 5, 1, 6, 3, 4, 0, 2] },
  { nom: "Paulo Gazzaniga", foto: "gazzaniga.jpg", noms: ["gazzaniga", "gazaniga"], clubs: [
    ["Gillingham", "gillingham", "2011–2012"],
    ["Southampton", "southampton", "2012–2016"],
    ["Rayo Vallecano", "rayo", "2016–2017"],
    ["Tottenham", "tottenham", "2017–2021"],
    ["Elche", "elche", "2021"],
    ["Fulham", "fulham", "2021–2022"],
    ["Girona", "girona", "2022–"]
  ], pistes: [0, 4, 5, 2, 1, 3, 6] },
  { nom: "Philippe Coutinho", foto: "coutinho.jpg", noms: ["coutinho", "philippe"], clubs: [
    ["Vasco da Gama", "vasco", "2008–2010 · 2023–2025"],
    ["Inter", "inter", "2010–2013"],
    ["Espanyol", "espanyol", "2012"],
    ["Liverpool", "liverpool", "2013–2018"],
    ["Barça", "barcelona", "2018–2022"],
    ["Bayern", "bayern", "2019–2020"],
    ["Aston Villa", "aston-villa", "2022–2024"],
    ["Al-Duhail", "al-duhail", "2023–2024"],
    ["Santos", "santos", "2025–"]
  ], pistes: [7, 8, 2, 6, 0, 1, 5, 3, 4] },
  { nom: "Jenni Hermoso", foto: "jenni-hermoso.jpg", dona: true, noms: ["jenni", "jennifer", "hermoso"], clubs: [
    ["Atlètic de Madrid", "atletico", "2005–2010 · 2018–2019 · 2026–"],
    ["Rayo Vallecano", "rayo", "2010–2013"],
    ["Tyresö", "tyreso", "2013"],
    ["Barça", "barcelona", "2013–2017 · 2019–2022"],
    ["PSG", "psg", "2017–2018"],
    ["Pachuca", "pachuca", "2022–2023"],
    ["Tigres", "tigres", "2023–2026"]
  ], pistes: [2, 6, 5, 1, 4, 0, 3] },
  { nom: "David Beckham", foto: "beckham.jpg", noms: ["beckham", "bekam", "beckam"], clubs: [
    ["Manchester United", "man-united", "1992–2003"],
    ["Preston North End", "preston", "1995"],
    ["Reial Madrid", "real-madrid", "2003–2007"],
    ["LA Galaxy", "la-galaxy", "2007–2012"],
    ["Milan", "milan", "2009 · 2010"],
    ["PSG", "psg", "2013"]
  ], pistes: [1, 5, 4, 3, 2, 0] },
  // les dues últimes cartes que es giren: Barça i Deportivo
  { nom: "Aubameyang", foto: "aubameyang.jpg", noms: ["aubameyang", "aubamellang", "aubameyan", "auba"], clubs: [
    ["Milan", "milan", "2007–2011"],
    ["Dijon", "dijon", "2008–2009"],
    ["Lille", "lille", "2009–2010"],
    ["Mònaco", "monaco", "2010–2011"],
    ["Saint-Étienne", "saint-etienne", "2011–2013"],
    ["Dortmund", "dortmund", "2013–2018"],
    ["Arsenal", "arsenal", "2018–2022"],
    ["Barça", "barcelona", "2022"],
    ["Chelsea", "chelsea", "2022–2023"],
    ["Marsella", "marseille", "2023–2024 · 2025–2026"],
    ["Al-Qadsiah", "al-qadsiah", "2024–2025"],
    ["Deportivo", "deportivo", "2026–"]
  ], pistes: [1, 10, 2, 3, 0, 4, 9, 8, 6, 5, 7, 11] },
  { nom: "Mario Balotelli", foto: "balotelli.jpg", noms: ["balotelli", "mario"], clubs: [
    ["Lumezzane", "lumezzane", "2005–2006"],
    ["Inter", "inter", "2007–2010"],
    ["Manchester City", "man-city", "2010–2013"],
    ["Milan", "milan", "2013–2014 · 2015–2016"],
    ["Liverpool", "liverpool", "2014–2015"],
    ["Niça", "nice", "2016–2019"],
    ["Marsella", "marseille", "2019"],
    ["Brescia", "brescia", "2019–2020"],
    ["Monza", "monza", "2020–2021"],
    ["Adana Demirspor", "adana-demirspor", "2021–2022 · 2023–2024"],
    ["Sion", "sion", "2022–2023"],
    ["Genoa", "genoa", "2024–2025"],
    ["Al-Ittifaq", "al-ittifaq", "2026–"]
  ], pistes: [0, 12, 10, 8, 9, 7, 11, 6, 5, 4, 3, 1, 2] },
  { nom: "Keylor Navas", foto: "keylor-navas.jpg", noms: ["keylor", "navas", "keilor"], clubs: [
    ["Saprissa", "saprissa", "2005–2010"],
    ["Albacete", "albacete", "2010–2012"],
    ["Llevant", "levante", "2011–2014"],
    ["Reial Madrid", "real-madrid", "2014–2019"],
    ["PSG", "psg", "2019–2024"],
    ["Nottingham Forest", "nottingham", "2023"],
    ["Newell's Old Boys", "newells", "2025"],
    ["Pumas", "pumas", "2025–"]
  ], pistes: [1, 7, 6, 5, 2, 0, 4, 3] },
  { nom: "Javier Saviola", foto: "saviola.jpg", noms: ["saviola", "conejo"], clubs: [
    ["River Plate", "river", "1998–2001 · 2015–2016"],
    ["Barça", "barcelona", "2001–2007"],
    ["Mònaco", "monaco", "2004–2005"],
    ["Sevilla", "sevilla", "2005–2006"],
    ["Reial Madrid", "real-madrid", "2007–2009"],
    ["Benfica", "benfica", "2009–2012"],
    ["Màlaga", "malaga", "2012–2013"],
    ["Olympiacos", "olympiacos", "2013–2014"],
    ["Hellas Verona", "verona", "2014–2015"]
  ], pistes: [8, 7, 6, 2, 3, 5, 0, 4, 1] },
  { nom: "Olga Carmona", foto: "olga-carmona.jpg", dona: true, noms: ["olga", "carmona"], clubs: [
    ["Sevilla", "sevilla", "2017–2020"],
    ["Reial Madrid", "real-madrid", "2020–2025"],
    ["PSG", "psg", "2025–"]
  ], pistes: [2, 0, 1] },
  { nom: "Pere Pons", foto: "pere-pons.jpg", noms: ["pere pons", "pons"], clubs: [
    ["Girona", "girona", "2012–2019"],
    ["Olot", "olot", "2014"],
    ["Alavés", "alaves", "2019–2022"],
    ["AEK Làrnaca", "aek-larnaca", "2022–2026"],
    ["Sabadell", "sabadell", "2026–"]
  ], pistes: [1, 3, 4, 2, 0] }
];
// Noms dels dos concursants (es poden canviar aquí)
window.CONCURSANTS = ["Gemma", "Iris"];
