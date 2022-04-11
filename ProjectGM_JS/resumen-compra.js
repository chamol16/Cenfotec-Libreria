let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*resumen compra */
const btnPayment = document.getElementById("btnPayment");
const libroFan = document.getElementById("libroFanCheckbox");
const metodos = document.querySelectorAll(".metodo");
const total = document.getElementById("total");
const descuento = document.getElementById("descuento");
const pagar = document.getElementById("pagar");

let isSelected = libroFan.checked;
let metodoSelected = metodos.checked;

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
  let listo;
  for (const metodo of metodos) {
    metodoSelected = metodo.checked;
    if (metodoSelected) {
      listo = true;
    }
  }
  if (listo) {
    swal
      .fire({
        icon: "success",
        title: "Pago realizado con éxito",
        text: "Accediendo al resumen de su compra",
      })
      .then(() => {
        window.location.href = "confirmacion-compra.html";
      });
  } else {
    swal.fire({
      icon: "error",
      title: "Error en el pago.",
      text: "Por favor seleccione un método de pago",
    });
  }
};

libroFan.addEventListener("change", confirma);

btnPayment.addEventListener("click", confirmPay);
