let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const pedidoSelected = JSON.parse(localStorage.getItem("orderClicked"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill table */
const cuerpoTabla = document.querySelector("#tbl-usuarios tbody");
let listaUsuarios = [];
let listaPedidos = [];
let listaLibros = [];

const inicializarListas = async () => {
  listaUsuarios = await obtenerDatos("/obtener-usuarios");
  listaPedidos = await obtenerDatos("/obtener-pedidos");
  listaLibros = await obtenerDatos("/obtener-libros");
  mostrarTabla();
};

/* fill inputs */
const mostrarTabla = () => {
  let texto = "";
  listaPedidos.forEach((pedido) => {
    pedido.libros.forEach((librosdelPedido, idx) => {
      listaLibros.forEach((libro) => {
        if (
          pedidoSelected._id == pedido._id &&
          libro._id == librosdelPedido.libroId
        ) {
          texto += `${libro.nombre} ${librosdelPedido.libroCantidad}\n`;
          document.getElementById("order-date").textContent =
            pedido.fechaRealizacion;
          document.getElementById("order-id").textContent = pedido._id;
          document.getElementById("order-books").textContent = texto;
          document.getElementById("order-price").textContent = pedido.precio;
        }
      });
    });
  });
};

inicializarListas();

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "historial-pedidos.html";
  });
