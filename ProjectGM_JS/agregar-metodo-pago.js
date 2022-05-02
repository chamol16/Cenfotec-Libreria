//clear local storage
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

/*add card */
const inputNombre = document.getElementById("input-name");
const inputNumero = document.getElementById("input-number");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const inputCVV = document.getElementById("input-cvv");
const radioProveedor = document.querySelectorAll(".card-radio");
let provider = "";
radioProveedor.forEach((radio) => {
  radio.addEventListener("change", () => {
    provider = radio.value;
  });
});

const inputs = document.querySelectorAll(".fill");

const validar = () => {
  let error = false;

  inputs.forEach((input) => {
    if (input.value == "") {
      error = true;
      input.classList.add("field-error");
    } else {
      input.classList.remove("field-error");
    }
  });

  //final validation
  if (error) {
    Swal.fire({
      icon: "warning",
      title: "Registro incorrecto",
      text: "Inserte los datos nuevamente",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Tarjeta agregada satisfactoriamente",
      text: "Accediendo a tus métodos de pago",
    })
      .then(() => {
        let metodoPago = {
          proveedor: provider,
          nombreTarjeta: inputNombre.value,
          numeroTarjeta: inputNumero.value,
          fechaExp: `${inputMonth.value}/${inputYear.value}`,
          cvvCode: inputCVV.value,
          userId: userConnected._id,
        };
        registrarDatos(metodoPago, "/registrar-metodo-pago");
      })
      .then(() => {
        window.location.href = "metodo-pago.html";
      });
  }
};

document.getElementById("btn-save").addEventListener("click", validar);
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "metodo-pago.html";
});

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
