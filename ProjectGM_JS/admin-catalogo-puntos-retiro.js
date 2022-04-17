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

cuerpoTabla.innerHTML = "";
listaPuntosRetiro.forEach((punto, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
  fila.className = "row";
  fila.insertCell().textContent = punto.id;
  fila.insertCell().textContent = punto.socioName;
  fila.insertCell().textContent = punto.provincia;
  fila.insertCell().textContent = punto.canton;
  fila.insertCell().textContent = punto.distrito;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
});

/*redirijir al editar del punto de retiro */
const rows = document.querySelectorAll(".row");

seleccionarPunto = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let puntoSeleccionado = false;

  listaPuntosRetiro.forEach((punto) => {
    if (rowId == punto.id) {
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

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-punto-retiro.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
