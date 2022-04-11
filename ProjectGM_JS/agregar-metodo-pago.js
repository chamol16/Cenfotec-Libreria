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

/*add card */
const inputs = document.querySelectorAll(".input");
const btnGuardar = document.getElementById("btn-save");

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
      title: "Tarjeta guardada",
      text: "Accediendo a tus métodos de pago",
    }).then(() => {
      window.location.href = "metodo-pago.html";
    });
  }
};
btnGuardar.addEventListener("click", validar);

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
