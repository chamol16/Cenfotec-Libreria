//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
let authorSelected = JSON.parse(localStorage.getItem("authorClicked"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
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

/* data */
document.getElementById("nombre-completo").textContent =
  authorSelected.nombreCompleto;
document.getElementById("pais-nacimiento").textContent =
  authorSelected.paisNacimiento;
document.getElementById("fecha-nacimiento").textContent =
  authorSelected.fechaNacimiento;
document.getElementById("fecha-defuncion").textContent =
  authorSelected.fechaDefuncion;
document.getElementById("genero").textContent = authorSelected.genero;
document.getElementById("libros-publicados").textContent =
  authorSelected.librosPublicados[0];
document
  .getElementById("img-container")
  .setAttribute("src", authorSelected.img);
