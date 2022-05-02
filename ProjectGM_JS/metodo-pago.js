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

/*inicializar Listas */
const form = document.getElementById("form");
let listaTarjetas = [];
let proveedor = "";
const cuerpoTabla = document.querySelector("#tbl-tarjetas tbody");

const inicializarListas = async () => {
  listaTarjetas = await obtenerDatos("/obtener-metodos-pago");
  mostrarTabla();
};

const mostrarTabla = () => {
  cuerpoTabla.innerHTML = "";
  listaTarjetas.forEach((tarjeta) => {
    if (userConnected._id == tarjeta.userId) {
      let fila = cuerpoTabla.insertRow();

      if (tarjeta.proveedor == "Visa") {
        proveedor = "https://img.icons8.com/color/48/000000/visa.png";
      } else if (tarjeta.proveedor == "MasterCard") {
        proveedor =
          "https://img.icons8.com/color/48/000000/mastercard-logo.png";
      }

      fila.insertCell().innerHTML = `<img src="${proveedor}">
    `;
      fila.insertCell().textContent = tarjeta.nombreTarjeta;
      fila.insertCell().textContent = tarjeta.numeroTarjeta;
      fila.insertCell().textContent = tarjeta.fechaExp;
      fila.insertCell().innerHTML = `<i class="fa-solid fa-trash-can delete" id="${tarjeta._id}"></i>`;
    }
  });

  deleteIcons = document.querySelectorAll(".delete");
  for (const icon of deleteIcons) {
    icon.addEventListener("click", eliminarTarjeta);
  }
};

inicializarListas();

/*delete cards*/
const eliminarTarjeta = (e) => {
  e.preventDefault();
  eliminarDatos(`/eliminar-metodo-pago/${e.target.id}`);
  Swal.fire({
    icon: "success",
    title: "Método de pago eliminado satisfactoriamente",
    text: "Puedes continuar comprando",
  }).then(() => {
    inicializarListas();
  });
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

/*go to add payment method*/
document.getElementById("btn-add").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "agregar-metodo-pago.html";
});
