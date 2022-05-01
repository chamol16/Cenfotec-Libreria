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
const cuerpoTabla = document.querySelector("#tbl-descuentos tbody");
let listaDescuentos = [];
let rows = [];

const inicializarListas = async () => {
  listaDescuentos = await obtenerDatos("/obtener-descuentos");
  mostrarDatos();
};

mostrarDatos = () => {
  cuerpoTabla.innerHTML = "";

  listaDescuentos.forEach((descuento) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = descuento._id;
    fila.className = "row";
    fila.insertCell().textContent = descuento.nombre;
    fila.insertCell().textContent = `${descuento.porcentaje}%`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarDescuento);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/*redirijir al editar del punto de retiro */
rows = document.querySelectorAll(".row");

seleccionarDescuento = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let descuentoSeleccionado = false;

  listaDescuentos.forEach((descuento) => {
    if (rowId == descuento._id) {
      descuentoSeleccionado = true;
      localStorage.setItem("discountClicked", JSON.stringify(descuento));
    }
  });

  if (descuentoSeleccionado) {
    window.location.href = "admin-config-editar-descuento.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarPunto);
}

//eliminar process
eliminarUsuario = (e) => {
  e.preventDefault();
  eliminarDatos(`/eliminar-descuento/${e.target.parentElement.parentElement.id}`);
  Swal.fire({
    icon: "success",
    title: "Descuento eliminado satisfactoriamente",
    text: "Puedes continuar trabajando",
  });
  inicializarListas();
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-descuento.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
