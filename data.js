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
 C: [
  {
    title: "Castlevania: Nocturne",
    year: 2023,
    genre: "Acción, Fantasía Oscura, Sobrenatural, Aventura",
    synopsis: "Ambientada durante la Revolución Francesa, la historia sigue a Richter Belmont, descendiente del legendario clan de cazadores de vampiros. Mientras Europa arde en conflictos políticos y sociales, una amenaza vampírica aún mayor surge en las sombras. Junto a aliados inesperados, Richter deberá enfrentar poderosas criaturas nocturnas y descubrir su verdadero potencial para impedir que el mundo caiga en la oscuridad absoluta.",
    image: "img/castlevania-nocturne.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 8, gb: 1.8, price: 20 },
      { season: 2, episodes: 8, gb: 1.7, price: 20 }
    ]
  },

  {
    title: "Chainsaw Man",
    year: 2022,
    genre: "Acción, Fantasía Oscura, Sobrenatural, Gore, Shonen",
    synopsis: "Denji es un joven endeudado que trabaja como cazador de demonios junto a su mascota Pochita, un demonio motosierra. Tras una traición brutal, Denji renace fusionado con Pochita, convirtiéndose en el híbrido conocido como Chainsaw Man. Reclutado por la misteriosa Makima, entra en una división especial de cazadores de demonios mientras lucha por sobrevivir en un mundo violento donde los deseos humanos pueden ser tan peligrosos como los propios demonios.",
    image: "img/chainsawman.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.9, price: 30 }
    ]
  }
],
D: [
  {
    title: "D.Gray-man",
    year: 2006,
    genre: "Acción, Aventura, Fantasía Oscura, Shonen, Sobrenatural",
    synopsis: "Allen Walker es un joven exorcista que posee un brazo maldito capaz de destruir Akumas, armas demoníacas creadas por el Conde del Milenio. Reclutado por la Orden Negra, Allen lucha junto a otros exorcistas para detener los planes del Conde y proteger a la humanidad de una guerra santa que amenaza con destruir el mundo.",
    image: "img/dgrayman.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 22, gb: 1.0, price: 15 }
    ]
  },

  {
    title: "Darling in the Franxx",
    year: 2018,
    genre: "Acción, Ciencia Ficción, Romance, Drama, Mecha",
    synopsis: "En un futuro postapocalíptico, la humanidad vive en ciudades móviles protegidas por pilotos adolescentes que controlan gigantescos mechas llamados Franxx. Hiro, un piloto considerado fracasado, encuentra una nueva oportunidad al conocer a Zero Two, una misteriosa chica con sangre Klaxosaurio. Juntos formarán una conexión profunda mientras enfrentan criaturas monstruosas y descubren la verdad detrás de su mundo.",
    image: "img/darling.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 2.9, price: 30 }
    ]
  },

  {
    title: "Date A Live",
    year: 2013,
    genre: "Acción, Comedia Romántica, Ciencia Ficción, Harem, Sobrenatural",
    synopsis: "Shido Itsuka descubre que misteriosas entidades llamadas Espíritus son responsables de devastadores terremotos espaciales. Sin embargo, la única forma de sellar sus poderes no es derrotarlas, sino hacer que se enamoren de él. Con la ayuda de su hermana y una organización secreta, Shido deberá conquistar los corazones de poderosas chicas mientras enfrenta amenazas sobrenaturales.",
    image: "img/datealive.jpg",
    basePrice: 50,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.6, price: 20 },
      { season: 2, episodes: 10, gb: 1.6, price: 20 },
      { season: 3, episodes: 12, gb: 1.6, price: 20 }
    ]
  },

  {
    title: "Desert Punk",
    year: 2004,
    genre: "Acción, Aventura, Ciencia Ficción, Comedia, Ecchi",
    synopsis: "En un Japón convertido en desierto tras un cataclismo global, Kanta Mizuno, conocido como Desert Punk, trabaja como mercenario sobreviviendo entre bandidos, traiciones y contratos peligrosos. Con un carácter arrogante y poco moral, se verá envuelto en conflictos que pondrán a prueba su ingenio y habilidades en un mundo donde la ley prácticamente no existe.",
    image: "img/desertpunk.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 4.0, price: 40 }
    ]
  },

  {
    title: "Domestic na Kanojo",
    year: 2019,
    genre: "Drama, Romance, Escolar, Psicológico",
    synopsis: "Natsuo Fujii está enamorado de su profesora Hina, pero en un intento por olvidar sus sentimientos, termina teniendo un encuentro con Rui, una chica desconocida. Poco después, su padre anuncia que se volverá a casar… y las nuevas integrantes de su familia resultan ser Hina y Rui. Un intenso drama romántico lleno de emociones, secretos y decisiones complicadas.",
    image: "img/domestic.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 20 }
    ]
  },

  {
    title: "Dororo",
    year: 2019,
    genre: "Acción, Aventura, Fantasía Oscura, Drama, Histórico",
    synopsis: "Un señor feudal sacrifica los órganos de su hijo recién nacido a 48 demonios para obtener poder. Milagrosamente, el niño sobrevive gracias a prótesis creadas por un médico. Años después, Hyakkimaru recorre Japón feudal acompañado por el joven ladrón Dororo, enfrentando demonios para recuperar cada parte de su cuerpo y descubrir su verdadera humanidad.",
    image: "img/dororo.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 3.0, price: 30 }
    ]
  },

  {
    title: "Dotto Koni-chan",
    year: 2000,
    genre: "Comedia, Parodia, Slice of Life",
    synopsis: "Koni-chan es una niña con una personalidad exagerada y completamente impredecible. A través de situaciones absurdas y parodias constantes, la serie presenta humor desenfrenado y caricaturesco que rompe con la lógica tradicional del anime, ofreciendo episodios llenos de energía y comedia sin filtros.",
    image: "img/konichan.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 1.6, price: 20 }
    ]
  },

  {
    title: "Dr. Stone",
    year: 2019,
    genre: "Ciencia Ficción, Aventura, Shonen, Supervivencia",
    synopsis: "Tras un misterioso fenómeno que petrifica a toda la humanidad durante miles de años, el prodigio científico Senku Ishigami despierta en un mundo primitivo. Decidido a restaurar la civilización mediante el poder de la ciencia, Senku comienza a reconstruir la tecnología desde cero, enfrentando desafíos naturales y humanos en su ambicioso plan para devolver el progreso al mundo.",
    image: "img/drstone.jpg",
    basePrice: 60,
    estreno: false,
    seasons: [
      { season: 1, episodes: 23, gb: 3.9, price: 40 },
      { season: 2, episodes: 10, gb: 2.2, price: 20 }
    ]
  },

  {
    title: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
    year: 2023,
    genre: "Acción, Fantasía, Aventura, Drama",
    synopsis: "Bell Cranel continúa su crecimiento como aventurero dentro del gigantesco calabozo de Orario. En esta nueva etapa, peligros más profundos y amenazas desconocidas emergen desde los niveles inferiores del Dungeon. La supervivencia será más difícil que nunca mientras Bell enfrenta pruebas que desafían tanto su fuerza como su determinación.",
    image: "img/danmachi4.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 2.4, price: 20 }
    ]
  },

  {
    title: "Dungeon Meshi",
    year: 2024,
    genre: "Fantasía, Aventura, Comedia, Cocina",
    synopsis: "Tras la derrota de su grupo en un calabozo, Laios decide regresar para rescatar a su hermana… pero sin dinero ni provisiones. La solución es simple: cocinar y comer los monstruos del dungeon. Acompañado por un peculiar grupo de aventureros, la serie mezcla exploración fantástica con recetas inesperadas y humor inteligente.",
    image: "img/dungeonmeshi.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 3.8, price: 40 }
    ]
  },

  {
    title: "Durarara",
    year: 2010,
    genre: "Acción, Misterio, Sobrenatural, Thriller, Drama",
    synopsis: "En el distrito de Ikebukuro, múltiples historias se entrelazan alrededor de pandillas, conspiraciones y una misteriosa motociclista sin cabeza conocida como la Black Rider. Mikado Ryuugamine llega a la ciudad buscando emoción, pero pronto queda atrapado en una red de secretos donde cada personaje oculta algo importante.",
    image: "img/durarara.jpg",
    basePrice: 50,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 1.6, price: 20 },
      { season: 2, episodes: 14, gb: 1.3, price: 15 },
      { season: 3, episodes: 13, gb: 1.1, price: 10 },
      { season: 4, episodes: 12, gb: 1.3, price: 15 }
    ]
  }
]
,
E: [
  {
    title: "Elfen Lied",
    year: 2004,
    genre: "Psicológico, Terror, Drama, Ciencia Ficción, Gore",
    synopsis: "Lucy es una Diclonius, una mutación humana con poderes telequinéticos mortales. Tras escapar de una instalación secreta donde era experimentada, sufre una lesión que divide su personalidad en dos: la violenta Lucy y la inocente Nyu. Mientras intenta adaptarse a la vida con dos jóvenes universitarios, su pasado sangriento y la persecución gubernamental la alcanzan, desencadenando una tragedia que explora el dolor, la discriminación y la naturaleza humana.",
    image: "img/elfenlied.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 14, gb: 1.3, price: 15 }
    ]
  },

  {
    title: "Eromanga-sensei",
    year: 2017,
    genre: "Comedia Romántica, Slice of Life, Escolar, Ecchi",
    synopsis: "Masamune Izumi es un joven novelista que descubre que su misteriosa ilustradora, conocida como 'Eromanga-sensei', es en realidad su hermana menor Sagiri, quien vive recluida en su habitación. Juntos deberán aprender a convivir mientras trabajan en novelas ligeras, enfrentando situaciones cómicas y románticas llenas de malentendidos.",
    image: "img/eromanga.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 14, gb: 2.4, price: 25 }
    ]
  },

  {
    title: "Evangelio (Español)",
    year: 1995,
    genre: "Acción, Ciencia Ficción, Drama, Psicológico, Mecha",
    synopsis: "En un mundo devastado por el Segundo Impacto, la organización NERV desarrolla gigantes biomecánicos llamados Evangelion para combatir a misteriosas entidades conocidas como Ángeles. Shinji Ikari es reclutado por su padre para pilotar la Unidad-01, enfrentando no solo batallas apocalípticas, sino también profundos conflictos emocionales y existenciales.",
    image: "img/evangelio.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 3.1, price: 3 }
    ]
  },

  {
    title: "Neon Genesis Evangelion",
    year: 1995,
    genre: "Acción, Ciencia Ficción, Drama, Psicológico, Mecha",
    synopsis: "Shinji Ikari es llamado a Tokio-3 por su distante padre para pilotar un Evangelion y defender a la humanidad de los Ángeles. Sin embargo, las batallas externas son solo una parte del conflicto, ya que cada piloto enfrenta traumas, soledad y crisis existenciales en una historia que redefinió el género mecha y marcó profundamente la industria del anime.",
    image: "img/evangelion.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 1.0, price: 15 }
    ]
  }
],
F: [
  {
    title: "Fight Ippatsu Juuden-chan",
    year: 2009,
    genre: "Comedia, Ecchi, Ciencia Ficción",
    synopsis: "Plug Cryostat es una chica proveniente de una dimensión paralela que se dedica a 'recargar' emocionalmente a personas deprimidas utilizando energía especial. En el mundo humano, se hace invisible para casi todos, excepto para un joven que puede verla y ayudarla en su misión. Una comedia cargada de situaciones absurdas y fanservice.",
    image: "img/juudenchan.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.0, price: 20 }
    ]
  },

  {
    title: "Fumetsu no Anata e",
    year: 2021,
    genre: "Drama, Fantasía, Sobrenatural, Aventura",
    synopsis: "Una entidad inmortal es enviada a la Tierra sin identidad ni emociones. Adoptando la forma de quienes conoce, comienza un viaje a través de la historia humana, experimentando amor, pérdida y dolor. A lo largo de su travesía, aprenderá el significado de la vida y lo que realmente significa ser humano.",
    image: "img/fumetsu.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 20, gb: 3.0, price: 30 }
    ]
  }
],
G: [
  {
    title: "Gleipnir",
    year: 2020,
    genre: "Acción, Misterio, Sobrenatural, Psicológico, Ecchi",
    synopsis: "Shuichi Kagaya es un estudiante que posee la extraña habilidad de transformarse en una criatura con forma de mascota gigante. Tras conocer a Claire, una chica decidida y manipuladora, ambos se involucran en un peligroso juego donde personas con habilidades sobrenaturales luchan por recolectar monedas que conceden deseos.",
    image: "img/gleipnir.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 2.1, price: 20 }
    ]
  },

  {
    title: "Goblin Slayer",
    year: 2018,
    genre: "Acción, Fantasía Oscura, Aventura, Drama",
    synopsis: "En un mundo dominado por aventureros y criaturas fantásticas, un guerrero conocido como Goblin Slayer dedica su vida exclusivamente a erradicar goblins, criaturas subestimadas pero extremadamente peligrosas. Acompañado por un grupo de aliados, enfrentará misiones cada vez más arriesgadas en una historia cruda y violenta.",
    image: "img/goblinslayer.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.2, price: 20 },
      { season: 2, episodes: 12, gb: 2.7, price: 25 }
    ]
  },

  {
    title: "Gotoubun no Hanayome",
    year: 2019,
    genre: "Comedia Romántica, Escolar, Harem",
    synopsis: "Fuutarou Uesugi es contratado como tutor de cinco hermanas gemelas con personalidades completamente distintas y pésimas calificaciones. Mientras intenta ayudarlas a mejorar académicamente, se desarrolla una historia romántica llena de situaciones cómicas, rivalidades y sentimientos crecientes.",
    image: "img/gotoubun.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.2, price: 20 },
      { season: 2, episodes: 12, gb: 1.6, price: 20 }
    ]
  },

  {
    title: "Grand Blue",
    year: 2018,
    genre: "Comedia, Slice of Life, Universitario",
    synopsis: "Iori Kitahara se muda a una ciudad costera para comenzar la universidad, esperando una vida tranquila junto al mar. Sin embargo, termina uniéndose a un excéntrico club de buceo donde las fiestas descontroladas y las situaciones absurdas son el pan de cada día. Una comedia explosiva llena de humor exagerado y momentos memorables.",
    image: "img/grandblue.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.2, price: 20 }
    ]
  }
],
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

