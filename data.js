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
H: [
  {
    title: "Hataraku Maou-sama",
    year: 2013,
    genre: "Comedia, Fantasía, Acción, Escolar",
    synopsis: "Satanás, el Rey Demonio, es derrotado por un héroe y transportado al mundo humano junto a su general Alciel. Sin poderes y con un gran sentido práctico, Satanás debe adaptarse a la vida moderna trabajando en un restaurante de comida rápida mientras intenta recuperar fuerzas y planear su regreso al mundo demoníaco. Paralelamente, enfrenta problemas cotidianos como lidiar con compañeros humanos y enemigos que lo siguen, todo mientras descubre el humor y la complejidad del mundo humano.",
    image: "img/hataraku.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.2, price: 15 },
      { season: 2, episodes: 10, gb: 1.1, price: 10 }
    ]
  },
  {
    title: "Hell Paradise",
    year: 2023,
    genre: "Acción, Sobrenatural, Horror",
    synopsis: "Un grupo de criminales con habilidades especiales es enviado a una isla misteriosa por el gobierno a cambio de su libertad. La isla está habitada por criaturas mortales y secretos antiguos que desafían la lógica y la moral. Cada criminal debe sobrevivir mientras enfrenta a monstruos y desentraña los secretos de la isla, enfrentándose a traiciones y dilemas éticos en su búsqueda por el elixir de la inmortalidad.",
    image: "img/hellparadise.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 2.2, price: 20 }
    ]
  },
  {
    title: "High School of the Dead",
    year: 2010,
    genre: "Acción, Horror, Ecchi",
    synopsis: "Un brote zombie convierte la ciudad en un caos absoluto. Takashi Komuro, junto a sus compañeros de escuela, lucha por sobrevivir mientras busca refugio y trata de mantener la cordura. Entre el miedo, la violencia y la desesperación, se ven obligados a tomar decisiones difíciles, forjar alianzas y enfrentar no solo a los muertos vivientes, sino también a la naturaleza humana en situaciones extremas.",
    image: "img/hsotd.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 0.7, price: 10 }
    ]
  },
  {
    title: "Horimiya",
    year: 2021,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Kyoko Hori es una estudiante popular y responsable, mientras que Izumi Miyamura es un chico tímido con tatuajes y piercings escondidos. Ambos descubren sus lados ocultos y comienzan una amistad que se transforma en romance. La serie explora la vida diaria de los estudiantes, sus relaciones con amigos y familia, y cómo las apariencias no reflejan lo que realmente somos, combinando momentos tiernos con comedia y desarrollo emocional profundo.",
    image: "img/horimiya.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 2.0, price: 20 }
    ]
  },
],

I: [
  {
    title: "Ichiban Ushiro no Daimaou",
    year: 2010,
    genre: "Acción, Comedia, Fantasía",
    synopsis: "Akuto Sai entra a la Academia Constant Magical para cumplir su sueño de convertirse en un gran mago, pero un oráculo predice que se convertirá en el Rey Demonio. Rodeado de compañeros que lo temen o desconfían, Akuto debe lidiar con malentendidos, enemigos y situaciones cómicas mientras lucha por demostrar que no es maligno, al mismo tiempo que explora sus poderes y se enfrenta a desafíos peligrosos.",
    image: "img/ichiban.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.0, price: 10 }
    ]
  },
  {
    title: "Ichigo 100%",
    year: 2005,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Junpei Manaka sueña con encontrar a la misteriosa chica que vio bajo la lluvia. Sus encuentros lo llevan a situaciones románticas y cómicas con varias chicas, mientras descubre los sentimientos del amor adolescente y las complicaciones de las relaciones escolares.",
    image: "img/ichigo100.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 0.7, price: 10 }
    ]
  },
  {
    title: "Ijiranaide, Nagatoro-san",
    year: 2021,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Naoto Hachioji es un estudiante tímido que es constantemente molestado por Nagatoro, una chica traviesa de su clase. A través de las bromas y el acoso juguetón, ambos desarrollan una relación compleja que mezcla humor, romance y crecimiento personal, mostrando cómo los pequeños actos y la convivencia pueden cambiar la percepción que tenemos de los demás.",
    image: "img/nagatoro.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.0, price: 15 }
    ]
  },
  {
    title: "Isekai Maou to Shoukan Shoujo no Dorei Majutsu",
    year: 2018,
    genre: "Comedia, Fantasía, Acción, Ecchi",
    synopsis: "El Rey Demonio y una heroína son invocados a un mundo alterno. Mientras intentan adaptarse, surgen conflictos entre ambos, situaciones cómicas y batallas con otros invocadores. La historia combina humor, acción y fanservice, mientras los protagonistas exploran la política, la magia y la dinámica de poder en este mundo alternativo.",
    image: "img/isekaimaou.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 20 },
      { season: 2, episodes: 9, gb: 1.4, price: 15 }
    ]
  },
  {
    title: "ISEKAI MEIKYUU DE HAREM WO",
    year: 2022,
    genre: "Aventura, Fantasía, Ecchi",
    synopsis: "Un chico es transportado a un laberinto de fantasía lleno de monstruos y desafíos. Debe enfrentarse a peligros mortales y formar alianzas con personajes femeninos para sobrevivir, explorando la estrategia y la comedia dentro de este mundo de fantasía.",
    image: "img/isekaimeikyu.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 2.6, price: 20 }
    ]
  },
  {
    title: "Isekai Quartet",
    year: 2019,
    genre: "Comedia, Fantasía, Crossover",
    synopsis: "Los personajes de diferentes series de Isekai se encuentran en un mundo escolar cómico donde interactúan y viven situaciones absurdas. La serie combina referencias a múltiples mundos, fanservice y humor ligero, ofreciendo momentos divertidos para los fanáticos de las franquicias originales.",
    image: "img/isekaiquartet.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 0.8, price: 10 }
    ]
  },
  {
    title: "Isekai Suicide Squad",
    year: 2023,
    genre: "Acción, Fantasía, Ecchi",
    synopsis: "Un grupo de individuos con habilidades especiales es enviado a un mundo alterno para cumplir misiones extremadamente peligrosas. Mientras luchan contra monstruos y enfrentan traiciones, los personajes descubren secretos de este nuevo mundo y deben aprender a cooperar para sobrevivir, mezclando acción intensa con comedia y elementos fanservice.",
    image: "img/isekaisuicidesquad.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 10, gb: 3.1, price: 20 }
    ]
  }
],
J: [
  {
    title: "Jujutsu Kaisen",
    year: 2020,
    genre: "Acción, Sobrenatural, Shonen",
    synopsis: "Yuji Itadori, un estudiante de secundaria, ingiere un objeto maldito que lo convierte en el huésped de un poderoso espíritu maligno. Para proteger a sus amigos y al mundo, se une a la escuela de hechicería Jujutsu donde entrena y combate maldiciones junto a otros estudiantes. La serie combina intensas batallas, personajes carismáticos y un mundo mágico lleno de misterios y conflictos éticos.",
    image: "img/jujutsukaisen.jpg",
    basePrice: 80,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 3.2, price: 30 },
      { season: 2, episodes: 23, gb: 5.2, price: 50 }
    ]
  }
],

