// "Cartes entrenadors": 25 cartes amb escuts, se'n veuen 5 alhora. El jugador en pre-selecciona 3, 4 o 5 i ha d'escriure
// un entrenador que hagi dirigit TOTS els equips seleccionats. Si encerta, les cartes se substitueixen per les següents.
// Els equips surten sempre en aquest ordre (ordre fix de la baralla).
window.TITOL = ["Entrenadors", "Quin entrenador?"];
window.MIN = 3;
window.MAX = 5;
// [id (img/escuts/<id>.png), nom]
window.EQUIPS = [
  ["sevilla", "Sevilla"], ["psg", "PSG"], ["arsenal", "Arsenal"], ["chelsea", "Chelsea"], ["valencia", "València"],
  ["villa", "Aston Villa"], ["villarreal", "Villarreal"], ["inter", "Inter"], ["manutd", "Manchester United"], ["tottenham", "Tottenham"],
  ["roma", "Roma"], ["juventus", "Juventus"], ["milan", "Milan"], ["napoli", "Nàpols"], ["bayern", "Bayern"],
  ["madrid", "Reial Madrid"], ["liverpool", "Liverpool"], ["newcastle", "Newcastle"], ["everton", "Everton"], ["celta", "Celta"],
  ["atletico", "Atlètic de Madrid"], ["monaco", "Mònaco"], ["fiorentina", "Fiorentina"], ["leicester", "Leicester"], ["fulham", "Fulham"]
];
// [nom, equips (només els que són a la baralla) , paraules que es donen per bones]
window.ENTRENADORS = [
  ["Unai Emery", ["sevilla", "psg", "arsenal", "villa", "villarreal", "valencia"], ["emery", "unai"]],
  ["José Mourinho", ["chelsea", "inter", "manutd", "tottenham", "roma", "madrid"], ["mourinho", "mou", "jose mourinho"]],
  ["Carlo Ancelotti", ["juventus", "milan", "napoli", "bayern", "madrid", "chelsea", "psg", "everton"], ["ancelotti", "carletto", "carlo"]],
  ["Rafa Benítez", ["valencia", "liverpool", "newcastle", "everton", "celta", "inter", "chelsea", "napoli", "madrid"], ["benitez", "rafa benitez", "rafa"]],
  ["Claudio Ranieri", ["atletico", "monaco", "fiorentina", "leicester", "fulham", "valencia", "chelsea", "juventus", "roma", "inter", "napoli"], ["ranieri", "claudio ranieri"]],
  ["Antonio Conte", ["juventus", "chelsea", "inter", "tottenham", "napoli"], ["conte"]],
  ["Mauricio Pochettino", ["tottenham", "psg", "chelsea"], ["pochettino", "poche"]],
  ["Thomas Tuchel", ["psg", "chelsea", "bayern"], ["tuchel"]],
  ["Manuel Pellegrini", ["villarreal", "madrid"], ["pellegrini"]],
  ["Julen Lopetegui", ["madrid", "sevilla"], ["lopetegui"]],
  ["Roberto Mancini", ["fiorentina", "inter"], ["mancini"]],
  ["Roy Hodgson", ["inter", "liverpool", "fulham"], ["hodgson"]],
  ["Arsène Wenger", ["monaco", "arsenal"], ["wenger"]],
  ["Luis Enrique", ["roma", "celta", "psg"], ["luis enrique", "lucho"]],
  ["Massimiliano Allegri", ["milan", "juventus"], ["allegri"]]
];
