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

const mostrarDatos = () => {
  cuerpoTabla.innerHTML = "";
  listaLibros.forEach((libro, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = idx + 1;
    fila.className = "row";
    fila.insertCell().textContent = libro.name;
    fila.insertCell().textContent = libro.author;
    fila.insertCell().textContent = `¢${libro.price}`;
    fila.insertCell().textContent = libro.gender;
    fila.insertCell().textContent = libro.idiom;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-pen" id="edit"></i>`;
    fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can" id="delete"></i>`;
  });
};

mostrarDatos();

/*redirijir al editar del libro */
const rows = document.querySelectorAll(".row");

seleccionarLibro = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let libroSeleccionado = false;

  listaLibros.forEach((libro) => {
    if (rowId == libro.id) {
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

//botones un autor
document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-libro.html";
});
