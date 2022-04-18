let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const pedidoSelected = JSON.parse(localStorage.getItem("orderClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
let texto = "";
listaPedidos.forEach((pedidoDB) => {
  pedidoDB.books.forEach((librodelPedido) => {
    listaLibros.forEach((libroDB) => {
      if (pedidoSelected.id == pedidoDB.id && libroDB.id == librodelPedido.id) {
        texto += `${libroDB.name} ${librodelPedido.quantity}\n`;
        document.getElementById("order-date").textContent = pedidoDB.date;
        document.getElementById("order-id").textContent = pedidoDB.id;
        document.getElementById("order-books").textContent = texto;
        document.getElementById("order-price").textContent = pedidoDB.price;
      }
    });
  });
});

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-reporte-total-ventas.html";
  });
