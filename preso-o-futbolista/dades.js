// "Presidiari o futbolista?": a cada ronda, dues fotos (un presidiari i un futbolista poc conegut) i el concursant
// ha d'assenyalar qui és el presidiari. En revelar-ho, el futbolista ensenya nom i club i el presidiari surt amb
// el segell.
// Presidiaris: fitxes policials de domini públic de Wikimedia Commons (condemnats en casos coneguts; fonts a
// credits-presos.json). Ús intern.
// Fotos: img/presos/ i img/futbolistes/ (jpg o png, cara i pit, unes 360×468). Futbolistes: fotos de Wikimedia Commons (fonts a credits-futbolistes.json), club actual segons la Viquipèdia (oct. 2026).
// futbolista.club (+ escut opcional, dins d'img/) surt en revelar; preso.delicte = què va fer i preso.lloc = on és pres (opcionals, buit = no surt).
// costat: on surt el presidiari ("L" esquerra, "R" dreta).
window.RONDES = [
  { costat: "L", preso: { nom: "Albert Gonzalez", foto: "presos-retall/albert-gonzalez.png", delicte: "Robar 170 milions de targetes de crèdit · 20 anys", lloc: "" }, futbolista: { nom: "Valon Berisha", club: "FC Zürich", escut: "escuts/berisha.png", foto: "futbolistes-retall/berisha.png" } },
  { costat: "R", preso: { nom: "Kodak Black", foto: "presos-retall/kodak-black.png", delicte: "Mentir per comprar armes · 46 mesos", lloc: "" }, futbolista: { nom: "Anastasios Bakasetas", club: "APOEL", escut: "escuts/bakasetas.png", foto: "futbolistes-retall/bakasetas.png" } },
  { costat: "R", preso: { nom: "Wayne Jenkins", foto: "presos-retall/wayne-jenkins.png", delicte: "Policia corrupte: robatoris i drogues · 25 anys", lloc: "FMC Lexington, Kentucky (EUA)" }, futbolista: { nom: "Grant Hanley", club: "Hibernian", escut: "escuts/hanley.png", foto: "futbolistes-retall/hanley.png" } },
  { costat: "L", preso: { nom: "David Kernell", foto: "presos-retall/david-kernell.png", delicte: "Hackejar el correu de Sarah Palin · 1 any", lloc: "" }, futbolista: { nom: "Federico Macheda", club: "Asteras Tripolis", escut: "escuts/macheda.png", foto: "futbolistes-retall/macheda.png" } },
  { costat: "R", preso: { nom: "Jeremy Meeks", foto: "presos-retall/jeremy-meeks.png", delicte: "Pandiller amb arma i robatori · ara és model", lloc: "" }, futbolista: { nom: "Ante Palaversa", club: "Aberdeen", escut: "escuts/palaversa.png", foto: "futbolistes-retall/palaversa.png" } },
  { costat: "L", preso: { nom: "Chris George", foto: "presos-retall/christopher-george.png", delicte: "Rei de les clíniques de pastilles opioides · 17 anys i mig", lloc: "" }, futbolista: { nom: "Ibrahim Šehić", club: "Sarıyer", escut: "escuts/sehic.png", foto: "futbolistes-retall/sehic.png" } },
  { costat: "L", preso: { nom: "George Cottrell", foto: "presos-retall/george-cottrell.png", delicte: "Frau bancari als EUA (assessor de Nigel Farage)", lloc: "" }, futbolista: { nom: "Roman Yaremchuk", club: "Olympiacos", escut: "escuts/yaremchuk.png", foto: "futbolistes-retall/yaremchuk.png" } },
  { costat: "R", preso: { nom: "Brad Renfro", foto: "presos-retall/brad-renfro.png", delicte: "Intentar robar un iot i heroïna", lloc: "" }, futbolista: { nom: "Mateusz Wieteska", club: "Wieczysta Kraków", escut: "escuts/wieteska.png", foto: "futbolistes-retall/wieteska.png" } }
];
