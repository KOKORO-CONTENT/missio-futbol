// QUANT MESURA? · rondes en l'ordre del guió.
// ref = jugador de referència (alçada visible); mis = jugador misteriós (cal ajustar-ne l'alçada); ini = alçada inicial (m) de la silueta.
// foto = silueta a sil/<foto>.png, retallada al contorn (qualsevol pose): l'alçada de la silueta ES l'alçada del jugador, tant se val si no està dret del tot.
// ar = ample/alt de la silueta. Alçades en cm segons Transfermarkt (revisar).
window.RONDES = [
  { ref: { nom: "Leo Messi", cm: 170, foto: "messi", ar: 0.3356 },
    mis: { nom: "Cristiano Ronaldo", cm: 187, foto: "ronaldo", ar: 0.4367 }, ini: 1.52 },
  { ref: { nom: "Cristiano Ronaldo", cm: 187, foto: "ronaldo", ar: 0.4367 },
    mis: { nom: "Kylian Mbappé", cm: 178, foto: "mbappe", ar: 0.5433 }, ini: 1.95 },
  { ref: { nom: "Kylian Mbappé", cm: 178, foto: "mbappe", ar: 0.5433 },
    mis: { nom: "Erling Haaland", cm: 195, foto: "haaland", ar: 0.5044 }, ini: 1.62 },
  { ref: { nom: "Erling Haaland", cm: 195, foto: "haaland", ar: 0.5044 },
    mis: { nom: "Khvicha Kvaratskhelia", cm: 183, foto: "kvara", ar: 0.3689 }, ini: 2.05 },
  { ref: { nom: "Khvicha Kvaratskhelia", cm: 183, foto: "kvara", ar: 0.3689 },
    mis: { nom: "Neymar Jr", cm: 175, foto: "neymar", ar: 0.4667 }, ini: 1.60 },
  { ref: { nom: "Neymar Jr", cm: 175, foto: "neymar", ar: 0.4667 },
    mis: { nom: "Jude Bellingham", cm: 186, foto: "bellingham", ar: 0.9678 }, ini: 1.72 },
  { ref: { nom: "Jude Bellingham", cm: 186, foto: "bellingham", ar: 0.9678 },
    mis: { nom: "Andrés Iniesta", cm: 171, foto: "iniesta", ar: 1.0311 }, ini: 2.00 },
  { ref: { nom: "Andrés Iniesta", cm: 171, foto: "iniesta", ar: 1.0311 },
    mis: { nom: "Harry Kane", cm: 188, foto: "kane", ar: 0.4444 }, ini: 1.60 },
  { ref: { nom: "Harry Kane", cm: 188, foto: "kane", ar: 0.4444 },
    mis: { nom: "Ousmane Dembélé", cm: 178, foto: "dembele", ar: 1.1100 }, ini: 1.95 },
  { ref: { nom: "Ousmane Dembélé", cm: 178, foto: "dembele", ar: 1.1100 },
    mis: { nom: "Fabián Ruiz", cm: 189, foto: "fabian", ar: 0.3233 }, ini: 1.62 },
  { ref: { nom: "Fabián Ruiz", cm: 189, foto: "fabian", ar: 0.3233 },
    mis: { nom: "Leo Messi", cm: 170, foto: "messi", ar: 0.3356 }, ini: 1.90 }
];