K: [
  {
    title: "Kage no Jitsuryokusha ni Naritakute",
    year: 2022,
    genre: "Comedia, Fantasía, Acción",
    synopsis: "Un joven mago busca convertirse en el asesino más poderoso desde las sombras. Para lograrlo, se infiltra en la academia de magia y combate, enfrentando enemigos y formando alianzas estratégicas mientras mantiene su identidad secreta. La serie combina humor, acción y elementos de estrategia mientras el protagonista desarrolla sus habilidades y maneja situaciones inesperadas.",
    image: "img/kagejitsuryoku.jpg",
    basePrice: 50,
    estreno: false,
    seasons: [
      { season: 1, episodes: 21, gb: 3.0, price: 30 },
      { season: 2, episodes: 12, gb: 2.6, price: 20 }
    ]
  },
    {
    title: "Kaguya-sama wa Kokurasetai Tensai-tachi no Renai Zunousen",
    year: 2019,
    genre: "Romance, Comedia, Escolar, Psicología",
    synopsis: "Kaguya Shinomiya y Miyuki Shirogane son miembros del consejo estudiantil que compiten para que el otro confiese primero sus sentimientos. La serie combina estrategias románticas, humor psicológico y momentos tiernos mientras los protagonistas intentan superar sus orgullos y desentrañar los sentimientos del otro, creando situaciones hilarantes y románticas.",
    image: "img/kaguyasama.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.2, price: 20 },
      { season: 2, episodes: 12, gb: 2.1, price: 20 }
    ]
  },
  {
    title: "Kaifuku Jutsushi no Yarinaoshi",
    year: 2021,
    genre: "Fantasía, Ecchi, Acción",
    synopsis: "Un aventurero con la habilidad de repetir su vida para corregir errores vuelve a un mundo de magia para vengarse y mejorar su destino. La historia mezcla comedia, acción y fanservice mientras el protagonista explora las consecuencias de sus decisiones y su relación con los demás personajes del mundo mágico.",
    image: "img/kaifuku.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.2, price: 20 }
    ]
  },
  {
    title: "Kaijuu 8 Gou",
    year: 2023,
    genre: "Acción, Ciencia Ficción, Aventura",
    synopsis: "La humanidad enfrenta amenazas constantes de gigantescos monstruos llamados Kaiju. Kafka Hibino, quien trabaja en el ejército de exterminio de Kaijus, se transforma accidentalmente en uno de ellos mientras conserva su conciencia humana. La historia sigue su lucha por controlar sus nuevas habilidades, proteger a los humanos y descubrir los secretos detrás de los Kaijus.",
    image: "img/kaijuu8.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 3.8, price: 30 }
    ]
  },
  {
    title: "Kakegurui",
    year: 2017,
    genre: "Drama, Comedia, Escolar, Juegos de Azar",
    synopsis: "En la prestigiosa Academia Hyakkaou, los estudiantes son evaluados por sus habilidades en apuestas y juegos de azar. Yumeko Jabami, una chica nueva, sacude la escuela con su enfoque arriesgado y su obsesión por el juego, enfrentándose a los estudiantes más poderosos y exponiendo secretos ocultos. La serie combina tensión, psicología y apuestas extremas con un toque de estilo y comedia.",
    image: "img/kakegurui.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 },
      { season: 2, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Kanojo mo Kanojo",
    year: 2021,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Naoya y Saki son pareja, pero Naoya comienza a salir también con Nagisa después de que ella confiesa sus sentimientos. La historia sigue los enredos románticos, la rivalidad y el humor en esta inusual relación amorosa, explorando cómo los personajes manejan la honestidad, los celos y la convivencia.",
    image: "img/kanomokanojo.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 20 }
    ]
  },
  {
    title: "Kanojo, Okarishimasu",
    year: 2020,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Kazuya Kinoshita decide alquilar a una novia para aparentar tener pareja y mejorar su imagen. A medida que interactúa con Chizuru Mizuhara y otras chicas, surgen situaciones cómicas, románticas y malentendidos que exploran la vida amorosa de los jóvenes adultos modernos.",
    image: "img/kanokari.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 20 },
      { season: 2, episodes: 11, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Kimetsu no Yaiba",
    year: 2019,
    genre: "Acción, Aventura, Fantasía, Sobrenatural",
    synopsis: "Tanjiro Kamado busca vengar a su familia asesinada por demonios y salvar a su hermana Nezuko, quien fue transformada en demonio. A lo largo de su viaje, Tanjiro se une a la organización de cazadores de demonios y enfrenta enemigos poderosos, descubriendo secretos sobre los demonios y su propio potencial. La serie combina acción intensa, desarrollo de personajes y una narrativa épica llena de emociones.",
    image: "img/kimetsu.jpg",
    basePrice: 100,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 4.6, price: 45 },
      { season: 2, episodes: 7, gb: 1.1, price: 10 },
      { season: 3, episodes: 11, gb: 2.1, price: 20 },
      { season: 4, episodes: 11, gb: 2.2, price: 20 }
    ]
  },
  {
    title: "Kinsou No Vermeil Gakeppuchi Majutsushi Wa Saikyou No Yakusai",
    year: 2023,
    genre: "Fantasía, Magia, Comedia",
    synopsis: "El estudiante alto y mediocre Alto, accidentalmente despierta a Vermeil, un poderoso espíritu demoníaco. Juntos, exploran la magia y enfrentan desafíos mientras desarrollan una relación única llena de humor, tensión y momentos mágicos.",
    image: "img/kinsou.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 1.9, price: 20 }
    ]
  },
  {
    title: "Kiseijuu Sei no Kakuritsu",
    year: 2014,
    genre: "Acción, Ciencia Ficción, Horror, Psicológico",
    synopsis: "La Tierra es invadida por parásitos que se apoderan de los cuerpos humanos. Shinichi Izumi logra resistirse a la posesión completa y se fusiona con un parásito llamado Migi. La historia sigue su lucha por mantener su humanidad mientras combate otros parásitos y enfrenta dilemas morales, mezclando horror, acción y suspenso psicológico.",
    image: "img/kiseijuu.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 2.3, price: 25 }
    ]
  },
  {
    title: "KonoSuba Kono",
    year: 2016,
    genre: "Comedia, Fantasía, Aventura",
    synopsis: "Kazuma Satou muere y es enviado a un mundo de fantasía, donde se une a un grupo de aventureros ineficientes y cómicos, incluyendo a la explosiva Aqua y a la maga Megumin. La serie mezcla comedia absurda, parodias de clichés de RPG y fantasía mientras los personajes enfrentan problemas ridículos y situaciones hilarantes.",
    image: "img/konosuba.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 2.5, price: 20 }
    ]
  },
  {
    title: "Koutetsujou No Kabaneri + OVA",
    year: 2016,
    genre: "Acción, Steampunk, Sobrenatural",
    synopsis: "En un mundo devastado por los Kabane, los sobrevivientes viajan en trenes fortificados mientras luchan por sobrevivir. La historia sigue la resistencia humana, las estrategias para combatir a los enemigos y el vínculo entre los personajes, incluyendo episodios especiales OVA que profundizan en la historia y el pasado de algunos protagonistas.",
    image: "img/koutetsujou.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.6, price: 25 }
    ]
  },
  {
    title: "Kuro no Shoukanshi",
    year: 2022,
    genre: "Acción, Fantasía, Aventura",
    synopsis: "Un joven invocador poderoso renace en otro mundo con habilidades extremas. Debe enfrentarse a enemigos, explorar mazmorras y descubrir secretos mientras utiliza sus poderes de invocación de manera estratégica. La serie combina acción intensa, estrategia y aventura con elementos de magia.",
    image: "img/kuroshoukanshi.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 10, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Kuusen Madoushi Kouhosei no Kyoukan",
    year: 2015,
    genre: "Acción, Fantasía, Escolar",
    synopsis: "En una academia de magos, los estudiantes aprenden a combatir criaturas mágicas y enfrentan desafíos personales. La serie mezcla comedia, acción y desarrollo de personajes mientras los protagonistas descubren su potencial mágico y la importancia del trabajo en equipo.",
    image: "img/kuusen.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.0, price: 10 }
    ]
  },
  {
    title: "Kyoukai no Kanata",
    year: 2013,
    genre: "Acción, Fantasía, Romance",
    synopsis: "Mirai Kuriyama, una chica con habilidades de manipulación de sangre, lucha contra espíritus que amenazan la ciudad. Junto a Akihito Kanbara, quien posee poderes especiales, exploran la relación entre humanos y criaturas sobrenaturales, enfrentando conflictos personales y combates mágicos que combinan acción, drama y romance.",
    image: "img/kyoukai.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.2, price: 10 }
    ]
  }
],

