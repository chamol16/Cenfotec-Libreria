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
let listaPedidos = [];
let listaUsuarios = [];

const inicializarListas = async () => {
  listaPedidos = await obtenerDatos("/obtener-pedidos");
  listaUsuarios = await obtenerDatos("/obtener-usuarios");
  mostrarDatos();
};

const mostrarDatos = () => {
  cuerpoTabla.innerHTML = "";
  listaPedidos.forEach((pedido) => {
    listaUsuarios.forEach((usuario) => {
      if (pedido.userId == usuario._id) {
        let fila = cuerpoTabla.insertRow();
        totalVentas += pedido.precio;
        fila.insertCell().textContent = usuario.correo;

        if (usuario.libroFan) {
          fila.insertCell().textContent = `Sí`;
        } else {
          fila.insertCell().textContent = `No`;
        }
        fila.insertCell().textContent = pedido._id;
        fila.insertCell().textContent = pedido.fechaRealizacion;
        fila.insertCell().textContent = `¢${pedido.precio}`;
        fila.insertCell().textContent = `¢${totalVentas}`;
      }
    });
  });
};

inicializarListas();

//boton atras
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
