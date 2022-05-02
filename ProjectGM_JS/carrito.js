let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
let quantitySelected = JSON.parse(localStorage.getItem("quantity"));
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

//llenar valores del carrito
const cantidad = document.getElementById("book-quantity");
cantidad.value = quantitySelected;
let today = new Date().toISOString().slice(0, 10);
let total = 0;
document.getElementById("book-photo").setAttribute("src", bookSelected.foto);
document.getElementById("book-name").textContent = bookSelected.nombre;
document.getElementById("book-price").value = bookSelected.precio;
document.getElementById("total-pagar").textContent = `Total a pagar: ¢${
  bookSelected.precio * cantidad.value
}`;

//funcion total
cantidad.addEventListener("change", () => {
  total = bookSelected.precio * cantidad.value;
  document.getElementById(
    "total-pagar"
  ).textContent = `Total a pagar: ¢${total}`;
  // console.log(`total: ${total}`);
});
// console.log(`total: ${total}`);

//llenar selects con DB
let listaMetodosPago = [];
let listaPuntosRetiro = [];
let listaSociosComerciales = [];
const selectMetodoPago = document.getElementById("slt-metodo-pago");
const selectDireccionEnvio = document.getElementById("slt-direccion-envio");
let domicilio = "";

const inicializarListas = async () => {
  listaMetodosPago = await obtenerDatos("/obtener-metodos-pago");
  listaPuntosRetiro = await obtenerDatos("/obtener-puntos-retiro");
  listaSociosComerciales = await obtenerDatos("/obtener-socios-comerciales");
  llenarSelects();
};

const llenarSelects = () => {
  //metodo pago
  listaMetodosPago.forEach((metodo) => {
    if (userConnected._id == metodo.userId) {
      selectMetodoPago.options.add(
        new Option(`${metodo.proveedor}: ${metodo.numeroTarjeta}`)
      );

      selectMetodoPago.addEventListener("change", (e) => {
        e.preventDefault();
        if (
          selectMetodoPago.value ==
          `${metodo.proveedor}: ${metodo.numeroTarjeta}`
        ) {
          selectMetodoPago.id = metodo._id;
          //  console.log(selectMetodoPago.id);
        }
      });
    }
  });

  //direccion
  listaPuntosRetiro.forEach((punto) => {
    listaSociosComerciales.forEach((socio) => {
      if (socio._id == punto.socioId) {
        selectDireccionEnvio.options.add(
          new Option(
            `${socio.nombre}: ${punto.provincia}, ${punto.canton}, ${punto.distrito}`
          )
        );
        selectDireccionEnvio.addEventListener("change", (e) => {
          e.preventDefault();
          if (
            selectDireccionEnvio.value ==
            `${socio.nombre}: ${punto.provincia}, ${punto.canton}, ${punto.distrito}`
          ) {
            selectDireccionEnvio.id = punto._id;
            domicilio = "";
            //   console.log(selectDireccionEnvio.id);
          } else if (selectDireccionEnvio.value == 0) {
            domicilio = `${userConnected.provincia}, ${userConnected.canton}, ${userConnected.distrito}, ${userConnected.direccion}`;
            selectDireccionEnvio.id = "";
          }
        });
      }
    });
  });
};

inicializarListas();

//delete icon
const eliminarArticulo = () => {
  Swal.fire({
    icon: "warning",
    title: "Has eliminado todos los artículos del carrito",
    text: "Redirigiendo a librería",
  }).then(() => {
    localStorage.removeItem("bookClicked");
    localStorage.removeItem("quantity");
    window.location.href = "libreria.html";
  });
};

document
  .getElementById("delete-icon")
  .addEventListener("click", eliminarArticulo);

/* registro en DB*/
const validar = () => {
  let error = false;

  //validate quantity
  if (cantidad.value <= 0 || cantidad.value == "") {
    error = true;
  } else if (
    selectDireccionEnvio.id == "slt-direccion-envio" ||
    selectMetodoPago.id == "slt-metodo-pago"
  ) {
    error = true;
  }

  //final validation
  if (error) {
    Swal.fire({
      icon: "warning",
      title: "Pedido no realizado",
      text: "Debes indicar datos correctos",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Pedido comprado correctamente",
      text: "Accediendo al resumen del pedido",
    })
      .then(() => {
        let pedido = {
          fechaRealizacion: today,
          precio: total,
          libros: [
            {
              libroId: bookSelected._id,
              libroCantidad: cantidad.value,
            },
          ],
          metodoPagoId: selectMetodoPago.id,
          direccionDomiciliar: domicilio,
          puntoRetiroId: selectDireccionEnvio.id,
          userId: userConnected._id,
        };
        registrarDatos(pedido, "/registrar-pedido");
      })
      .then(() => {
        window.location.href = "confirmacion-compra.html";
      });
  }
};

document.getElementById("btn-comprar").addEventListener("click", validar);

/*perfil and listas NAV*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2) {
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
