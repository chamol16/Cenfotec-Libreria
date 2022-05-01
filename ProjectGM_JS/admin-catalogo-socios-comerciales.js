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
const cuerpoTabla = document.querySelector("#tbl-socios tbody");

let rows = [];
let deleteIcons = [];
let listaSocios = [];

const inicializarListas = async () => {
  listaSocios = await obtenerDatos("/obtener-socios-comerciales");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaSocios.forEach((socio, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = socio._id;
    fila.className = "row";
    fila.insertCell().textContent = socio.nombre;
    fila.insertCell().textContent = socio.fechaInicio;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarSocio);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/*redirijir al editar del autor */
rows = document.querySelectorAll(".row");

seleccionarSocio = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let socioSeleccionado = false;

  listaSocios.forEach((socio) => {
    if (rowId == socio._id) {
      socioSeleccionado = true;
      localStorage.setItem("socioClicked", JSON.stringify(socio));
    }
  });

  if (socioSeleccionado) {
    window.location.href = "admin-editar-socio-comercial.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarSocio);
}

//eliminar process
eliminarUsuario = (e) => {
  e.preventDefault();
  eliminarDatos(
    `/eliminar-socio-comercial/${e.target.parentElement.parentElement.id}`
  );
  Swal.fire({
    icon: "success",
    title: "Socio comercial eliminado satisfactoriamente",
    text: "Puedes continuar trabajando",
  });
  inicializarListas();
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-socio-comercial.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
