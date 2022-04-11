let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*editar perfil btn*/

document.getElementById("btn-editar-perfil").addEventListener("click", () => {
  window.location.href = "editar-perfil.html";
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
document.getElementById("input-id").textContent = userConnected.id;
document.getElementById("input-email").textContent = userConnected.correo;
document.getElementById("input-password").textContent =
  userConnected.contrasena;
document.getElementById("slt-province").textContent = userConnected.provincia;
document.getElementById("slt-canton").textContent = userConnected.canton;
document.getElementById("slt-district").textContent = userConnected.distrito;
document.getElementById("input-address").textContent = userConnected.direccion;
document.getElementById("generos-favoritos").textContent =
  userConnected.generoFavorito;
document.getElementById("autores-favoritos").textContent =
  userConnected.autorFavorito;
document.getElementById("img-profile").setAttribute("src", userConnected.img);