L: [],
M: [
  {
    title: "Made in Abyss",
    year: 2017,
    genre: "Aventura, Fantasía, Misterio, Drama",
    synopsis: "Riko, una joven exploradora, desciende al Abismo, un enorme y misterioso pozo lleno de criaturas y reliquias antiguas, en busca de su madre. Acompañada por Reg, un niño robot con habilidades especiales, enfrentará peligros mortales, descubrirá secretos antiguos y experimentará emociones profundas mientras explora los niveles más oscuros y desconocidos del Abismo.",
    image: "img/madeinabyss.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Mamahaha No Tsurego Ga Motokano Datta",
    year: 2022,
    genre: "Comedia, Romance, Escolar",
    synopsis: "La vida de un estudiante se complica cuando su madrastra resulta ser la exnovia de su padre. Entre malentendidos, situaciones cómicas y momentos románticos, la serie explora relaciones inusuales, celos y la interacción entre personajes con vínculos inesperados, generando humor y drama ligero.",
    image: "img/mamahaha.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 1.3, price: 15 }
    ]
  },
  {
    title: "Maou Gakuin no Futekigousha",
    year: 2020,
    genre: "Acción, Fantasía, Magia",
    synopsis: "Anos Voldigoad, el Rey Demonio, reencarna 2000 años después y descubre que el mundo ya no cree en su linaje ni reconoce su poder. Para reclamar su posición y proteger a sus aliados, Anos debe demostrar su fuerza mientras enfrenta conspiraciones, enemigos poderosos y retos mágicos en un mundo que ha olvidado su legado.",
    image: "img/maougakuin.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.9, price: 20 }
    ]
  },
  {
    title: "Mars Red",
    year: 2021,
    genre: "Acción, Sobrenatural, Vampiros, Drama Histórico",
    synopsis: "En 1923, los vampiros comienzan a aparecer en Japón, provocando caos y miedo. La organización especial Code Zero recluta a miembros humanos y vampiros para controlar la situación. La historia combina política, intriga, drama y batallas sobrenaturales mientras los personajes lidian con conflictos internos y amenazas externas.",
    image: "img/marsred.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.3, price: 15 }
    ]
  },
  {
    title: "Masou Gakuen HxH",
    year: 2016,
    genre: "Acción, Ecchi, Fantasía, Romance",
    synopsis: "Ayanami se une a una academia especial donde los estudiantes combaten enemigos usando mechas fusionados con habilidades especiales que requieren energía erótica. Entre combates, humor y romance, se desarrollan relaciones complicadas y situaciones absurdas que combinan acción y fanservice.",
    image: "img/masougakuen.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.5, price: 15 }
    ]
  },
  {
    title: "Mob Psycho 100",
    year: 2016,
    genre: "Acción, Comedia, Sobrenatural",
    synopsis: "Shigeo 'Mob' Kageyama es un adolescente con increíbles poderes psíquicos, pero trata de vivir una vida normal. Junto a su mentor Reigen y sus compañeros, Mob enfrenta espíritus malignos y desafíos personales, aprendiendo a controlar sus habilidades mientras crece emocionalmente. La serie combina acción espectacular con comedia y momentos conmovedores.",
    image: "img/mobpsycho.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 },
      { season: 2, episodes: 13, gb: 1.8, price: 15 }
    ]
  },
  {
    title: "Momentary Lily",
    year: 2021,
    genre: "Romance, Drama, Escolar",
    synopsis: "La historia sigue a un grupo de estudiantes cuyos sentimientos y relaciones se entrelazan a través de experiencias de amor, desengaño y crecimiento personal. La narrativa destaca la belleza efímera de la juventud y la fragilidad de las relaciones, explorando emociones profundas y momentos sentimentales con gran detalle.",
    image: "img/momentarylily.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 14, gb: 2.5, price: 25 }
    ]
  },
  {
    title: "Monster Musume no Oishasan",
    year: 2020,
    genre: "Comedia, Fantasía, Ecchi",
    synopsis: "La historia se centra en un veterinario que cuida a criaturas monstruosas humanoides. Entre situaciones cómicas, malentendidos y momentos ecchi, el protagonista ayuda a estas criaturas mientras desarrolla vínculos inusuales, mezclando humor y elementos fantásticos de manera ligera y entretenida.",
    image: "img/monsterom.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Munou na Nana",
    year: 2020,
    genre: "Misterio, Acción, Psicológico, Suspense",
    synopsis: "Nana es una chica aparentemente inútil enviada a una escuela especial donde estudiantes con habilidades extraordinarias deben asesinarse entre sí. A través de estrategias, engaños y confrontaciones, la historia explora traiciones, secretos y la lucha por sobrevivir en un entorno peligroso lleno de suspense y tensión psicológica.",
    image: "img/munou.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.8, price: 15 }
    ]
  },
  {
    title: "Mushoku Tensei- Isekai Ittara Honki Dasu",
    year: 2021,
    genre: "Fantasía, Aventura, Isekai, Magia",
    synopsis: "Un hombre sin rumbo reencarna en un mundo de fantasía con recuerdos de su vida anterior. Decide vivir su segunda oportunidad plenamente, desarrollando habilidades mágicas, explorando un mundo peligroso y formando relaciones profundas. La historia combina crecimiento personal, aventuras épicas y elementos de magia en un mundo isekai detallado.",
    image: "img/mushokutensei.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 1.6, price: 15 },
      { season: 2, episodes: 12, gb: 1.8, price: 15 }
    ]
  }
],
N: [
  {
    title: "Nanatsu no Taisai",
    year: 2014,
    genre: "Acción, Aventura, Fantasía, Magia",
    synopsis: "En el reino de Britannia, la princesa Elizabeth busca a los legendarios Siete Pecados Capitales, un grupo de caballeros acusados injustamente de traición. Liderados por Meliodas, cada miembro posee habilidades extraordinarias y un pasado oscuro. A lo largo de la historia enfrentan a los Caballeros Sagrados, demonios ancestrales y amenazas que ponen en riesgo el equilibrio del mundo, combinando intensas batallas, drama y lazos de amistad.",
    image: "img/nanatsu.jpg",
    basePrice: 120,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 4.9, price: 50 },
      { season: 3, episodes: 18, gb: 3.3, price: 30 },
      { season: 4, episodes: 24, gb: 4.1, price: 40 }
    ]
  },
  {
    title: "Nande Koko ni Sensei ga",
    year: 2019,
    genre: "Comedia, Ecchi, Romance",
    synopsis: "Un estudiante común termina constantemente en situaciones incómodas y comprometedoras con su atractiva profesora. Entre malentendidos, encuentros accidentales y momentos subidos de tono, la serie desarrolla una comedia ligera con enfoque romántico y escenas picantes que generan situaciones absurdas.",
    image: "img/nandekoko.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.1, price: 10 }
    ]
  },
  {
    title: "Naruto",
    year: 2002,
    genre: "Acción, Aventura, Artes Marciales, Shonen",
    synopsis: "Naruto Uzumaki es un ninja rechazado por su aldea debido al zorro demonio sellado en su interior. Su sueño es convertirse en Hokage y ganar el reconocimiento de todos. A lo largo de su viaje, forma lazos con Sasuke y Sakura, enfrenta organizaciones criminales como Akatsuki y participa en guerras ninja que cambian el destino del mundo shinobi.",
    image: "img/naruto.jpg",
    basePrice: 680,
    estreno: false,
    seasons: [
      { season: 1, episodes: 220, gb: 13.1, price: 130 },
      { season: 2, episodes: 500, gb: 55.2, price: 550 }
    ]
  },
  {
    title: "Nier Automata v1.1",
    year: 2023,
    genre: "Acción, Ciencia Ficción, Drama, Postapocalíptico",
    synopsis: "En un futuro donde la humanidad fue expulsada de la Tierra por máquinas invasoras, androides creados por humanos luchan para recuperar el planeta. La historia sigue a 2B, 9S y A2 mientras descubren secretos ocultos sobre la guerra, la existencia y el significado de la vida, combinando acción intensa con un trasfondo filosófico profundo.",
    image: "img/nier.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 0.8, price: 10 }
    ]
  },
  {
    title: "Nisemonogatari",
    year: 2012,
    genre: "Sobrenatural, Misterio, Comedia, Romance",
    synopsis: "Koyomi Araragi continúa ayudando a chicas afectadas por fenómenos sobrenaturales. En esta entrega, la historia se centra en sus hermanas y en la aparición de estafadores que explotan lo paranormal. La narrativa destaca por sus diálogos extensos, desarrollo psicológico y una mezcla única de humor y tensión.",
    image: "img/nisemonogatari.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 0.9, price: 10 }
    ]
  },
  {
    title: "No Game No Life",
    year: 2014,
    genre: "Fantasía, Isekai, Comedia, Estrategia",
    synopsis: "Los hermanos Sora y Shiro, genios invictos en videojuegos, son transportados a un mundo donde todo se decide mediante juegos. Allí deberán derrotar a diferentes razas y desafiar a entidades divinas usando inteligencia y estrategia para conquistar el mundo sin recurrir a la violencia directa.",
    image: "img/nogamenolife.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.1, price: 10 }
    ]
  },
  {
    title: "Noragami",
    year: 2014,
    genre: "Acción, Sobrenatural, Comedia, Drama",
    synopsis: "Yato es un dios menor que sueña con tener millones de seguidores, pero apenas sobrevive realizando trabajos pequeños por cinco yenes. Tras salvar a Hiyori, una estudiante que queda atrapada entre el mundo humano y espiritual, ambos se involucran en conflictos con espíritus malignos y dioses poderosos mientras Yato busca reconocimiento.",
    image: "img/noragami.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.6, price: 15 },
      { season: 2, episodes: 12, gb: 1.4, price: 15 }
    ]
  },
  {
    title: "Nurarihyon no Mago",
    year: 2010,
    genre: "Acción, Sobrenatural, Demonios",
    synopsis: "Rikuo Nura es descendiente de un poderoso clan de yokais, pero desea vivir como humano. Sin embargo, cuando fuerzas oscuras amenazan su entorno, debe aceptar su herencia demoníaca y liderar a su clan en intensas batallas contra enemigos sobrenaturales.",
    image: "img/nurarihyon.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 3.1, price: 30 }
    ]
  },
  {
    title: "Nurarihyon no Mago Sennen Makyou",
    year: 2011,
    genre: "Acción, Sobrenatural, Demonios",
    synopsis: "Continuación directa de la historia de Rikuo Nura, donde el joven líder del clan Nura enfrenta enemigos aún más poderosos y conspiraciones que amenazan la estabilidad del mundo yokai. La serie profundiza en su evolución como líder y en la lucha por mantener el equilibrio entre humanos y demonios.",
    image: "img/nurarihyon2.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 2.5, price: 25 }
    ]
  }
],

