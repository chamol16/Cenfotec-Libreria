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
console.log(cuerpoTabla);
cuerpoTabla.innerHTML = "";
listaSocios.forEach((socio, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
  fila.className = "row";
  fila.insertCell().textContent = socio.id;
  fila.insertCell().textContent = socio.nombre;
  fila.insertCell().textContent = socio.fechaInicio;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
});

/*redirijir al editar del autor */
const rows = document.querySelectorAll(".row");

seleccionarSocio = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let socioSeleccionado = false;

  listaSocios.forEach((socio) => {
    if (rowId == socio.id) {
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

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-socio-comercial.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
