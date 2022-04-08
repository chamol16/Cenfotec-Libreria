//clear local storage
let bookSelected = JSON.parse(localStorage.getItem("bookClicked"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (bookSelected) {
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
};

btnAddCart.addEventListener("click", addToCart);
