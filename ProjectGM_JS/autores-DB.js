let listaAutores = [
  {
    id: "1",
    nombreCompleto: "Gabriel García Márquez",
    img: "/ProjectGM_IMG/autores/Gabriel_Garcia_Marquez.jpg",
    paisNacimiento: "México",
    fechaNacimiento: "1927",
    fechaDefuncion: "2004",
    genero: "masculino",
    librosPublicados: [
      "Cien años de Soledad (1967)",
      "El amor en el tiempo del cólera (1985)",
      "El coronel no tiene quien le escriba (1961)",
      "Memorias de mis putas tristes (2004)",
    ],
    nobel: true,
    anoNobel: "1982",
    premiosGanados: ["Premio Nobel de Literatura"],
    biografia:
      "Considerado un emblema de literatura latinoamericana y uno de los máximos exponentes del realismo mágico",
  },
  {
    id: "2",
    nombreCompleto: "Pablo Neruda",
    img: "/ProjectGM_IMG/autores/Pablo_Neruda.jpg",
    paisNacimiento: "Chile",
    fechaNacimiento: "1904",
    fechaDefuncion: "1973",
    genero: "masculino",
    librosPublicados: [
      "Veinte poemas de amor y una canción desesperada (1924)",
      "Canto General (1950)",
      "Cien sonetos de amor (1956)",
    ],
    nobel: true,
    anoNobel: "1971",
    premiosGanados: ["Premio Nobel de Literatura"],
    biografia:
      "Considerado el más grande poeta del siglo XX en cualquier idioma",
  },
  {
    id: "3",
    nombreCompleto: "Mario Vargas Llosa",
    img: "/ProjectGM_IMG/autores/Mario_Vargas_Llosa.jpg",
    paisNacimiento: "Perú",
    fechaNacimiento: "1936",
    fechaDefuncion: "----",
    genero: "masculino",
    librosPublicados: [
      "La ciudad y los perros (1963)",
      "La tía Julia y el escribidor (1977)",
      "La fiesta del Chivo (2000)",
      "Travesuras de la niña mala (2006)",
    ],
    nobel: true,
    anoNobel: "1980",
    premiosGanados: [
      "Premio Nobel de Literatura",
      "Premio Príncipe de Asturias a las Letras",
      "Premio Nacional de Novela de Perú",
    ],
    biografia: "Ferviente defensor de las ideas liberales",
  },
  {
    id: "4",
    nombreCompleto: "Juan Carlos Onetti",
    img: "/ProjectGM_IMG/autores/Juan_Carlos_Onetti.jpg",
    paisNacimiento: "Uruguay",
    fechaNacimiento: "1955",
    fechaDefuncion: "2011",
    genero: "masculino",
    librosPublicados: [
      "El pozo (1939)",
      "Tierra de nadie (1941)",
      "Para esta noche (1943)",
      "La vida breve (1950)",
    ],
    nobel: false,
    anoNobel: "1980",
    premiosGanados: ["ninguno"],
    biografia:
      "Escritor enormemente original, coherente; su mundo es un universo de un pesimismo que supera gracias a la literatura",
  },
  {
    id: "5",
    nombreCompleto: "José Martí",
    img: "/ProjectGM_IMG/autores/Jose_Marti.jpg",
    paisNacimiento: "Cuba",
    fechaNacimiento: "1853 ",
    fechaDefuncion: "1895",
    genero: "masculino",
    librosPublicados: ["Ismaelillo (1882)", "Versos sencillos (1891)"],
    nobel: false,
    anoNobel: "",
    premiosGanados: ["ninguno"],
    biografia:
      "Creador del Partido Revolucionario Cubano y organizador de la Guerra del 95, Martí es considerado el apóstol de la Independencia de Cuba",
  },
  {
    id: "6",
    nombreCompleto: "Jorge Luis Borges",
    img: "/ProjectGM_IMG/autores/Jorge_Luis_Borges.jpg",
    paisNacimiento: "Argentina",
    fechaNacimiento: "1899",
    fechaDefuncion: "1986",
    genero: "masculino",
    librosPublicados: [
      "Inquisiciones (1925)",
      "El tamaño de mi esperanza (1926)",
      "Historia de la eternidad (1936)",
      "Antología personal (1961)",
    ],
    nobel: false,
    anoNobel: "",
    premiosGanados: [
      "Premio Nacional de Literatura (Argentina)",
      "Medalla de Oro del IX Premio de Poesía",
    ],
    biografia: "Uno de los autores más intrincados y complejos del siglo XX",
  },

  {
    id: "7",
    nombreCompleto: "Julio Cortázar",
    img: "/ProjectGM_IMG/autores/Julio_Cortazar.jpg",
    paisNacimiento: "Argentina",
    fechaNacimiento: "1914",
    fechaDefuncion: "1984",
    genero: "masculino",
    librosPublicados: [
      "Rayuela (1963)",
      "Antología (1975)",
      "Argentina, años de alambradas culturales (1984)",
      "Salvo el crepúsculo (1984)",
    ],
    nobel: false,
    anoNobel: "",
    premiosGanados: ["Premio Médicis Extranjero", "Premio Konex de Honor"],
    biografia:
      "Maestro del cuento corto, el realismo mágico y las historias despojadas de linealidad temporal y colmadas de lo fantástico",
  },
  {
    id: "8",
    nombreCompleto: "Isabel Allende",
    img: "/ProjectGM_IMG/autores/Isabel_Allende.jpg",
    paisNacimiento: "Chile",
    fechaNacimiento: "1942",
    fechaDefuncion: "----",
    genero: "femenino",
    librosPublicados: [
      "La casa de los espíritus (1982)",
      "De amor y de sombra (1984)",
      "El bosque de los pigmeos (2004)",
      "El cuaderno de Maya (2011)",
    ],
    nobel: false,
    anoNobel: "-",
    premiosGanados: [
      "Premio Nacional de Literatura de Chile",
      "Medalla Presidencial de la Libertad",
    ],
    biografia: "Escritora viva de lengua española más leída del mundo",
  },
  {
    id: "9",
    nombreCompleto: "Jorge Amado",
    img: "/ProjectGM_IMG/autores/Jorge_Amado.jpg",
    paisNacimiento: "Brasil",
    fechaNacimiento: "1912",
    fechaDefuncion: "2001",
    genero: "masculino",
    librosPublicados: [
      "Mar Muerto (1936)",
      "Capitanes de la arena (1937)",
      "Gabriela, clavo y canela (1958)",
      "Los pastores de la noche (1964)",
    ],
    nobel: false,
    anoNobel: "",
    premiosGanados: ["Premio Mundial Cino Del Duca", "Premio Lenin de la Paz"],
    biografia:
      "Escritor prolífico, con obras traducidos en 49 idiomas y publicados en 55 países",
  },
  {
    id: "10",
    nombreCompleto: "Miguel Asturias",
    img: "/ProjectGM_IMG/autores/Miguel_Asturias.jpg",
    paisNacimiento: "Guatemala",
    fechaNacimiento: "1899",
    fechaDefuncion: "1974",
    genero: "masculino",
    librosPublicados: ["El señor presidente (1943)", "Hombres de maíz (1949)"],
    nobel: true,
    anoNobel: "1967",
    premiosGanados: ["Premio Nobel de Literatura"],
    biografia:
      "Exponente del realismo mágico y un ferviente opositor a la dictadura en su país",
  },
];
