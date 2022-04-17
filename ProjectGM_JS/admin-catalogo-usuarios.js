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
const cuerpoTabla = document.querySelector("#tbl-usuarios tbody");

cuerpoTabla.innerHTML = "";
listaUsuarios.forEach((usuario, idx) => {
  let fila = cuerpoTabla.insertRow();
  fila.id = idx + 1;
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

/*redirijir al editar del autor */
const rows = document.querySelectorAll(".row");

seleccionarUsuario = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let usuarioSeleccionado = false;

  console.log(listaUsuarios);

  listaUsuarios.forEach((usuario) => {
    if (rowId == usuario.id) {
      usuarioSeleccionado = true;
      localStorage.setItem("userClicked", JSON.stringify(usuario));
    }
  });

  if (usuarioSeleccionado) {
    window.location.href = "admin-editar-usuario.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarUsuario);
}

//botones
/* document.getElementById("btn-register").addEventListener("click", () => {
  window.location.href = "admin-registro-usuario.html";
}); */

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
