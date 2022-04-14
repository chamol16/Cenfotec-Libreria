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

/*resumen compra */
const btnPayment = document.getElementById("btnPayment");
const libroFan = document.getElementById("libroFanCheckbox");
const total = document.getElementById("total");
const descuento = document.getElementById("descuento");
const pagar = document.getElementById("pagar");

let isSelected = libroFan.checked;

const confirma = () => {
  isSelected = libroFan.checked;
  if (isSelected) {
    document.getElementById("descuento").innerHTML = "$2.000";
    document.getElementById("pagar").innerHTML = "$17.500";
  } else {
    document.getElementById("descuento").innerHTML = "$0";
    document.getElementById("pagar").innerHTML = "$19.500";
  }
};
const confirmPay = () => {
  swal
    .fire({
      icon: "success",
      title: "Pago realizado con éxito",
      text: "Accediendo al resumen de su compra",
    })
    .then(() => {
      window.location.href = "confirmacion-compra.html";
    });
};

libroFan.addEventListener("change", confirma);

btnPayment.addEventListener("click", confirmPay);

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1) {
    window.location.href = "librofan.html";
  } else if (e.target.selectedIndex == 2) {
    window.location.href = "metodo-pago.html";
  } else if (e.target.selectedIndex == 3) {
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
