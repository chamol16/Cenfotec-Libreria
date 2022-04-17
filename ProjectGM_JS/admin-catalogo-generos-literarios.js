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
const cuerpoTabla = document.querySelector("#tbl-generos tbody");

cuerpoTabla.innerHTML = "";
listaGeneros.forEach((genero, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
  fila.className = "row";
  fila.insertCell().textContent = genero.id;
  fila.insertCell().textContent = genero.name;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
  fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
});

/*redirijir al editar del autor */
const rows = document.querySelectorAll(".row");

seleccionarGenero = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let generoSeleccionado = false;

  listaGeneros.forEach((genero) => {
    if (rowId == genero.id) {
      generoSeleccionado = true;
      localStorage.setItem("genderClicked", JSON.stringify(genero));
    }
  });

  if (generoSeleccionado) {
    window.location.href = "admin-editar-genero-literario.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarGenero);
}

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-genero-literario.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
