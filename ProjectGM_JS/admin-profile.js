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
    window.location.href = "admin-catalogo-puntos-retiro.html";
  } else if (e.target.selectedIndex == 5) {
    window.location.href = "admin-catalogo-socios-comerciales.html";
  } else {
    window.location.href = "admin-catalogo-usuarios.html";
  }
};

redirectionPanel = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "admin-config-descuentos.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "admin-config-libro-fan.html";
  }
};

redirectionReportes = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "admin-reporte-clientes-libro-fan.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "admin-reporte-clientes-normales.html";
  } else if (e.target.selectedIndex == 3) {
    window.location.href = "admin-reporte-top-10.html";
  } else {
    window.location.href = "admin-reporte-total-ventas.html";
  }
};

catalogos.addEventListener("change", redirectionCatalogos);
panelConfig.addEventListener("change", redirectionPanel);
reportes.addEventListener("change", redirectionReportes);
