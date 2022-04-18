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
const cuerpoTabla = document.querySelector("#tbl-orders tbody");
let totalVentas = 0;
cuerpoTabla.innerHTML = "";
listaPedidos.forEach((pedido, idx) => {
  listaUsuarios.forEach((usuario) => {
    if (pedido.userId == usuario.id && !usuario.libroFan) {
      let fila = cuerpoTabla.insertRow();
      totalVentas += pedido.price;
      fila.id = idx + 1;
      fila.className = "row";
      fila.insertCell().textContent = pedido.date;
      fila.insertCell().textContent = pedido.id;
      fila.insertCell().textContent = `¢${pedido.price}`;
      fila.insertCell().textContent = `¢${totalVentas}`;
    }
  });
});

//click events
const rows = document.querySelectorAll(".row");

seleccionarPedido = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let pedidoSeleccionado = false;

  listaPedidos.forEach((pedido) => {
    if (rowId == pedido.id) {
      pedidoSeleccionado = true;
      localStorage.setItem("orderClicked", JSON.stringify(pedido));
    }
  });

  if (pedidoSeleccionado) {
    window.location.href = "admin-pedido.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarPedido);
}

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
