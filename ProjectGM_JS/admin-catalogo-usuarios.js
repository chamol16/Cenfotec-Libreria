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
let rows = [];
let deleteIcons = [];
const cuerpoTabla = document.querySelector("#tbl-usuarios tbody");
let listaUsuarios = [];

const inicializarListas = async () => {
  listaUsuarios = await obtenerDatos("/obtener-usuarios");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaUsuarios.forEach((usuario, idx) => {
    let fila = cuerpoTabla.insertRow();
    fila.id = usuario._id;
    fila.className = "row";

    if (usuario.tipoUsuario == 1) {
      fila.insertCell().textContent = "Administrador";
    } else {
      fila.insertCell().textContent = "Cliente";
    }

    fila.insertCell().textContent = usuario.identificacion;
    fila.insertCell().textContent = usuario.correo;
    fila.insertCell().textContent = usuario.nombre;
    fila.insertCell().textContent = usuario.primerApellido;
    fila.insertCell().textContent = usuario.segundoApellido;
    fila.insertCell().textContent = usuario.provincia;
    fila.insertCell().textContent = usuario.genero;

    if (usuario.libroFan == undefined) {
      fila.insertCell().textContent = "N/A";
    } else if (usuario.libroFan) {
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
    row.addEventListener("click", seleccionarUsuario);
  }

  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarUsuario);
  }
};

inicializarListas();

/*redirijir a editar */
seleccionarUsuario = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let usuarioSeleccionado = false;

  listaUsuarios.forEach((usuario) => {
    if (rowId == usuario._id) {
      usuarioSeleccionado = true;
      localStorage.setItem("userClicked", JSON.stringify(usuario));
    }
  });

  if (usuarioSeleccionado) {
    window.location.href = "admin-editar-usuario.html";
  }
};

//eliminar
eliminarUsuario = () => {
  console.log(`eliminar`);
};

//atras btn
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
