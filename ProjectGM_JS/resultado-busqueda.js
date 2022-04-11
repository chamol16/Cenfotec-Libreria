//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*click on books*/
const books = document.querySelectorAll(".bookImage");

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
/* 


const libros = document.querySelectorAll(".bookImage");

const direccionar = (e) => {
  console.log(e.target.id);
  let libroSeleccionado = false;
  listaLibros.forEach((libro) => {
    if (e.target.id == libro.id) {
      libroSeleccionado = true;
      localStorage.setItem("libroSeleccionado", JSON.stringify(libro));
    }
  });
  if (libroSeleccionado) {
    window.location.href = "articulo.html";
  }
};

for (const libro of libros) {
  libro.addEventListener("click", direccionar);
}
 */
