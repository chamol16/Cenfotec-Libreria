let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

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
  
  //redirect
  if (libroSeleccionado) {
    window.location.href = "articulo.html";
  }
};

for (const book of books) {
  book.addEventListener("click", seleccionarLibro);
}

//localStorage.clear();
