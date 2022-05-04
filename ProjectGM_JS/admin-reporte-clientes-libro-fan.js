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
let listaPedidos = [];
let listaUsuarios = [];
let totalVentas = 0;

const inicialiarListas = async () => {
  listaPedidos = await obtenerDatos("/obtener-pedidos");
  listaUsuarios = await obtenerDatos("/obtener-usuarios");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaPedidos.forEach((pedido, idx) => {
    listaUsuarios.forEach((usuario) => {
      if (pedido.userId == usuario._id && usuario.libroFan) {
        let fila = cuerpoTabla.insertRow();
        totalVentas += pedido.precio;
        // fila.id = idx + 1;
        // fila.className = "row";
        fila.insertCell().textContent = usuario.correo;
        fila.insertCell().textContent = pedido._id;
        fila.insertCell().textContent = pedido.fechaRealizacion;
        fila.insertCell().textContent = `¢${pedido.precio}`;
        fila.insertCell().textContent = `¢${totalVentas}`;
      }
    });
  });
};

inicialiarListas();

//click events

/* const rows = document.querySelectorAll(".row");

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
} */

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
