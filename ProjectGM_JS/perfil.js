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

/*editar perfil btn*/
document.getElementById("btn-editar-perfil").addEventListener("click", () => {
  window.location.href = "editar-perfil.html";
});

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

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "librofan.html";
  } else if (e.target.selectedIndex == 3) {
    window.location.href = "metodo-pago.html";
  } else if (e.target.selectedIndex == 4) {
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

/*INFORMACION DE USUARIO*/
document.getElementById("nombreUsuario").textContent = userConnected.nombre;
document.getElementById("input-first-last-name").textContent =
  userConnected.primerApellido;
document.getElementById("input-second-last-name").textContent =
  userConnected.segundoApellido;
document.getElementById("slt-gender").textContent = userConnected.genero;
document.getElementById("slt-type-id").textContent = userConnected.tipoId;
document.getElementById("input-id").textContent = userConnected.identificacion;
document.getElementById("input-email").textContent = userConnected.correo;
document.getElementById("slt-province").textContent = userConnected.provincia;
document.getElementById("slt-canton").textContent = userConnected.canton;
document.getElementById("slt-district").textContent = userConnected.distrito;
document.getElementById("input-address").textContent = userConnected.direccion;

const genFavorito = document.querySelectorAll(".genero-favorito");
genFavorito.forEach((genero, idx) => {
  if (userConnected.generosFavoritos[idx] == undefined) {
    genero.textContent = "";
  } else {
    genero.textContent = userConnected.generosFavoritos[idx];
  }
});

const autorFavorito = document.querySelectorAll(".autor-favorito");
autorFavorito.forEach((autor, idx) => {
  if (userConnected.autoresFavoritos[idx] == undefined) {
    autor.textContent = "";
  } else {
    autor.textContent = userConnected.autoresFavoritos[idx];
  }
});

document.getElementById("img-profile").setAttribute("src", userConnected.foto);
