"use strict";

//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

const nombreTarjeta = document.getElementById("nombre-tarjeta-input");
const numeroTarjeta = document.getElementById("numero-tarjeta-input");
const fechaVencimiento = document.getElementById(
  "fecha-vencimiento-tarjeta-input"
);
const codigoSeguridad = document.getElementById(
  "codigo-seguridad-tarjeta-input"
);
const btnAdicionar = document.getElementById("btn-adicionar-cuenta");

const obtenerDatos = () => {
  console.log(nombreTarjeta.value);
  console.log(numeroTarjeta.value);
  console.log(fechaVencimiento.value);
  console.log(codigoSeguridad.value);
};
const validar = () => {
  let error = false;
  if (nombreTarjeta.value == "") {
    error = true;
    nombreTarjeta.classList.add("error-box");
  } else {
    nombreTarjeta.classList.remove("error-box");
  }
  if (numeroTarjeta.value == "") {
    error = true;
    numeroTarjeta.classList.add("error-box");
  } else {
    numeroTarjeta.classList.remove("error-box");
  }
  if (fechaVencimiento.value == "") {
    error = true;
    fechaVencimiento.classList.add("error-box");
  } else {
    fechaVencimiento.classList.remove("error-box");
  }
  if (codigoSeguridad.value == "") {
    error = true;
    codigoSeguridad.classList.add("error-box");
  } else {
    codigoSeguridad.classList.remove("error-box");
  }

  console.log(error);
  if (error == true) {
    Swal.fire({
      icon: "warning",
      title: "Registro incorrecto",
      text: "Inserte los datos nuevamente",
    });
  } else {
    obtenerDatos();
    Swal.fire({
      icon: "success",
      title: "¡Datos registrados con éxito!",
      text: "Usted puede salir de la página.",
    }).then(() => {
      window.location.href = "../ProjectGM_HTML/metodoPago.html";
    });
  }
};
btnAdicionar.addEventListener("click", validar);
