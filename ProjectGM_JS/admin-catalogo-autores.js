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

const mostrarDatos = () => {
  cuerpoTabla.innerHTML = "";
  listaAutores.forEach((autor, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = idx + 1;
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
};

mostrarDatos();

/*redirijir al editar del autor */
const rows = document.querySelectorAll(".row");

seleccionarAutor = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let autorSeleccionado = false;

  listaAutores.forEach((autor) => {
    if (rowId == autor.id) {
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

//botones un autor
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-autor.html";
});
