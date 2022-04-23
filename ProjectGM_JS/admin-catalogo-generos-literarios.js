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
let listaGeneros = [];
let rows = [];
let deleteIcons = [];

const inicializarListas = async () => {
  listaGeneros = await obtenerDatos("/obtener-generos-literarios");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaGeneros.forEach((genero, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = genero._id;
    fila.className = "row";
    fila.insertCell().textContent = genero.name;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarGenero);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/*redirijir al editar del autor */
rows = document.querySelectorAll(".row");

seleccionarGenero = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let generoSeleccionado = false;

  listaGeneros.forEach((genero) => {
    if (rowId == genero._id) {
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

//eliminar
eliminarUsuario = () => {
  console.log(`eliminar`);
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-genero-literario.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
