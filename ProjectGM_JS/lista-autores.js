let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
} else {
  document.getElementById("cart").style.display = "none";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1 && userConnected) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2 && userConnected) {
    window.location.href = "historial-pedidos.html";
  } else {
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
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

/*redirijir al perfil del autor */
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

  //redirect
  if (autorSeleccionado) {
    window.location.href = "perfil-autor.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarAutor);
}

/*acceso en footer*/
const footerProfile = document.querySelectorAll(".acceso");

noAcceso = (item) => {
  if (userConnected) {
    if (item.id == "perfil") {
      window.location.href = "perfil.html";
    } else if (item.id == "historial-pedidos") {
      window.location.href = "historial-pedidos.html";
    } else {
      window.location.href = "librofan.html";
    }
  } else {
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
  }
};
footerProfile.forEach((item) => {
  item.addEventListener("click", () => {
    noAcceso(item);
  });
});
