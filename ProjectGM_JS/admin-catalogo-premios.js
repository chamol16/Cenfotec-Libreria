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
const cuerpoTabla = document.querySelector("#tbl-premios tbody");
let listaPremios = [];
let rows = [];
let deleteIcons = [];

const inicializarListas = async () => {
  listaPremios = await obtenerDatos("/obtener-premios");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaPremios.forEach((premio, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = premio._id;
    fila.className = "row";
    fila.insertCell().textContent = premio.nombre;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarPremio);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};
inicializarListas();

/*editar del premio */
rows = document.querySelectorAll(".row");

seleccionarPremio = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let premioSeleccionado = false;

  listaPremios.forEach((premio) => {
    if (rowId == premio._id) {
      premioSeleccionado = true;
      localStorage.setItem("awardClicked", JSON.stringify(premio));
    }
  });

  if (premioSeleccionado) {
    window.location.href = "admin-editar-premio.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarPremio);
}

//eliminar
eliminarUsuario = () => {
  console.log(`eliminar`);
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-premio.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
