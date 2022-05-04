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
let listaLibros = [];

const inicializarListas = async () => {
  listaPedidos = await obtenerDatos("/obtener-pedidos");
  listaLibros = await obtenerDatos("/obtener-libros");
  mostrarDatos();
};

//render table
const mostrarDatos = () => {
  cuerpoTabla.innerHTML = "";
  listaPedidos.forEach((pedido) => {
    pedido.libros.forEach((libro) => {
      listaLibros.forEach((libroDB) => {
        if (libro.libroId == libroDB._id) {
          let fila = cuerpoTabla.insertRow();
          fila.insertCell().textContent = pedido._id;
          fila.insertCell().textContent = libroDB.nombre;
          fila.insertCell().textContent = libro.libroCantidad;
        }
      });
    });
  });
};

inicializarListas();

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
