let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*render data */
const cuerpoTabla = document.querySelector("#tbl-libros tbody");
let listaLibros = [];
let rows = [];
let deleteIcons = [];

const inicializarListas = async () => {
  listaLibros = await obtenerDatos("/obtener-libros");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaLibros.forEach((libro, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = libro._id;
    fila.className = "row";
    fila.insertCell().textContent = libro.nombre;
    fila.insertCell().textContent = libro.autor;
    fila.insertCell().textContent = `¢${libro.precio}`;
    fila.insertCell().textContent = libro.generoLiterario;
    fila.insertCell().textContent = libro.idioma;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
  rows = document.querySelectorAll(".row");
  deleteIcons = document.querySelectorAll("#delete");
  for (const row of rows) {
    row.addEventListener("click", seleccionarLibro);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/* editar del libro */
rows = document.querySelectorAll(".row");

seleccionarLibro = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let libroSeleccionado = false;

  listaLibros.forEach((libro) => {
    if (rowId == libro._id) {
      libroSeleccionado = true;
      localStorage.setItem("bookClicked", JSON.stringify(libro));
    }
  });

  if (libroSeleccionado) {
    window.location.href = "admin-editar-libro.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarLibro);
}

//eliminar
eliminarUsuario = () => {
  console.log(`eliminar`);
};

//botones un autor
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-libro.html";
});

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
