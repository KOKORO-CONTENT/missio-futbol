// Preguntes de "L'impostor d'estadis".
// { q: text (el que va entre *asteriscs* es veu en verd), j: nom del jugador, f: fitxer de stickers/ (sense .png),
//   op: [4 estadis], ok: posició (0-3) de la resposta correcta a "op", nota: text curt que surt en revelar }
// ATENCIÓ: les respostes (ok) i les notes s'han posat de memòria, SENSE verificar. Revisa-les abans de gravar!
window.PREGUNTES = [
  { q: "A quin estadi *NO* ha marcat mai Harry Kane?", j: "Harry Kane", f: "harry-kane",
    op: ["Camp Nou", "Bernabéu", "Wembley", "San Siro"], ok: 0, nota: "Mai ha marcat al Camp Nou" },
  { q: "A quin estadi *NO* ha marcat mai Vinícius?", j: "Vinícius", f: "vinicius-junior",
    op: ["Bernabéu", "Allianz Arena", "Anfield", "Old Trafford"], ok: 3, nota: "Mai ha marcat a Old Trafford" },
  { q: "A quin estadi han expulsat *MÉS* vegades Sergio Ramos?", j: "Sergio Ramos", f: "sergio-ramos",
    op: ["Camp Nou", "Vicente Calderón", "Old Trafford", "San Siro"], ok: 0, nota: "Més expulsions al Camp Nou" },
  { q: "A quin estadi *NO* ha jugat mai Lamine?", j: "Lamine Yamal", f: "lamine-yamal",
    op: ["Bernabéu", "Metropolitano", "El Sadar", "Old Trafford"], ok: 3, nota: "Mai ha jugat a Old Trafford" },
  { q: "A quin estadi *NO* ha jugat mai Vedat Muriqi?", j: "Vedat Muriqi", f: "vedat-muriqi",
    op: ["Montilivi", "La Cartuja", "La Romareda", "Da Luz (Benfica)"], ok: 3, nota: "Mai ha jugat a Da Luz" },
  { q: "A quin estadi ha estat *EXPULSAT* Hansi Flick?", j: "Hansi Flick", f: "hansi-flick",
    op: ["Benito Villamarín", "Camp Nou", "RCDE Stadium", "Coliseum"], ok: 0, nota: "Expulsat al Benito Villamarín" },
  { q: "A quin estadi *NO* ha marcat mai Clàudia Pina?", j: "Clàudia Pina", f: "claudia-pina",
    op: ["Stamford Bridge", "Camp Nou", "Metropolitano", "Parc Olympique Lyonnais"], ok: 0, nota: "Mai ha marcat a Stamford Bridge" },
  { q: "A quin estadi *NO* ha marcat mai Leo Messi?", j: "Leo Messi", f: "lionel-messi",
    op: ["Bernabéu", "Anfield", "Wembley", "Old Trafford"], ok: 3, nota: "Mai ha marcat a Old Trafford" }
];
