//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
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
document.getElementById("name").textContent = bookSelected.nombre;
document.getElementById("author").textContent = bookSelected.autor;
document.getElementById("price").textContent = `¢${bookSelected.precio}`;
document.getElementById("gender").textContent = bookSelected.generoLiterario;
document.getElementById("idiom").textContent = bookSelected.idioma;

document.getElementById("img-container").setAttribute("src", bookSelected.foto);

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
