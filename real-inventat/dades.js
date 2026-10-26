// "Equip real o inventat": surt el nom i l'escut d'un club; el concursant tria REAL o INVENTAT.
// Reals: escut de la Viquipèdia o Transfermarkt i fitxa (país, any de fundació, curiositat).
// Inventats: escut fet amb eines/escuts-inventats.py (una foto real dins d'un escut de club).
// Surten en ordre aleatori (l'ordre queda gravat per a l'export).
window.CLUBS = [
  // --- reals ---
  { nom: "Club Tre Penne", escut: "tre-penne.png", real: true, pais: "San Marino", any: 1956,
    info: "«Tre penne» vol dir «tres plomes» en italià: les tres torres del Mont Titano, símbol de la república." },
  { nom: "Real Titánico", escut: "real-titanico.png", real: true, pais: "Espanya (Astúries)", any: 1912,
    info: "De Pola de Laviana. Es diu així pel naufragi del Titanic, que va passar l'any que es va fundar." },
  { nom: "Mar de Fondo Fútbol Club", escut: "mar-de-fondo.png", real: true, pais: "Uruguai", any: 1934,
    info: "Club de Montevideo nascut al barri de Palermo. Va deixar de jugar el 1978 i va tornar el 2003." },
  { nom: "Semen Padang", escut: "semen-padang.png", real: true, pais: "Indonèsia", any: 1980,
    info: "«Semen» vol dir «ciment» en indonesi: el club és de la cimentera de Padang (Sumatra Occidental)." },
  { nom: "Hashtag United", escut: "hashtag-united.png", real: true, pais: "Anglaterra", any: 2016,
    info: "El va crear un youtuber per jugar partits a internet i ara competeix a la lliga semiprofessional anglesa." },
  { nom: "Real Madriz", escut: "real-madriz.png", real: true, pais: "Nicaragua", any: 1996,
    info: "De Somoto, al departament de Madriz, que porta el nom de José Madriz, president de Nicaragua al segle XX." },
  { nom: "Tafea Football Club", escut: "tafea.png", real: true, pais: "Vanuatu", any: 1994,
    info: "Rècord mundial de lligues seguides: en va guanyar 15 de cop, del 1994 al 2009." },
  { nom: "Sacachispas Fútbol Club", escut: "sacachispas.png", real: true, pais: "Argentina", any: 1948,
    info: "Es diu com l'equip de la pel·lícula «Pelota de trapo» (1948): els fundadors la van veure i el van crear." },
  { nom: "Carabobo Fútbol Club", escut: "carabobo.png", real: true, pais: "Veneçuela", any: 1997,
    info: "Pren el nom de l'estat de Carabobo i juga a la Primera Divisió de Veneçuela, a la ciutat de Valencia." },
  { nom: "Robin Hood Football Club", escut: "robin-hood.png", real: true, pais: "Bermudes", any: 1977,
    info: "No té res a veure amb l'heroi: ve del poblat de Robin Hood. Campió de la Premier de les Bermudes el 2017." },
  // --- inventats ---
  { nom: "Inter Mitente", escut: "inv-inter-mitente.png", real: false },
  { nom: "Virra Libre FC", escut: "inv-virra-libre.png", real: false },
  { nom: "Club Masque Chup", escut: "inv-masque-chup.png", real: false },
  { nom: "Centro Cultural y Deportivo Pedro", escut: "inv-ccd-pedro.png", real: false },
  { nom: "Bonsi United", escut: "inv-bonsi-united.png", real: false },
  { nom: "Rovelló City Manlleu", escut: "inv-rovello-city.png", real: false },
  { nom: "Aston Totú", escut: "inv-aston-totu.png", real: false },
  { nom: "RQ Sans", escut: "inv-rq-sans.png", real: false },
  { nom: "Reial Club Deportiu Fuet", escut: "inv-rcd-fuet.png", real: false },
  { nom: "Avispa Figueres", escut: "inv-avispa-figueres.png", real: false },
  { nom: "FC Voten Blank", escut: "inv-voten-blank.png", real: false },
  { nom: "Bayern de Tarragona", escut: "inv-bayern-tarragona.png", real: false },
  { nom: "Futbol Club Barcelona Espanyol", escut: "inv-barcelona-espanyol.png", real: false }
];
