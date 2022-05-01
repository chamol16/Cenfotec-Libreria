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

//lista de pedidos
const cuerpoTabla = document.querySelector("#tbl-orders tbody");
let rows = [];
let listaPedidos = [];
let listaUsuarios = [];
let totalVentas = 0;

const iniciarlizarlistas = async () => {
  listaPedidos = await obtenerDatos("/obtener-pedidos");
  listaUsuarios = await obtenerDatos("/obtener-usuarios");
  mostrarTabla();
};

/*render data */
const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaPedidos.forEach((pedido, idx) => {
    listaUsuarios.forEach((usuario) => {
      if (
        pedido.userId == userConnected._id &&
        userConnected._id == usuario._id
      ) {
        let fila = cuerpoTabla.insertRow();
        totalVentas += pedido.precio;
        fila.id = pedido._id;
        fila.className = "row";
        fila.insertCell().textContent = pedido.fechaRealizacion;
        fila.insertCell().textContent = pedido._id;
        fila.insertCell().textContent = `¢${pedido.precio}`;
        fila.insertCell().textContent = `¢${totalVentas}`;
      }
    });
  });
  rows = document.querySelectorAll(".row");
  for (const row of rows) {
    row.addEventListener("click", seleccionarPedido);
  }
};

iniciarlizarlistas();

//click events
rows = document.querySelectorAll(".row");

seleccionarPedido = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let pedidoSeleccionado = false;

  listaPedidos.forEach((pedido) => {
    if (rowId == pedido._id) {
      pedidoSeleccionado = true;
      localStorage.setItem("orderClicked", JSON.stringify(pedido));
    }
  });

  if (pedidoSeleccionado) {
    window.location.href = "pedido.html";
  }
};

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "librofan.html";
  } else if (e.target.selectedIndex == 3) {
    window.location.href = "metodo-pago.html";
  } else if (e.target.selectedIndex == 4) {
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

/*get date values */
const botonSubmit = document.querySelector("#button-buscar");
const inputFechaCalendario = document.querySelector("#fecha-pedido");

//botonSubmit.addEventListener("click", );

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

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "perfil.html";
});
