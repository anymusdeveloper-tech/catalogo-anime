const animeData = {
  A: [
    {
      title: "Akibas Trip The Animation",
      year: 2017,
      genre: "Acción, Comedia, Sobrenatural, Ecchi",
      synopsis: "En el distrito de Akihabara, en Tokio, comienzan a aparecer unas misteriosas criaturas llamadas “Bugged Ones”, vampiros que se alimentan de la energía vital de las personas. Para derrotarlos, deben ser expuestos directamente a la luz solar… y la única manera de lograrlo es despojándolos de su ropa en plena calle. Tamotsu Denkigai, tras convertirse en uno de ellos, se une a un grupo que lucha por proteger Akiba mientras intenta mantener el equilibrio entre su nueva naturaleza y su vida cotidiana.",
      image: "img/akibas.jpg",
      basePrice: 20,
      estreno: false,
      seasons: [
        { season: 1, episodes: 13, gb: 2, price: 20 }
      ]
    },
    {
      title: "Another",
      year: 2012,
      genre: "Terror, Misterio, Psicológico, Sobrenatural, Drama",
      synopsis: "En 1972, una tragedia marcó a la clase 3-3 de la escuela Yomiyama Norte. Años después, Kouichi Sakakibara se transfiere a esa misma clase y pronto percibe un ambiente extraño y opresivo. Sus compañeros actúan como si ignoraran la existencia de Mei Misaki, una estudiante aparentemente invisible para todos. A medida que una serie de muertes brutales comienza a afectar a alumnos y familiares, Kouichi y Mei intentan descubrir el origen de una maldición que parece repetirse cada año.",
      image: "img/another.jpg",
      basePrice: 30,
      estreno: false,
      seasons: [
        { season: 1, episodes: 12, gb: 2.7, price: 30 }
      ]
    },
    {
      title: "Ao no Exorcist",
      year: 2011,
      genre: "Acción, Fantasía Oscura, Sobrenatural, Shonen",
      synopsis: "Rin Okumura es un adolescente problemático que descubre que en realidad es hijo de Satanás, quien planea usarlo como recipiente para invadir el mundo humano. Tras la muerte de su padre adoptivo, Rin decide convertirse en exorcista para enfrentarse a su propio destino. Junto a su hermano Yukio y otros estudiantes de la Academia True Cross, entrenará para combatir demonios mientras lucha contra la oscuridad que lleva dentro.",
      image: "img/aonoe.jpg",
      basePrice: 20,
      estreno: false,
      seasons: [
        { season: 1, episodes: 25, gb: 1.3, price: 20 }
      ]
    },
    {
      title: "Ao no Exorcist Kyoto Fujouou-hen",
      year: 2017,
      genre: "Acción, Fantasía Oscura, Sobrenatural, Shonen",
      synopsis: "Tras revelarse el origen demoníaco de Rin, la confianza dentro del grupo se ve fracturada. Cuando un poderoso demonio conocido como el Rey Impuro despierta en Kioto, los exorcistas deben viajar para enfrentarlo. En medio de tensiones internas y dudas sobre la lealtad de Rin, la batalla pondrá a prueba no solo su poder, sino también la fuerza de sus vínculos.",
      image: "img/aonokyoto.jpg",
      basePrice: 10,
      estreno: false,
      seasons: [
        { season: 1, episodes: 12, gb: 0.6, price: 10 }
      ]
    },
    {
      title: "Assassins Pride",
      year: 2019,
      genre: "Acción, Fantasía, Drama, Romance, Escolar",
      synopsis: "En un mundo donde la humanidad vive en ciudades aisladas para protegerse de criaturas salvajes, solo los nobles poseen la habilidad de manipular el maná. Melida Angel, hija de una familia noble, no ha demostrado ningún poder, lo que pone en duda su linaje. Kufa Vampir, un asesino profesional, es contratado para entrenarla… o eliminarla si demuestra ser inútil. Sin embargo, a medida que la entrena, surge un vínculo inesperado que desafía su misión original.",
      image: "img/assassins.jpg",
      basePrice: 20,
      estreno: false,
      seasons: [
        { season: 1, episodes: 12, gb: 1.9, price: 20 }
      ]
    },
    {
      title: "Avatar: La Leyenda de Aang",
      year: 2005,
      genre: "Aventura, Fantasía, Acción, Artes Marciales, Drama",
      synopsis: "En un mundo dividido en cuatro naciones —Agua, Tierra, Fuego y Aire— solo el Avatar puede dominar los cuatro elementos y mantener el equilibrio. Tras cien años congelado en un iceberg, Aang, el último maestro aire y actual Avatar, despierta en un mundo devastado por la guerra iniciada por la Nación del Fuego. Junto a Katara, Sokka y más adelante Toph, deberá dominar los elementos mientras aprende el peso de su responsabilidad y enfrenta al Señor del Fuego Ozai para restaurar la paz.",
      image: "img/avatar.jpg",
      basePrice: 100,
      estreno: false,
      seasons: [
        { season: 1, episodes: 20, gb: 3.4, price: 40 },
        { season: 2, episodes: 20, gb: 3.3, price: 40 },
        { season: 3, episodes: 21, gb: 3.4, price: 40 }
      ]
    }
  ],
  B: [
  {
    title: "Bakemonogatari",
    year: 2009,
    genre: "Supernatural, Misterio, Comedia, Romance, Psicologico",
    synopsis: "Koyomi Araragi, un estudiante de preparatoria, sobrevive a un encuentro con un vampiro y comienza a ayudar a chicas que sufren de fenómenos sobrenaturales llamados 'Oddities'. Con la ayuda de su amiga Hitagi Senjougahara y otros compañeros, Koyomi investiga y resuelve los misterios mientras enfrenta situaciones extrañas, cómicas y a veces peligrosas, descubriendo secretos sobre sí mismo y los demás.",
    image: "img/bakemonogatari.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { episodes: 15, gb: 0.9, price: 15 }
    ]
  },

  {
    title: "Benriya Saitou-san Isekai ni Iku",
    year: 2023,
    genre: "Isekai, Comedia, Fantasía, Aventuras",
    synopsis: "Saitou-san es un trabajador de mantenimiento que, tras un misterioso accidente, es transportado a un mundo de fantasía. Con sus habilidades cotidianas y conocimientos prácticos, se adapta rápidamente y ayuda a los habitantes locales, mientras enfrenta situaciones cómicas y absurdas que solo un trabajador del mundo real podría resolver. Una historia ligera y divertida sobre la vida en un nuevo mundo.",
    image: "img/benriya.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { episodes: 12, gb: 2.2, price: 20 }
    ]
  },

  {
    title: "Berserk",
    year: 1997,
    genre: "Acción, Fantasía Oscura, Drama, Horror, Aventura",
    synopsis: "Guts, un mercenario marcado por un destino cruel, busca venganza y libertad mientras enfrenta demonios, ejércitos y la propia oscuridad de su alma. Junto a Griffith y la Banda del Halcón, se ve envuelto en traiciones, batallas épicas y eventos sobrenaturales que lo transformarán para siempre. Una historia intensa sobre destino, poder y supervivencia en un mundo brutal y oscuro.",
    image: "img/berserk.jpg",
    basePrice: 50,
    estreno: false,
    seasons: [
      { episodes: 12, gb: 3.4, price: 20 },
      { episodes: 13, gb: 3.3, price: 20 },
      { episodes: 13, gb: 3.4, price: 10 }
    ]
  },

  {
    title: "Black Bullet",
    year: 2014,
    genre: "Acción, Ciencia Ficción, Post-apocalíptico, Misterio",
    synopsis: "Después de que un virus parasitario conocido como Gastrea devastara gran parte de la humanidad, los niños infectados poseen habilidades especiales y son reclutados como 'Promotores' para combatir a los Gastrea. Rentaro Satomi, un Promotor experimentado, protege a su compañera Enju mientras enfrentan monstruos y conspiraciones, luchando por la supervivencia de la humanidad en un mundo peligroso y desolado.",
    image: "img/blackbullet.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { episodes: 13, gb: 1.7, price: 20 }
    ]
  },

  {
    title: "Boku Dake Ga Inai Machi",
    year: 2016,
    genre: "Misterio, Suspenso, Sobrenatural, Thriller, Drama",
    synopsis: "Satoru Fujinuma posee la habilidad de regresar brevemente en el tiempo para prevenir accidentes y tragedias. Cuando su madre es asesinada injustamente, Satoru retrocede 18 años atrás y debe resolver un antiguo caso de secuestro que conecta con las muertes presentes. Una historia intensa sobre crimen, justicia y las consecuencias de los actos humanos.",
    image: "img/bokumachi.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { episodes: 12, gb: 1, price: 10 }
    ]
  },

  {
    title: "Boku no Hero Academia",
    year: 2016,
    genre: "Acción, Superpoderes, Escolar, Aventura, Shonen",
    synopsis: "En un mundo donde la mayoría de las personas posee superpoderes llamados 'Quirks', Izuku Midoriya nace sin ninguno. Sin embargo, tras un encuentro con su ídolo All Might, hereda su Quirk y entra en la academia de héroes U.A. junto a otros aspirantes. Juntos enfrentarán pruebas, villanos y desafíos mientras aprenden a ser los héroes del futuro en esta épica historia de superación y amistad.",
    image: "img/bnha.jpg",
    basePrice: 180,
    estreno: false,
    seasons: [
      { episodes: 13, gb: 1.7, price: 20 },
      { episodes: 24, gb: 4.1, price: 40 },
      { episodes: 24, gb: 4.0, price: 40 },
      { episodes: 25, gb: 4.1, price: 40 },
      { episodes: 25, gb: 4.0, price: 40 }
    ]
  }
]
,
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: []
};
