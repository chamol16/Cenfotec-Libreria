let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*data */

document.getElementById("nombre").textContent = adminConnected.nombre;
document.getElementById("primer-apellido").textContent =
  adminConnected.primerApellido;
document.getElementById("segundo-apellido").textContent =
  adminConnected.segundoApellido;
document.getElementById("correo").textContent = adminConnected.correo;
document.getElementById("position").textContent = adminConnected.position;
document.getElementById("schedule").textContent = adminConnected.schedule;

/*btn editar */

document.getElementById("btn-admin-editar").addEventListener("click", () => {
  window.location.href = "admin-editar-perfil.html";
});
