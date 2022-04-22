let listaLibros = [
  {
    id: "1",
    "nombre": "El Diario de Ana Frank",
    "autor": "Ana Frank",
    "foto": "/ProjectGM_foto/books/el_diario.jpg",
    "precio": 7000,
    "stock": true,
    "activo": true,
    "generoLiterario": "Biografía",
    "idioma": "Español",
    "autorId": "11",
    "generoLiterarioId": "6",
    "descuentoId": "",
  },
  {
    id: "2",
    "nombre": "Harry Potter and the Sorcerer's Stone",
    "autor": "J.K. Rowling",
    "foto": "/ProjectGM_foto/books/harry_potter.jpg",
    "precio": 6000,
    "stock": true,
    "activo": true,
    "generoLiterario": "Ficción",
    "idioma": "Español",
    "autorId": "12",
    "generoLiterarioId": "7",
    "descuentoId": "",
  },
  {
    id: "3",
    nombre: "The Hunger Games",
    autor: "Suzanne Collins",
    foto: "/ProjectGM_foto/books/hunger_games.jpg",
    precio: 6500,
    stock: true,
    activo: true,
    generoLiterario: "Ciencia ficción",
    idioma: "Español",
    autorId: "13",
    generoLiterarioId: "8",
    descuentoId: "",
  },
  {
    id: "4",
    nombre: "The Lord Of The Rings",
    autor: "J.R.R. Tolkien",
    foto: "/ProjectGM_foto/books/lord_of_the_rings.jpg",
    precio: 8000,
    stock: true,
    activo: true,
    generoLiterario: "Ficción",
    idioma: "Español",
    autorId: "14",
    generoLiterarioId: "7",
    descuentoId: "",
  },
  {
    id: "5",
    nombre: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    foto: "/ProjectGM_foto/books/100anos.jpg",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "1",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "6",
    nombre: "Cuentos de mi tía Panchita",
    autor: "Carmen Lyra",
    foto: "/ProjectGM_foto/books/panchita.jpg",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Cuento",
    idioma: "Español",
    autorId: "15",
    generoLiterarioId: "9",
    descuentoId: "",
  },
  {
    id: "7",
    nombre: "Enigma",
    autor: "Robert Harris",
    foto: "/ProjectGM_foto/books/enigma-book7.jpg",
    precio: 4500,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "16",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "8",
    nombre: "Gantz",
    autor: "Hiroya Oku",
    foto: "/ProjectGM_foto/books/gantz-book8.jpg",
    precio: 8000,
    stock: true,
    activo: true,
    generoLiterario: "Ciencia ficción",
    idioma: "Español",
    autorId: "17",
    generoLiterarioId: "8",
    descuentoId: "",
  },
  {
    id: "9",
    nombre: "Viaje al reino de los deseos",
    autor: "Rafael Ángel Herra",
    foto: "/ProjectGM_foto/books/viajealreino-book9.jpg",
    precio: 3700,
    stock: true,
    activo: true,
    generoLiterario: "Fantasía",
    idioma: "Español",
    autorId: "18",
    generoLiterarioId: "10",
    descuentoId: "",
  },
  {
    id: "10",
    nombre: "La metamorfosis",
    autor: "Franz Kafka",
    foto: "/ProjectGM_foto/books/lameta-book10.jpg",
    precio: 2850,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "19",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "11",
    nombre: "El amor en el tiempo del cólera",
    autor: "Gabriel García Márquez",
    foto: "/ProjectGM_foto/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "1",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "12",
    nombre: "El coronel no tiene quien le escriba",
    autor: "Gabriel García Márquez",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "1",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "13",
    nombre: "Memorias de mis putas tristes",
    autor: "Gabriel García Márquez",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "1",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "14",
    nombre: "Canto General",
    autor: "Pablo Neruda",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "2",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "15",
    nombre: "Veinte poemas de amor y una canción desesperada",
    autor: "Pablo Neruda",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "2",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "16",
    nombre: "Cien sonetos de amor",
    autor: "Pablo Neruda",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "2",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "17",
    nombre: "La ciudad y los perros",
    autor: "Mario Vargas Llosa",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "3",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "18",
    nombre: "La tía Julia y el escribidor",
    autor: "Mario Vargas Llosa",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "3",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "19",
    nombre: "La fiesta del Chivo",
    autor: "Mario Vargas Llosa",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "3",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "20",
    nombre: "Travesuras de la niña mala",
    autor: "Mario Vargas Llosa",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "3",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "21",
    nombre: "La casa de los espíritus",
    autor: "Isabel Allende",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "4",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "22",
    nombre: "De amor y de sombra",
    autor: "Isabel Allende",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "4",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "23",
    nombre: "El bosque de los pigmeos",
    autor: "Isabel Allende",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "4",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "24",
    nombre: "El cuaderno de Maya",
    autor: "Isabel Allende",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "4",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "25",
    nombre: "Ismaelillo",
    autor: "José Martí",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "5",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "26",
    nombre: "Versos sencillos",
    autor: "José Martí",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "5",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "27",
    nombre: "Inquisiciones",
    autor: "Jorge Luis Borges",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "6",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "28",
    nombre: "El tamaño de mi esperanza",
    autor: "Jorge Luis Borges",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "6",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "29",
    nombre: "Historia de la eternidad",
    autor: "Jorge Luis Borges",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "6",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "30",
    nombre: "Antología personal",
    autor: "Jorge Luis Borges",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "6",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "31",
    nombre: "Rayuela",
    autor: "Julio Cortázar",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "7",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "32",
    nombre: "Antología",
    autor: "Julio Cortázar",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "7",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "33",
    nombre: "Argentina, años de alambradas culturales",
    autor: "Julio Cortázar",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "7",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "34",
    nombre: "Salvo el crepúsculo",
    autor: "Julio Cortázar",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "7",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "35",
    nombre: "El pozo",
    autor: "Juan Carlos Onetti",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "8",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "36",
    nombre: "Tierra de nadie",
    autor: "Juan Carlos Onetti",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "8",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "37",
    nombre: "Para esta noche",
    autor: "Juan Carlos Onetti",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "8",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "38",
    nombre: "La vida breve",
    autor: "Juan Carlos Onetti",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "8",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "39",
    nombre: "Mar Muerto",
    autor: "Jorge Amado",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "9",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "40",
    nombre: "Capitanes de la arena",
    autor: "Jorge Amado",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "9",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "41",
    nombre: "Gabriela, clavo y canela",
    autor: "Jorge Amado",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "9",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "42",
    nombre: "Los pastores de la noche",
    autor: "Jorge Amado",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "9",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "43",
    nombre: "El señor presidente",
    autor: "Miguel Asturias",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "10",
    generoLiterarioId: "5",
    descuentoId: "",
  },
  {
    id: "44",
    nombre: "Hombres de maíz",
    autor: "Miguel Asturias",
    foto: "/ProjectGM_foto/books/",
    precio: 4000,
    stock: true,
    activo: true,
    generoLiterario: "Novela",
    idioma: "Español",
    autorId: "10",
    generoLiterarioId: "5",
    descuentoId: "",
  },
];
