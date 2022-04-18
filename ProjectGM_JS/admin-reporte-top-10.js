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
let libro1 = 0,
  libro2 = 0;

cuerpoTabla.innerHTML = "";

/*top 10 */
let fila = cuerpoTabla.insertRow();
let fila2 = cuerpoTabla.insertRow();

listaPedidos.forEach((pedido, idx, array) => {
  pedido.books.forEach((libro, index, array) => {
    /*    console.log(
      `Pedido:${pedido.id}, libro:${libro.id}, cantidad:${libro.quantity}`
    ); */
    if (libro.id == 1) {
      libro1 += libro.quantity;
    } else if (libro.id == 2) {
      libro2 += libro.quantity;
    }
  });
  fila.id = idx + 1;
  fila.className = "row";
});
fila.insertCell().textContent = 1;
fila.insertCell().textContent = libro1;
fila2.insertCell().textContent = 2;
fila2.insertCell().textContent = libro2;

//click events
const rows = document.querySelectorAll(".row");

seleccionarPedido = (e) => {
  e.preventDefault();
  let rowId = e.target.parentElement.id;
  let pedidoSeleccionado = false;

  listaPedidos.forEach((pedido) => {
    if (rowId == libro.id) {
      pedidoSeleccionado = true;
      localStorage.setItem("orderClicked", JSON.stringify(pedido));
    }
  });

  if (pedidoSeleccionado) {
    window.location.href = "admin-pedido-visualizar.html";
  }
};

for (const row of rows) {
  row.addEventListener("click", seleccionarPedido);
}

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
