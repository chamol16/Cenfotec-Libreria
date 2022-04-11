let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*route to lib */

const btnConfirmar = document.getElementById("btnContinuar");
const pagar = () => {
  window.location.href = "libreria.html";
};

btnConfirmar.addEventListener("click", pagar);