O: [
  {
    title: "Ore wa Seikan Kokka no Akutoku Ryoushu",
    year: 2023,
    genre: "Ciencia Ficción, Isekai, Acción",
    synopsis: "Un hombre renace en un imperio galáctico decidido a convertirse en un gobernante despiadado para evitar traiciones como en su vida pasada. Sin embargo, sus acciones terminan beneficiando a su pueblo más de lo esperado. Entre batallas espaciales, política imperial y estrategias militares, la historia combina humor y ciencia ficción.",
    image: "img/orewaseikan.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 3.2, price: 20 }
    ]
  },
  {
    title: "Overlord",
    year: 2015,
    genre: "Fantasía, Isekai, Acción, Oscuro",
    synopsis: "Suzuki Satoru queda atrapado en un videojuego de realidad virtual como su avatar esquelético, Momonga. Decidido a dominar el nuevo mundo, adopta el nombre Ainz Ooal Gown y lidera a sus poderosos subordinados mientras explora territorios desconocidos, manipula reinos y construye un imperio bajo su control absoluto.",
    image: "img/overlord.jpg",
    basePrice: 65,
    estreno: false,
    seasons: [
      { season: 1, episodes: 21, gb: 1.8, price: 15 },
      { season: 2, episodes: 13, gb: 2.8, price: 25 },
      { season: 3, episodes: 13, gb: 2.2, price: 25 }
    ]
  }
],
P: [
  {
    title: "Plastic Memories",
    year: 2015,
    genre: "Drama, Ciencia Ficción, Romance, Slice of Life",
    synopsis: "En un futuro cercano, los androides llamados Giftia conviven con los humanos, pero tienen una vida útil limitada. Tsukasa Mizugaki comienza a trabajar en el departamento encargado de recuperar Giftias antes de que pierdan sus recuerdos. Allí conoce a Isla, una Giftia especial con quien desarrolla un vínculo profundo mientras ambos enfrentan la inevitabilidad del tiempo y la despedida.",
    image: "img/plasticmemories.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.2, price: 10 }
    ]
  },
  {
    title: "Pokemon",
    year: 1997,
    genre: "Aventura, Fantasía, Acción, Infantil",
    synopsis: "Ash Ketchum inicia su viaje para convertirse en Maestro Pokémon junto a su inseparable Pikachu. A lo largo de sus aventuras recorre distintas regiones, captura nuevas criaturas y enfrenta líderes de gimnasio mientras compite en ligas oficiales. La serie destaca la amistad, el crecimiento personal y la emoción de los combates Pokémon.",
    image: "img/pokemon.jpg",
    basePrice: 55,
    estreno: false,
    seasons: [
      { season: 1, episodes: 81, gb: 3.8, price: 35 },
      { season: 2, episodes: 36, gb: 1.9, price: 20 }
    ]
  },
  {
    title: "Psycho-Pass",
    year: 2012,
    genre: "Acción, Ciencia Ficción, Psicológico, Thriller",
    synopsis: "En una sociedad futurista controlada por el sistema Sibyl, la probabilidad de que una persona cometa un crimen puede medirse antes de que ocurra. La inspectora Akane Tsunemori y el ejecutor Shinya Kogami investigan crímenes complejos mientras cuestionan la moralidad de un sistema que decide el destino de los ciudadanos.",
    image: "img/psychopass.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 23, gb: 2.1, price: 20 }
    ]
  },
  {
    title: "Pumpkin Scissors",
    year: 2006,
    genre: "Acción, Militar, Drama",
    synopsis: "Tras una devastadora guerra, el Imperio lucha por reconstruirse mientras la unidad Pumpkin Scissors se encarga de ayudar a las víctimas y combatir la corrupción interna. La historia sigue a la teniente Alice y al misterioso soldado Randel Oland, explorando traumas de guerra, conspiraciones militares y conflictos políticos.",
    image: "img/pumpkinscissors.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 1.7, price: 20 }
    ]
  }
],

