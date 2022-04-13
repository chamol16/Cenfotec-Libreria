let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
} else {
  document.getElementById("cart").style.display = "none";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "historial-pedidos.html";
  }
};

redirectionListas = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "lista-autores.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "lista-libros.html";
  }
};

perfil.addEventListener("change", redirectionPerfil);
listas.addEventListener("change", redirectionListas);

/*click on books*/
const books = document.querySelectorAll(".book");

seleccionarLibro = (e) => {
  let libroSeleccionado = false;

  listaLibros.forEach((libro) => {
    if (e.target.id == libro.id) {
      libroSeleccionado = true;
      localStorage.setItem("bookClicked", JSON.stringify(libro));
    }
  });

  if (libroSeleccionado) {
    window.location.href = "articulo.html";
  }
};

for (const book of books) {
  book.addEventListener("click", seleccionarLibro);
}

/*click on autors*/
const authors = document.querySelectorAll(".autor");

seleccionarAutor = (e) => {
  let autorSeleccionado = false;

  listaAutores.forEach((autor) => {
    if (e.target.id == autor.id) {
      autorSeleccionado = true;
      localStorage.setItem("authorClicked", JSON.stringify(autor));
    }
  });

  if (autorSeleccionado) {
    window.location.href = "perfil-autor.html";
  }
};

for (const autor of authors) {
  autor.addEventListener("click", seleccionarAutor);
}
