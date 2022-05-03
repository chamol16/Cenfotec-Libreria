let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let order = JSON.parse(localStorage.getItem("orderBought"));

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

let listaPuntosRetiro = [];
let listaSocios = [];

const inicializarListas = async () => {
  listaPuntosRetiro = await obtenerDatos("/obtener-puntos-retiro");
  listaSocios = await obtenerDatos("/obtener-socios-comerciales");
  mostrarDatos();
};

//fill p
const mostrarDatos = () => {
  document.getElementById(
    "factura"
  ).innerHTML = `Hemos enviado la factura a tu correo electrónico <i class="fa-solid fa-envelope"></i>`;

  document.getElementById(
    "thanks"
  ).textContent = `Gracias ${userConnected.nombre}, tu compra se ha realizado con éxito!`;

  if (order.puntoRetiroId == "") {
    document.getElementById(
      "tipo-entrega"
    ).innerHTML = `Tipo de entrega: Domiciliar <i class="fa-solid fa-house"></i>`;
    document.getElementById(
      "order-address"
    ).textContent = `Dirección: ${order.direccionDomiciliar}.`;
  } else if (order.direccionDomiciliar == "") {
    document.getElementById(
      "tipo-entrega"
    ).innerHTML = `Tipo de entrega: Punto de retiro <i class="fa-solid fa-building"></i>`;

    listaPuntosRetiro.forEach((punto) => {
      listaSocios.forEach((socio) => {
        if (order.puntoRetiroId == punto._id) {
          document.getElementById(
            "order-address"
          ).textContent = `Dirección: ${socio.nombre}: ${punto.provincia}, ${punto.canton}, ${punto.distrito}, ${punto.direccion}.`;
        }
      });
    });
  }
};

inicializarListas();

document.getElementById(
  "order-date"
).innerHTML = `Fecha de compra: ${order.fechaRealizacion} <i class="fa-solid fa-calendar-days"></i>`;
document.getElementById(
  "order-price"
).innerHTML = `Monto Pagado: ¢${order.precio} <i class="fa-solid fa-sack-dollar"></i>`;

/*route to lib */
const btnConfirmar = document.getElementById("btn-continuar");
const pagar = () => {
  window.location.href = "libreria.html";
};

btnConfirmar.addEventListener("click", pagar);

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
