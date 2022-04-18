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

cuerpoTabla.innerHTML = "";
listaDescuentos.forEach((descuento, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
  fila.className = "row";
  fila.insertCell().textContent = descuento.id;
  fila.insertCell().textContent = descuento.nombre;
  fila.insertCell().textContent = `${descuento.porcentaje}%`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
});

/*redirijir al editar del punto de retiro */
const rows = document.querySelectorAll(".row");

seleccionarPunto = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let descuentoSeleccionado = false;

  listaDescuentos.forEach((descuento) => {
    if (rowId == descuento.id) {
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

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-descuento.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
