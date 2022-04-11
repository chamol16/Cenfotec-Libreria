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
    fila.insertCell().textContent = libro.price;
    fila.insertCell().textContent = libro.gender;
    fila.insertCell().textContent = libro.idiom;
  });
};

mostrarDatos();

/*redirijir al perfil del libro */
const rows = document.querySelectorAll(".row");

seleccionarLibro = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let libroSeleccionado = false;

  listaLibros.forEach((libro) => {
    if (rowId == libro.id) {
      libroSeleccionado = true;
      localStorage.setItem("bookClicked", JSON.stringify(libro));
      /*    if (libroSeleccionado) {
        window.location.href = "perfil-libro.html";
      } */
    }
  });

  //redirect
  if (libroSeleccionado) {
    window.location.href = "perfil-libro.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarLibro);
}
