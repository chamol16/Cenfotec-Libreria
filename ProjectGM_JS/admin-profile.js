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

/*selects */
const catalogos = document.getElementById("slt-catalogos");
const panelConfig = document.getElementById("slt-panel");
const reportes = document.getElementById("slt-reportes");

redirectionCatalogos = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "admin-catalogo-autores.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "admin-catalogo-generos-literarios.html";
  } else if (e.target.selectedIndex == 3) {
    window.location.href = "admin-catalogo-libros.html";
  } else if (e.target.selectedIndex == 4) {
    window.location.href = "admin-catalogo-premios.html";
  } else if (e.target.selectedIndex == 5) {
    window.location.href = "admin-catalogo-puntos-retiro.html";
  } else if (e.target.selectedIndex == 6) {
    window.location.href = "admin-catalogo-socios-comerciales.html";
  } else {
    window.location.href = "admin-catalogo-usuarios.html";
  }
};

redirectionReportes = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "admin-reportes-top-10.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "admin-reportes-total-ventas.html";
  } else if (e.target.selectedIndex == 3) {
    window.location.href = "admin-reportes-clientes-libro-fan.html";
  } else {
    window.location.href = "admin-reportes-clientes-normales.html";
  }
};

catalogos.addEventListener("change", redirectionCatalogos);
reportes.addEventListener("change", redirectionReportes);
