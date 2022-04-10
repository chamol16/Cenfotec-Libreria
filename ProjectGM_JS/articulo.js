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

//colect data from DB
document.getElementById("book-name").textContent = bookSelected.name;
document.getElementById("book-idiom").textContent = bookSelected.idiom;
document.getElementById("book-gender").textContent = bookSelected.gender;
document.getElementById("book-price").textContent = bookSelected.price;
const bookStock = document.getElementById("book-stock");
document.getElementById("book-author").textContent = bookSelected.author;
document.getElementById("book-img").setAttribute("src", bookSelected.img);

/*perfil and listas*/
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

//consultar stock
if (bookSelected.stock) {
  bookStock.textContent = "En inventario";
} else {
  bookStock.textContent = "No disponible temporalmente";
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
    //console.log(`feather of index ${clickedIdx} was clicked`);
    //POST here for keeping user data
  });
});
