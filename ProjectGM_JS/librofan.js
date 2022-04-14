let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const plan = document.getElementById("tipo-plan");
const planDescrip = document.getElementById("plan-description");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
} else {
  document.getElementById("cart").style.display = "none";
}

/*cambiar color en libro fan */
if (userConnected.libroFan) {
  plan.style.background = "#e76f51";
  plan.style.color = "#fff";
  plan.textContent = "Libro-Fan";
  planDescrip.textContent = "Disfruta de todos los beneficios de libro-fan";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

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

/*routing */
document.getElementById("btn-actualizarPlan").addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Usuario registrado correctamente",
    text: "Ahora puedes iniciar sesión",
  }).then(() => {
    window.location.href = "perfil.html";
  });
});
