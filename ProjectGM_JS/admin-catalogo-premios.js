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

cuerpoTabla.innerHTML = "";
listaPremios.forEach((premio, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
  fila.className = "row";
  fila.insertCell().textContent = premio.id;
  fila.insertCell().textContent = premio.nombre;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
});

/*editar del premio */
const rows = document.querySelectorAll(".row");

seleccionarPremio = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let premioSeleccionado = false;

  listaPremios.forEach((premio) => {
    if (rowId == premio.id) {
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

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-premio.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
