// "Talla-la!": categories i les seves llistes.
// si = encaixen amb la categoria (cal tallar-los); no = intrusos (si els talles, perds punts).
// Tot ha de ser VERITAT: abans d'afegir un nom, comprova'l. Els noms es mostren en majúscules.
window.JOC = {
  participants: ["Gemma", "Iris"],
  rondes: 3,
  categories: [
    { id: "barca", titol: "Han jugat al Barça",
      si: ["Messi", "Xavi", "Iniesta", "Ronaldinho", "Neymar", "Luis Suárez", "Eto'o", "Henry", "Piqué", "Busquets", "Puyol", "Villa", "Cesc", "Dani Alves", "Rivaldo", "Figo", "Ronaldo Nazário", "Romário", "Stoichkov", "Kluivert", "Deco", "Lewandowski", "Dembélé", "Coutinho", "Mascherano", "Ibrahimović", "Griezmann", "Agüero"],
      no: ["Cristiano Ronaldo", "Raúl", "Casillas", "Zidane", "Beckham", "Kaká", "Benzema", "Modrić", "Kroos", "Sergio Ramos", "Bale", "Totti", "Buffon", "Salah", "Haaland", "Mbappé", "Rooney", "Gerrard", "Lampard", "Maldini", "Drogba", "Van Nistelrooy", "Hazard", "Özil", "Di María"] },
    { id: "madrid", titol: "Han jugat al Reial Madrid",
      si: ["Cristiano Ronaldo", "Raúl", "Casillas", "Zidane", "Beckham", "Kaká", "Benzema", "Modrić", "Kroos", "Sergio Ramos", "Bale", "Figo", "Ronaldo Nazário", "Roberto Carlos", "Hazard", "Mbappé", "Bellingham", "Özil", "Di María", "Hugo Sánchez", "Seedorf", "Robben", "Van Nistelrooy", "Courtois", "Vinícius", "Xabi Alonso", "Cannavaro", "Owen", "Carvajal"],
      no: ["Messi", "Xavi", "Iniesta", "Ronaldinho", "Neymar", "Luis Suárez", "Henry", "Piqué", "Rooney", "Lampard", "Gerrard", "Totti", "Buffon", "Haaland", "Salah", "Maldini", "Drogba", "Eto'o", "Busquets", "Lewandowski", "Griezmann", "Puyol"] },
    { id: "mundial", titol: "Han guanyat un Mundial",
      si: ["Messi", "Mbappé", "Iniesta", "Xavi", "Casillas", "Sergio Ramos", "Piqué", "Busquets", "Villa", "Puyol", "Zidane", "Ronaldo Nazário", "Ronaldinho", "Kaká", "Cafu", "Roberto Carlos", "Rivaldo", "Pirlo", "Buffon", "Cannavaro", "Lahm", "Neuer", "Kroos", "Klose", "Griezmann", "Henry", "Pogba", "Di María", "Cesc", "Maradona"],
      no: ["Cristiano Ronaldo", "Haaland", "Neymar", "Luis Suárez", "Lewandowski", "Salah", "Beckham", "Rooney", "Gerrard", "Ibrahimović", "Bale", "Modrić", "Cruyff", "Maldini", "Kane", "De Bruyne", "Hazard", "Bergkamp", "Eto'o", "Drogba", "Mascherano", "Agüero", "Platini", "Zico"] },
    { id: "pilota-or", titol: "Han guanyat la Pilota d'Or",
      si: ["Messi", "Cristiano Ronaldo", "Modrić", "Benzema", "Ronaldinho", "Kaká", "Ronaldo Nazário", "Zidane", "Figo", "Rivaldo", "Cannavaro", "Owen", "Shevchenko", "Nedvěd", "Rodri", "Weah", "Cruyff", "Platini", "Van Basten", "Gullit", "Stoichkov"],
      no: ["Xavi", "Iniesta", "Neymar", "Mbappé", "Haaland", "Salah", "Lewandowski", "Luis Suárez", "Henry", "Maldini", "Buffon", "Casillas", "Pirlo", "Ibrahimović", "Totti", "Kane", "Bellingham", "Vinícius", "Beckham", "Rooney", "Gerrard", "Lampard", "Drogba", "Eto'o", "Raúl", "Puyol", "De Bruyne", "Son"] },
    { id: "espanyols", titol: "Són espanyols",
      si: ["Xavi", "Iniesta", "Casillas", "Sergio Ramos", "Piqué", "Busquets", "Villa", "Puyol", "Raúl", "Fernando Torres", "Cesc", "Pedri", "Gavi", "Lamine Yamal", "Rodri", "Morata", "Carvajal", "Xabi Alonso", "David Silva", "Juan Mata", "Ferran Torres", "Dani Olmo", "Unai Simón", "Aitana Bonmatí", "Alexia Putellas", "Olga Carmona"],
      no: ["Messi", "Cristiano Ronaldo", "Luis Suárez", "Dani Alves", "Neymar", "Mascherano", "Henry", "Zidane", "Totti", "Kaká", "Lewandowski", "Modrić", "Ibrahimović", "Kroos", "Ronaldinho", "Griezmann", "Courtois", "Ter Stegen", "Rivaldo", "Figo", "Beckham", "Bale"] },
    { id: "brasilers", titol: "Són brasilers",
      si: ["Ronaldinho", "Neymar", "Kaká", "Rivaldo", "Romário", "Ronaldo Nazário", "Cafu", "Roberto Carlos", "Dani Alves", "Vinícius", "Rodrygo", "Raphinha", "Marcelo", "Casemiro", "Thiago Silva", "Alisson", "Ederson", "Pelé", "Zico", "Robinho", "Coutinho", "Richarlison", "Gabriel Jesus", "Militão"],
      no: ["Messi", "Cristiano Ronaldo", "Luis Suárez", "Mascherano", "Di María", "Agüero", "Maradona", "Dybala", "Forlán", "Cavani", "Falcao", "James", "Valderrama", "Ibrahimović", "Zidane", "Henry", "Pogba", "Lautaro", "Valverde", "Enzo Fernández", "Alexis Sánchez", "Vidal", "Batistuta", "Figo"] },
    { id: "porters", titol: "Són porters",
      si: ["Casillas", "Neuer", "Buffon", "Courtois", "Oblak", "Ter Stegen", "Alisson", "Ederson", "Donnarumma", "Kahn", "Čech", "Schmeichel", "Valdés", "Zubizarreta", "Yashin", "Szczęsny", "Raya", "Dibu Martínez", "Lloris", "Keylor Navas", "Cata Coll", "Mary Earps", "Pepe Reina"],
      no: ["Messi", "Xavi", "Iniesta", "Sergio Ramos", "Piqué", "Busquets", "Cristiano Ronaldo", "Modrić", "Kroos", "Haaland", "Mbappé", "Lamine Yamal", "Pedri", "Neymar", "Benzema", "Zidane", "Maldini", "Puyol", "Raúl", "Totti", "Ronaldinho", "Salah", "Lewandowski", "Rodri", "Bellingham", "De Bruyne"] },
    { id: "equips-europa", titol: "Equips campions d'Europa",
      si: ["Barça", "Reial Madrid", "Bayern", "Liverpool", "Milan", "Inter", "Juventus", "Manchester United", "Chelsea", "Ajax", "Porto", "Benfica", "Nottingham Forest", "Aston Villa", "Hamburg", "Marseille", "Borussia Dortmund", "Celtic", "Manchester City", "PSG", "Feyenoord", "PSV", "Steaua", "Estrella Roja"],
      no: ["Arsenal", "Atlètic de Madrid", "Tottenham", "Roma", "Lazio", "Leverkusen", "Nàpols", "Sevilla", "València", "Vila-real", "Lió", "Mònaco", "Atalanta", "Newcastle", "Everton", "Sporting", "Reial Societat", "Athletic Club", "Girona", "Betis", "Fiorentina", "West Ham", "Leeds", "Brighton"] },
    { id: "barca-femeni", titol: "Han jugat al Barça Femení",
      si: ["Alexia", "Aitana", "Mariona", "Patri Guijarro", "Salma Paralluelo", "Ona Batlle", "Clàudia Pina", "Cata Coll", "Ewa Pajor", "Graham Hansen", "Rolfö", "Lucy Bronze", "Irene Paredes", "Mapi León", "Lieke Martens", "Vicky López", "Sandra Paños", "Bruna Vilamala"],
      no: ["Hegerberg", "Sam Kerr", "Rapinoe", "Alex Morgan", "Mary Earps", "Alessia Russo", "Chloe Kelly", "Beth Mead", "Lauren James", "Wendie Renard", "Marta", "Linda Caicedo", "Athenea del Castillo", "Misa Rodríguez", "Olga Carmona", "Teresa Abelleira", "Leah Williamson", "Ellen White"] }
  ]
};

