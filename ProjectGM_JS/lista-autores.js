let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "historial-pedidos.html";
  }
};

redirectionListas = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "lista-autores.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "lista-libros.html";
  }
};

perfil.addEventListener("change", redirectionPerfil);
listas.addEventListener("change", redirectionListas);

/* render data */
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
  });
};

mostrarDatos();

/*redirijir al perfil del autor */
const rows = document.querySelectorAll(".row");

seleccionarAutor = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let autorSeleccionado = false;

  listaAutores.forEach((autor) => {
    if (rowId == autor.id) {
      autorSeleccionado = true;
      localStorage.setItem("authorClicked", JSON.stringify(autor));
      /*    if (libroSeleccionado) {
        window.location.href = "perfil-libro.html";
      } */
    }
  });

  //redirect
  if (autorSeleccionado) {
    window.location.href = "perfil-autor.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarAutor);
}
