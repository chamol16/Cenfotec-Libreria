//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
let authorSelected = JSON.parse(localStorage.getItem("authorClicked"));
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

/* render data */
document.getElementById("premio-1").textContent =
  authorSelected.premiosGanados[0];
document.getElementById("premio-2").textContent =
  authorSelected.premiosGanados[1];
document.getElementById("premio-3").textContent =
  authorSelected.premiosGanados[2];

if (authorSelected.premiosGanados[0] == "") {
  document.getElementById("premio-1").textContent = "Ninguno";
}

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1 && userConnected) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2 && userConnected) {
    window.location.href = "historial-pedidos.html";
  } else {
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
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

if (authorSelected.fechaDefuncion) {
  document.getElementById("fecha-defuncion").textContent =
    authorSelected.fechaDefuncion;
} else {
  document.getElementById("fecha-defuncion").textContent = "Sigue con vida";
}

//convertir primera en capital y hacer slice del texto
let gender = authorSelected.genero.charAt(0).toUpperCase() + authorSelected.genero.slice(1);
document.getElementById("genero").textContent = gender;

document.getElementById("resena").textContent = authorSelected.biografia;
document
  .getElementById("img-container")
  .setAttribute("src", authorSelected.foto);

/*acceso en footer*/
const footerProfile = document.querySelectorAll(".acceso");

noAcceso = (item) => {
  if (userConnected) {
    if (item.id == "perfil") {
      window.location.href = "perfil.html";
    } else if (item.id == "historial-pedidos") {
      window.location.href = "historial-pedidos.html";
    } else {
      window.location.href = "librofan.html";
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
  }
};
footerProfile.forEach((item) => {
  item.addEventListener("click", () => {
    noAcceso(item);
  });
});

/*atras btn */
document.getElementById("btn-atras").addEventListener("click", () => {
  window.location.href = "lista-autores.html";
});