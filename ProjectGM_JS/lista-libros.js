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
