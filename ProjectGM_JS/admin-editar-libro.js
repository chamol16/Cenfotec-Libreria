let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const bookSelected = JSON.parse(localStorage.getItem("bookClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
document.getElementById("input-id").value = bookSelected.id;
document.getElementById("input-name").value = bookSelected.name;

//select con todos los autores
const selectAutores = document.getElementById("slt-author");
listaAutores.forEach((autor) => {
  selectAutores.options.add(new Option(autor.nombreCompleto));
  if (bookSelected.authorId == autor.id) {
    selectAutores[autor.id].selected = true;
  }
});

document.getElementById("input-price").value = bookSelected.price;

if (bookSelected.stock) {
  document.getElementById("slt-stock").value = 1;
} else {
  document.getElementById("slt-stock").value = 2;
}
document.getElementById("input-idiom").value = bookSelected.idiom;

//select con generos literarios
const selectGeneros = document.getElementById("slt-gender");

listaGeneros.forEach((genero) => {
  selectGeneros.options.add(new Option(genero.name));
  if (bookSelected.genderId == genero.id) {
    selectGeneros[genero.id].selected = true;
  }
});

/*status */
console.log(bookSelected.active);
if (bookSelected.active) {
  document.getElementById("slt-status").value = 1;
} else {
  document.getElementById("slt-status").value = 2;
}

/*descuentos select */
//ids => first-discount,2n,3rd

const btnGuardar = document.getElementById("btn-save");
//validation
validar = () => {
  const required = document.querySelectorAll(".required-field");

  let error = false;
  let dateError = false;

  //blank spaces valid
  required.forEach((field) => {
    if (field.value == "") {
      error = true;
      field.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
    }

    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Libro no actualizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Libro editado correctamente",
        text: "Puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-catalogo-libros.html";
      });
    }
  });
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-libros.html";
  });

//subir imagen de usuario
const displayImgDiv = document.querySelector("#display-img");
const inputImg = document.querySelector("#input-img");
let uploadedImg = "";

subirImagen = () => {
  const reader = new FileReader();
  const file = inputImg.files[0];
  reader.addEventListener("load", (files) => {
    uploadedImg = reader.result;
    displayImgDiv.style.backgroundImage = `url(${uploadedImg})`;
  });
  reader.readAsDataURL(file);
};
inputImg.addEventListener("change", subirImagen);
btnGuardar.addEventListener("click", validar);