R: [
  {
    title: "RE MONSTER",
    year: 2024,
    genre: "Acción, Fantasía, Isekai, Aventura",
    synopsis: "Tras morir, un hombre reencarna como un goblin en un mundo de fantasía. Conservando sus recuerdos y obteniendo habilidades al devorar a sus enemigos, evoluciona rápidamente hasta convertirse en una poderosa amenaza. La serie combina supervivencia, estrategia y evolución constante en un mundo lleno de criaturas y conflictos.",
    image: "img/remonster.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.7, price: 20 }
    ]
  },
  {
    title: "Re Zero Kara Hajimeru Isekai Seikatsu",
    year: 2016,
    genre: "Fantasía, Isekai, Drama, Psicológico",
    synopsis: "Subaru Natsuki es transportado a un mundo de fantasía donde descubre que posee la habilidad de regresar de la muerte. Sin embargo, cada reinicio trae consigo dolor y traumas. Mientras intenta proteger a Emilia y sus amigos, Subaru enfrenta enemigos formidables y situaciones desesperadas que ponen a prueba su fortaleza mental.",
    image: "img/rezero.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 26, gb: 6.5, price: 40 }
    ]
  },
  {
    title: "Reikenzan Eichi e no Shikaku",
    year: 2016,
    genre: "Acción, Fantasía, Artes Marciales, Aventura",
    synopsis: "En un mundo donde las sectas entrenan guerreros espirituales, Ouryuu debe superar pruebas exigentes para ingresar a la prestigiosa Secta Reikenzan. Con entrenamiento riguroso, poderes místicos y rivalidades intensas, la historia mezcla humor con combates y desarrollo de habilidades sobrenaturales.",
    image: "img/reikenzan.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.5, price: 15 }
    ]
  },
  {
    title: "Rokka no Yuusha",
    year: 2015,
    genre: "Acción, Fantasía, Misterio",
    synopsis: "Cada generación, seis héroes son elegidos para derrotar al Rey Demonio. Sin embargo, cuando se reúnen, aparecen siete, lo que desata sospechas de traición. Entre batallas y tensión psicológica, el grupo intenta descubrir al impostor mientras enfrenta peligros sobrenaturales.",
    image: "img/rokkayuusha.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.1, price: 10 }
    ]
  },
  {
    title: "Rozen Maiden",
    year: 2004,
    genre: "Sobrenatural, Drama, Misterio",
    synopsis: "Jun Sakurada recibe una misteriosa muñeca llamada Shinku, una de las Rozen Maiden, creadas para competir en un juego mortal que determinará cuál se convertirá en la doncella perfecta. La serie combina fantasía oscura, conflictos emocionales y batallas entre muñecas con voluntades propias.",
    image: "img/rozenmaiden.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 1.2, price: 10 }
    ]
  }
],
S: [
  {
    title: "Sacred Seven",
    year: 2011,
    genre: "Acción, Ciencia Ficción, Escolar",
    synopsis: "Alma Tandouji es un joven con un poder especial capaz de materializar cristales sagrados para combatir monstruos conocidos como Dark Stones. Cuando la misteriosa Ruri Aiba le ofrece ayuda para controlar su poder, Alma deberá enfrentarse a amenazas cada vez mayores mientras lucha contra su propio pasado.",
    image: "img/sacredseven.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.0, price: 10 }
    ]
  },
  {
    title: "Saihate no Paladin",
    year: 2021,
    genre: "Fantasía, Aventura, Isekai, Drama",
    synopsis: "Un niño reencarna en un mundo de fantasía y es criado por tres no-muertos que le enseñan valores, magia y combate. Al crecer, emprende un viaje para descubrir su propósito, enfrentándose a dioses, criaturas oscuras y desafíos que pondrán a prueba su fe y determinación.",
    image: "img/paladin.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 9, gb: 1.2, price: 10 }
    ]
  },
  {
    title: "Saijaku Muhai no Bahamut",
    year: 2016,
    genre: "Acción, Fantasía, Romance, Ecchi",
    synopsis: "Lux, un antiguo príncipe caído, ingresa a una academia exclusiva para pilotar Drag-Rides, armaduras mecánicas utilizadas en combate. Rodeado de talentosas guerreras y envuelto en conspiraciones políticas, deberá demostrar su fuerza mientras descubre secretos del antiguo imperio.",
    image: "img/bahamut.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.4, price: 15 }
    ]
  },
  {
    title: "Satsuriku no Tenshi",
    year: 2018,
    genre: "Terror, Psicológico, Misterio",
    synopsis: "Rachel despierta en un edificio abandonado sin recuerdos claros y conoce a Zack, un asesino en serie. Ambos forman un extraño pacto para escapar del lugar, enfrentándose a perturbadores personajes en cada nivel. La historia combina horror psicológico con drama emocional.",
    image: "img/angelsdeath.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 16, gb: 3.2, price: 30 }
    ]
  },
  {
    title: "Scott Pilgrim da El Salto",
    year: 2023,
    genre: "Acción, Romance, Comedia",
    synopsis: "Scott Pilgrim debe enfrentarse a los siete malvados exnovios de Ramona Flowers para poder salir con ella. Esta versión animada reinventa la historia con un estilo visual dinámico, humor irreverente y combates exagerados llenos de energía.",
    image: "img/scottpilgrim.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 8, gb: 1.6, price: 10 }
    ]
  },
  {
    title: "Seirei Gensouki",
    year: 2021,
    genre: "Isekai, Fantasía, Acción, Drama",
    synopsis: "Rio, un joven con recuerdos de su vida pasada en Japón, vive en un mundo de fantasía donde la magia y la nobleza dominan. Tras salvar a una princesa, se ve envuelto en conspiraciones políticas mientras desarrolla habilidades extraordinarias y busca justicia por su pasado.",
    image: "img/seireigensouki.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 15 }
    ]
  },
  {
    title: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
    year: 2021,
    genre: "Isekai, Acción, Fantasía, Estrategia",
    synopsis: "El mejor asesino del mundo renace como el heredero de una familia noble con la misión de eliminar al héroe que podría destruir el mundo. Usando su experiencia y nuevas habilidades mágicas, planea meticulosamente su estrategia mientras se adapta a su nueva vida.",
    image: "img/ansatsusha.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 15 }
    ]
  },
  {
    title: "Shigatsu wa Kimi no Uso",
    year: 2014,
    genre: "Drama, Romance, Música, Escolar",
    synopsis: "Kousei Arima, un prodigio del piano que perdió la capacidad de escuchar su propia música tras la muerte de su madre, encuentra inspiración en Kaori, una violinista libre y apasionada. Juntos enfrentan el dolor, el amor y el poder sanador de la música.",
    image: "img/shigatsu.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 23, gb: 2.1, price: 20 }
    ]
  },
  {
    title: "Shingeki no Kyojin",
    year: 2013,
    genre: "Acción, Drama, Fantasía Oscura",
    synopsis: "La humanidad vive tras enormes murallas para protegerse de los Titanes, gigantes devoradores de personas. Eren Jaeger jura exterminarlos tras la destrucción de su hogar. La historia evoluciona hacia conflictos políticos, revelaciones impactantes y una guerra que redefine el destino del mundo.",
    image: "img/aot.jpg",
    basePrice: 110,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 3.6, price: 35 },
      { season: 2, episodes: 12, gb: 1.4, price: 15 },
      { season: 3, episodes: 23, gb: 3.7, price: 35 },
      { season: 4, episodes: 16, gb: 3.0, price: 30 }
    ]
  },
  {
    title: "Shokugeki no Souma Ichi no Sara",
    year: 2015,
    genre: "Comedia, Cocina, Escolar",
    synopsis: "Souma Yukihira ingresa a la prestigiosa Academia Totsuki, donde solo los mejores chefs sobreviven. A través de intensos duelos culinarios conocidos como Shokugeki, demuestra su talento y creatividad mientras compite contra estudiantes de élite.",
    image: "img/shokugeki.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 22, gb: 2.2, price: 20 }
    ]
  },
  {
    title: "Shuumatsu no Valkyrie",
    year: 2021,
    genre: "Acción, Mitología, Fantasía",
    synopsis: "Dioses de distintas mitologías deciden extinguir a la humanidad, pero las valquirias proponen un torneo donde humanos legendarios enfrentan a deidades en combates uno contra uno. Cada batalla define el destino del mundo en enfrentamientos épicos.",
    image: "img/valkyrie.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Sin - Nanatsu no Taizai",
    year: 2017,
    genre: "Fantasía, Ecchi, Demonios",
    synopsis: "Lucifer desafía la autoridad celestial y es enviada al infierno, donde debe enfrentarse a los Siete Pecados Capitales. La serie combina batallas sobrenaturales con una fuerte carga ecchi y ambientación oscura.",
    image: "img/sinnanatsu.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 2.3, price: 20 }
    ]
  },
  {
    title: "Solo Leveling",
    year: 2024,
    genre: "Acción, Fantasía, Aventura",
    synopsis: "Sung Jin-Woo es el cazador más débil en un mundo donde portales conectan con mazmorras llenas de monstruos. Tras sobrevivir a una misión mortal, obtiene un sistema único que le permite aumentar su poder sin límites, convirtiéndose en una fuerza imparable.",
    image: "img/sololeveling.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.4, price: 15 },
      { season: 2, episodes: 13, gb: 4.0, price: 25 }
    ]
  },
  {
    title: "Sono Bisque Doll Wa Koi Wo Suru",
    year: 2022,
    genre: "Romance, Comedia, Escolar",
    synopsis: "Wakana Gojo sueña con fabricar muñecas tradicionales, pero su vida cambia cuando conoce a Marin Kitagawa, una chica extrovertida que ama el cosplay. Juntos desarrollan una relación dulce mientras trabajan en trajes y enfrentan inseguridades personales.",
    image: "img/bisquedoll.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Soul Eater",
    year: 2008,
    genre: "Acción, Sobrenatural, Shonen",
    synopsis: "En la Academia Shibusen, estudiantes entrenan para convertir armas humanas en Death Scythes recolectando almas malignas. Maka y su compañero Soul enfrentan brujas, demonios y conspiraciones que amenazan el equilibrio del mundo.",
    image: "img/souleater.jpg",
    basePrice: 65,
    estreno: false,
    seasons: [
      { season: 1, episodes: 51, gb: 6.6, price: 65 }
    ]
  },
  {
    title: "Sousou No Frieren",
    year: 2023,
    genre: "Fantasía, Drama, Aventura",
    synopsis: "Tras derrotar al Rey Demonio, la elfa Frieren continúa su viaje para comprender mejor a los humanos y el significado del tiempo. La historia reflexiona sobre la memoria, la pérdida y la inmortalidad en un mundo de fantasía sereno y emotivo.",
    image: "img/frieren.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 27, gb: 6.3, price: 40 }
    ]
  },
  {
    title: "Spy x Family",
    year: 2022,
    genre: "Acción, Comedia, Espionaje",
    synopsis: "El espía Twilight debe formar una familia falsa para cumplir una misión crucial. Sin saberlo, su esposa es una asesina y su hija puede leer mentes. Entre situaciones cómicas y operaciones secretas, la familia Forger desarrolla lazos reales.",
    image: "img/spyxfamily.jpg",
    basePrice: 40,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.1, price: 20 },
      { season: 2, episodes: 10, gb: 2.1, price: 20 }
    ]
  },
  {
    title: "Star Wars Rebels",
    year: 2014,
    genre: "Acción, Ciencia Ficción, Aventura",
    synopsis: "Un grupo de rebeldes lucha contra el Imperio Galáctico años antes de los eventos de Una Nueva Esperanza. Liderados por Hera y Kanan, enfrentan inquisidores y misiones peligrosas mientras se fortalece la Rebelión.",
    image: "img/swrebels.jpg",
    basePrice: 90,
    estreno: false,
    seasons: [
      { season: 1, episodes: 15, gb: 1.9, price: 15 },
      { season: 2, episodes: 22, gb: 2.0, price: 20 },
      { season: 3, episodes: 23, gb: 4.7, price: 30 },
      { season: 4, episodes: 15, gb: 3.7, price: 25 }
    ]
  },
  {
    title: "Sword Art Online",
    year: 2012,
    genre: "Acción, Isekai, Ciencia Ficción, Romance",
    synopsis: "Miles de jugadores quedan atrapados en un videojuego de realidad virtual donde morir en el juego significa morir en la vida real. Kirito deberá superar múltiples mundos virtuales mientras forja lazos y enfrenta poderosos enemigos.",
    image: "img/sao.jpg",
    basePrice: 70,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 1.5, price: 20 },
      { season: 2, episodes: 26, gb: 1.5, price: 20 },
      { season: 3, episodes: 23, gb: 4.7, price: 30 }
    ]
  }
],
T: [
  {
    title: "Tantei wa Mou, Shindeiru",
    year: 2021,
    genre: "Misterio, Romance, Comedia, Drama",
    synopsis: "Kimihiko Kimizuka siempre termina involucrado en situaciones problemáticas hasta que conoce a Siesta, una brillante detective. Juntos resuelven casos peligrosos alrededor del mundo. Tras la muerte de Siesta, Kimihiko intenta continuar con su vida, pero los ecos del pasado y nuevas amenazas lo obligan a enfrentarse nuevamente al misterio.",
    image: "img/tantei.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Tensei shitara Slime Datta Ken",
    year: 2018,
    genre: "Isekai, Fantasía, Acción, Aventura",
    synopsis: "Satoru Mikami muere y reencarna en un mundo de fantasía como un slime con habilidades únicas. Bajo el nombre de Rimuru Tempest, comienza a reunir aliados de distintas razas y a construir una nación donde humanos y monstruos puedan convivir en paz, enfrentando poderosos enemigos y conflictos políticos.",
    image: "img/slime.jpg",
    basePrice: 70,
    estreno: false,
    seasons: [
      { season: 1, episodes: 25, gb: 4.2, price: 30 },
      { season: 2, episodes: 13, gb: 2.0, price: 20 },
      { season: 3, episodes: 12, gb: 2.0, price: 20 }
    ]
  },
  {
    title: "The Misfit of Demon King Academy",
    year: 2020,
    genre: "Acción, Fantasía, Magia",
    synopsis: "Anos Voldigoad, el Rey Demonio reencarnado, regresa tras dos mil años esperando un mundo pacífico. Sin embargo, descubre que su legado ha sido distorsionado y su poder subestimado. En la academia demoníaca deberá demostrar su verdadera identidad mientras enfrenta conspiraciones y enemigos poderosos.",
    image: "img/misfit.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 13, gb: 3.2, price: 20 }
    ]
  },
  {
    title: "The Super Cube",
    year: 2023,
    genre: "Acción, Ciencia Ficción, Superpoderes",
    synopsis: "Un estudiante obtiene un misterioso cubo con habilidades extraordinarias que le permiten manipular la realidad. Mientras descubre los límites de su nuevo poder, deberá enfrentarse a enemigos que buscan arrebatarle el artefacto y a situaciones que pondrán en riesgo su vida y la de sus seres queridos.",
    image: "img/supercube.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.7, price: 15 }
    ]
  },
  {
    title: "Toaru Kagaku no Accelerator",
    year: 2019,
    genre: "Acción, Ciencia Ficción, Superpoderes",
    synopsis: "Accelerator, el esper más poderoso de Ciudad Academia, intenta redimirse tras su oscuro pasado mientras protege a una joven llamada Last Order. La serie profundiza en su lucha interna y en los conflictos científicos y criminales que amenazan la ciudad.",
    image: "img/accelerator.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.9, price: 15 }
    ]
  },
  {
    title: "Tokyo Ghoul",
    year: 2014,
    genre: "Acción, Terror, Drama, Sobrenatural",
    synopsis: "Ken Kaneki sobrevive a un accidente que lo convierte en mitad ghoul, criaturas que se alimentan de humanos. Atrapado entre dos mundos, deberá aprender a sobrevivir mientras enfrenta organizaciones rivales y descubre la crueldad tanto de humanos como de ghouls.",
    image: "img/tokyoghoul.jpg",
    basePrice: 60,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.4, price: 15 },
      { season: 2, episodes: 12, gb: 1.5, price: 15 },
      { season: 3, episodes: 12, gb: 1.5, price: 15 },
      { season: 4, episodes: 12, gb: 1.9, price: 15 }
    ]
  },
  {
    title: "Tonikaku Kawaii",
    year: 2020,
    genre: "Romance, Comedia, Slice of Life",
    synopsis: "Nasa Yuzaki se enamora a primera vista de Tsukasa, una misteriosa joven que acepta salir con él bajo la condición de que se casen. La historia sigue su vida matrimonial llena de momentos tiernos, humor cotidiano y descubrimientos sobre el amor.",
    image: "img/tonikaku.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.4, price: 15 }
    ]
  },
  {
    title: "Tsuki ga Michibiku Isekai Douchuu",
    year: 2021,
    genre: "Isekai, Fantasía, Acción, Comedia",
    synopsis: "Makoto Misumi es invocado a otro mundo como héroe, pero la diosa lo rechaza por su apariencia y lo envía a los confines del mundo. Allí desarrolla poderes extraordinarios y comienza a construir su propio camino, reuniendo aliados y enfrentando criaturas peligrosas.",
    image: "img/tsukimichi.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 15 }
    ]
  }
],

