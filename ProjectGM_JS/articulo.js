//clear local storage
let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
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

//colect data from DB
document.getElementById("book-name").textContent = bookSelected.nombre;
document.getElementById("book-idiom").textContent = bookSelected.idioma;
document.getElementById("book-gender").textContent = bookSelected.generoLiterario;
document.getElementById("book-price").textContent = `¢${bookSelected.precio}`;
const bookStock = document.getElementById("book-stock");
document.getElementById("book-author").textContent = bookSelected.autor;
document.getElementById("book-img").setAttribute("src", bookSelected.foto);

/*perfil and listas*/
const perfil = document.getElementById("slt-profile");
const listas = document.getElementById("slt-list");

redirectionPerfil = (e) => {
  if (e.target.selectedIndex == 1 && userConnected) {
    window.location.href = "perfil.html";
  } else if (e.target.selectedIndex == 2 && userConnected) {
    window.location.href = "historial-pedidos.html";
  } else {
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
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

//consultar stock
if (bookSelected.activo) {
  bookStock.textContent = "En inventario";
} else {
  bookStock.textContent = "No disponible";
}

//anadir al carrito
const btnAddCart = document.getElementById("btn-anadir-carrito");
const cantidad = document.getElementById("input-cantidad");

addToCart = () => {
  if (userConnected) {
    let error = false;
    if (cantidad.value == 0 || cantidad.value == "") {
      error = true;
      cantidad.classList.add("field-error");
    } else {
      cantidad.classList.remove("field-error");
    }

    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Cantidad no indicada",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Artículo añadido al carrito",
        text: "Ingresando al carrito de compras",
      }).then(() => {
        window.location.href = "carrito.html";
      });
    }
  } else {
    /*Routing*/
    Swal.fire({
      icon: "warning",
      title: "Esta acción requiere un usuario",
      text: "Para comprar este libro primero debes iniciar sesión",
    });
  }
};

btnAddCart.addEventListener("click", addToCart);

/*give feathers*/
const feathers = document.querySelectorAll(".feathers a");

feathers.forEach((feather, clickedIdx) => {
  feather.addEventListener("click", () => {
    feathers.forEach((otherFeather, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherFeather.classList.add("active");
      }
    });
    //POST method here for saving data
  });
});

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