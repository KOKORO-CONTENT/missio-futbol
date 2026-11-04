// "Veritat o mentida": surt una frase sobre futbol; el concursant tria VERITAT (esquerra) o MENTIDA (dreta).
// real: true = la frase és certa. info = aclariment que surt en revelar-la.
// Surten en ordre aleatori (l'ordre queda gravat per a l'export).
window.FRASES = [
  // --- veritat ---
  { nom: "Espanya va guanyar el Mundial de 2010 amb un 1-0 a la final", real: true, info: "Gol d'Iniesta a la pròrroga contra els Països Baixos, a Johannesburg." },
  { nom: "El primer Mundial es va jugar a l'Uruguai", real: true, info: "Va ser el 1930, i l'Uruguai el va guanyar a casa seva." },
  { nom: "Pelé és l'únic jugador que ha guanyat tres Mundials", real: true, info: "Els de 1958, 1962 i 1970 amb el Brasil." },
  { nom: "Un gol d'un Mundial es va marcar als 11 segons de partit", real: true, info: "Hakan Şükür, amb Turquia contra Corea del Sud, el 2002: el gol més ràpid de la història dels Mundials." },
  { nom: "Klose és el màxim golejador de la història dels Mundials", real: true, info: "16 gols amb Alemanya entre 2002 i 2014." },
  { nom: "Maradona va marcar amb la mà contra Anglaterra al Mundial de 1986", real: true, info: "És el gol conegut com «la mà de Déu». Aquell dia en va marcar un altre, també famós." },
  { nom: "La porteria de futbol fa 7,32 metres d'ample", real: true, info: "I 2,44 metres d'alçada." },
  { nom: "Messi va debutar amb el primer equip del Barça als 17 anys", real: true, info: "L'octubre del 2004, contra l'Espanyol." },
  { nom: "Lamine Yamal va debutar amb la selecció espanyola als 16 anys", real: true, info: "Va ser el 2023, i es va convertir en el jugador més jove a debutar amb Espanya." },
  { nom: "El Camp Nou es va inaugurar el 1957", real: true, info: "Va substituir el vell camp de Les Corts." },
  // --- mentida ---
  { nom: "El Mundial de 1994 es va jugar a Mèxic", real: false, info: "Es va jugar als Estats Units. Mèxic va ser seu el 1970 i el 1986." },
  { nom: "El Barça va guanyar la seva primera Champions el 1989", real: false, info: "Va ser el 1992, a Wembley, amb gol de Koeman." },
  { nom: "Zidane va guanyar el Mundial de 2006 amb França", real: false, info: "El va guanyar Itàlia, a la final que Zidane va acabar amb una targeta vermella." },
  { nom: "El Brasil ha guanyat sis Mundials", real: false, info: "N'ha guanyat cinc: 1958, 1962, 1970, 1994 i 2002." },
  { nom: "El Mundial de Qatar es va jugar a l'estiu", real: false, info: "Es va jugar al novembre i al desembre del 2022, per la calor." },
  { nom: "Ronaldinho va guanyar la Pilota d'Or el 2007", real: false, info: "La va guanyar el 2005. El 2007 va ser per a Kaká." },
  { nom: "Cristiano Ronaldo va fitxar pel Reial Madrid el 2005", real: false, info: "Hi va arribar el 2009, des del Manchester United." },
  { nom: "La Lliga espanyola es va crear el 1950", real: false, info: "La primera edició va ser la temporada 1928/29." },
  { nom: "Un partit de futbol té tres parts de 30 minuts", real: false, info: "Té dues parts de 45 minuts, amb un descans de 15." },
  { nom: "Un equip de futbol juga amb dotze jugadors al camp", real: false, info: "Són onze: deu de camp i un porter." }
];
