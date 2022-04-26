let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill table */
const cuerpoTabla = document.querySelector("#tbl-puntos-retiro tbody");
let listaPuntosRetiro = [];
let listaSocios = [];
let rows = [];
let deleteIcons = [];

const inicializarListas = async () => {
  listaPuntosRetiro = await obtenerDatos("/obtener-puntos-retiro");
  listaSocios = await obtenerDatos("/obtener-socios-comerciales");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaPuntosRetiro.forEach((punto, idx) => {
    listaSocios.forEach((socio) => {
      if (punto.socioId == socio._id) {
        let fila = cuerpoTabla.insertRow();
        fila.id = punto._id;
        fila.className = "row";
        fila.insertCell().textContent = socio.nombre;
        fila.insertCell().textContent = punto.provincia;
        fila.insertCell().textContent = punto.canton;
        fila.insertCell().textContent = punto.distrito;
        fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
        fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
      }
    });
  });

  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarPunto);
  }
  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};
inicializarListas();

/*redirijir al editar del punto de retiro */
rows = document.querySelectorAll(".row");

seleccionarPunto = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let puntoSeleccionado = false;

  listaPuntosRetiro.forEach((punto) => {
    if (rowId == punto._id) {
      puntoSeleccionado = true;
      localStorage.setItem("pointClicked", JSON.stringify(punto));
    }
  });

  if (puntoSeleccionado) {
    window.location.href = "admin-editar-punto-retiro.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarPunto);
}

//eliminar
eliminarUsuario = (e) => {
  // eliminarDatos(); servicio general
  //swettalert
  //window.location.reload();
  e.preventDefault();
  console.log(`eliminar${e.target.parentElement.parentElement.id}`);
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-punto-retiro.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