U: [
  {
    title: "Uzaki-chan wa Asobitai",
    year: 2020,
    genre: "Comedia, Romance, Slice of Life",
    synopsis: "Hana Uzaki disfruta molestar y pasar tiempo con su senpai Sakurai, quien solo desea tranquilidad. Entre bromas, salidas y situaciones incómodas, ambos desarrollan una relación divertida que evoluciona lentamente hacia el romance.",
    image: "img/uzaki.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.8, price: 15 }
    ]
  }
],

V: [
  {
    title: "Vinland Saga",
    year: 2019,
    genre: "Acción, Histórico, Drama, Aventura",
    synopsis: "Thorfinn, hijo de un legendario guerrero vikingo, busca vengar la muerte de su padre. Ambientada en la era de las invasiones vikingas, la serie explora guerra, ambición, honor y la búsqueda de un verdadero propósito más allá de la violencia.",
    image: "img/vinlandsaga.jpg",
    basePrice: 35,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 3.6, price: 35 }
    ]
  },
  {
    title: "Violet Evergarden",
    year: 2018,
    genre: "Drama, Romance, Slice of Life",
    synopsis: "Violet, una exsoldado criada para la guerra, intenta comprender el significado del amor mientras trabaja escribiendo cartas para otras personas. A través de cada historia descubre emociones humanas profundas y aprende a sanar sus propias heridas.",
    image: "img/violet.jpg",
    basePrice: 20,
    estreno: false,
    seasons: [
      { season: 1, episodes: 14, gb: 2.6, price: 20 }
    ]
  }
],

