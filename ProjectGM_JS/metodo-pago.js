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

/*go to add payment method*/
document.getElementById("btn-add").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "agregar-metodo-pago.html";
});

/*hide cards*/

const tarjeta1 = document.getElementById("tarjeta-1");
const tarjeta2 = document.getElementById("tarjeta-2");
const tarjeta3 = document.getElementById("tarjeta-3");
const tarjeta4 = document.getElementById("tarjeta-4");

const remove1 = document.getElementById("remove-1");
const remove2 = document.getElementById("remove-2");
const remove3 = document.getElementById("remove-3");
const remove4 = document.getElementById("remove-4");

remover1 = (e) => {
  e.preventDefault();

  if (tarjeta1.id == "tarjeta-1") {
    tarjeta1.style.display = "none";
  }
};

remover2 = (e) => {
  e.preventDefault();

  if (tarjeta2.id == "tarjeta-2") {
    tarjeta2.style.display = "none";
  }
};

remover3 = (e) => {
  e.preventDefault();

  if (tarjeta3.id == "tarjeta-3") {
    tarjeta3.style.display = "none";
  }
};

remover4 = (e) => {
  e.preventDefault();
  if (tarjeta4.id == "tarjeta-4") {
    tarjeta4.style.display = "none";
  }
};

remove1.addEventListener("click", remover1);
remove2.addEventListener("click", remover2);
remove3.addEventListener("click", remover3);
remove4.addEventListener("click", remover4);

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