// Cares (stickers/<fitxer>.png) per nom. Només surten a la partida els noms que tenen cara; una categoria
// només es juga si en té prou (6 encerts i 5 intrusos amb cara). Per ampliar-ne: afegeix el sticker i el nom aquí.
window.JOC.cares = {
  "Messi": "lionel-messi", "Xavi": "xavi-hernandez", "Iniesta": "andres-iniesta", "Ronaldinho": "ronaldinho", "Neymar": "neymar",
  "Piqué": "gerard-pique", "Busquets": "sergio-busquets", "Ronaldo Nazário": "ronaldo-nazario", "Lewandowski": "robert-lewandowski",
  "Dembélé": "ousmane-dembele", "Coutinho": "philippe-coutinho", "Ibrahimović": "zlatan-ibrahimovic", "Griezmann": "antoine-griezmann",
  "Cristiano Ronaldo": "cristiano-ronaldo", "Benzema": "karim-benzema", "Sergio Ramos": "sergio-ramos", "Mbappé": "kylian-mbappe",
  "Bellingham": "jude-bellingham", "Courtois": "thibaut-courtois", "Vinícius": "vinicius-junior", "Haaland": "erling-haaland",
  "Salah": "mohamed-salah", "Buffon": "gianluigi-buffon", "Totti": "francesco-totti", "Kane": "harry-kane", "Rodri": "rodri",
  "Raphinha": "raphinha", "Ferran Torres": "ferran-torres", "Lamine Yamal": "lamine-yamal", "Aitana Bonmatí": "aitana-bonmati",
  "Alexia Putellas": "alexia-putellas", "Aitana": "aitana-bonmati", "Alexia": "alexia-putellas", "Mariona": "mariona-caldentey",
  "Salma Paralluelo": "salma-paralluelo", "Ona Batlle": "ona-batlle", "Clàudia Pina": "claudia-pina", "Cata Coll": "cata-coll",
  "Ewa Pajor": "ewa-pajor", "Lucy Bronze": "lucy-bronze", "Misa Rodríguez": "misa-rodriguez", "Rapinoe": "megan-rapinoe", "Sam Kerr": "sam-kerr"
};