Y: [
  {
    title: "Yakusoku no Neverland",
    year: 2019,
    genre: "Suspense, Misterio, Psicológico",
    synopsis: "Emma, Norman y Ray viven felices en un orfanato hasta que descubren un oscuro secreto sobre su destino. Juntos planean una arriesgada fuga mientras enfrentan inteligencia estratégica y amenazas constantes.",
    image: "img/neverland.jpg",
    basePrice: 15,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 1.5, price: 15 }
    ]
  },
  {
    title: "Yofukashi no Uta",
    year: 2022,
    genre: "Romance, Sobrenatural, Drama",
    synopsis: "Ko, un adolescente insomne, conoce a Nazuna, una misteriosa chica vampiro que le muestra la libertad de la noche. Entre conversaciones íntimas y exploración urbana, Ko decide que quiere convertirse en vampiro, pero primero deberá entender qué es realmente el amor.",
    image: "img/yofukashi.jpg",
    basePrice: 10,
    estreno: false,
    seasons: [
      { season: 1, episodes: 11, gb: 1.4, price: 10 }
    ]
  },
  {
    title: "Yuragi-sou no Yuuna-san",
    year: 2018,
    genre: "Comedia, Ecchi, Sobrenatural, Romance",
    synopsis: "Kogarashi, un joven con habilidades espirituales, se muda a una posada embrujada donde convive con chicas peculiares, incluida el fantasma Yuuna. Entre exorcismos, situaciones cómicas y momentos románticos, se desarrolla una convivencia llena de caos.",
    image: "img/yuragi.jpg",
    basePrice: 25,
    estreno: false,
    seasons: [
      { season: 1, episodes: 12, gb: 2.6, price: 25 }
    ]
  },
  {
    title: "Yuukoku no Moriarty",
    year: 2020,
    genre: "Misterio, Psicológico, Histórico",
    synopsis: "William James Moriarty, brillante estratega, busca reformar la corrupta sociedad británica del siglo XIX desde las sombras. La serie muestra su enfrentamiento intelectual contra Sherlock Holmes mientras ejecuta complejos planes para cambiar el sistema.",
    image: "img/moriarty.jpg",
    basePrice: 30,
    estreno: false,
    seasons: [
      { season: 1, episodes: 24, gb: 3.3, price: 30 }
    ]
  }
],
  Z: []
};
