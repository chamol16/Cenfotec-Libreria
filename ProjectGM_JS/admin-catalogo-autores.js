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
const cuerpoTabla = document.querySelector("#tbl-autores tbody");
let listaAutores = [];
let rows = [];
let deleteIcons = [];

const inicializarListas = async () => {
  listaAutores = await obtenerDatos("/obtener-autores");
  mostrarTabla();
};
const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaAutores.forEach((autor, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = autor._id;
    fila.className = "row";
    fila.insertCell().textContent = autor.nombreCompleto;
    fila.insertCell().textContent = autor.paisNacimiento;
    fila.insertCell().textContent = autor.fechaNacimiento;
    fila.insertCell().textContent = autor.fechaDefuncion;
    if (autor.nobel) {
      fila.insertCell().textContent = "Sí";
    } else {
      fila.insertCell().textContent = "No";
    }
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarAutor);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/*redirijir al editar del autor */
rows = document.querySelectorAll(".row");

seleccionarAutor = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let autorSeleccionado = false;

  listaAutores.forEach((autor) => {
    if (rowId == autor._id) {
      autorSeleccionado = true;
      localStorage.setItem("authorClicked", JSON.stringify(autor));
    }
  });

  if (autorSeleccionado) {
    window.location.href = "admin-editar-autor.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarAutor);
}


//eliminar
eliminarUsuario = () => {
  console.log(`eliminar`);
};

//botones
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-autor.html";
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
