let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

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

/*editar perfil btn*/

document.getElementById("btn-editar-perfil").addEventListener("click", () => {
  window.location.href = "editar-perfil.html";
});
