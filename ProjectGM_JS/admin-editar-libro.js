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

//lista de libros
const selectAutores = document.getElementById("slt-author");
const selectDescuentos = document.getElementById("slt-discount");
const selectGeneros = document.getElementById("slt-gender");

let listaAutores = [];
let listaDescuentos = [];
let listaGeneros = [];

const inicializarListas = async () => {
  listaAutores = await obtenerDatos("/obtener-autores");
  listaDescuentos = await obtenerDatos("/obtener-descuentos");
  listaGeneros = await obtenerDatos("/obtener-generos-literarios");
  mostrarListas();
};

const mostrarListas = () => {
  //autores
  listaAutores.forEach((autor) => {
    selectAutores.options.add(new Option(autor.nombreCompleto));
    if (bookSelected.autor == autor.nombreCompleto) {
      // selectAutores[autor._id].selected = true;
    }
  });
  //decuentos
  listaDescuentos.forEach((descuento) => {
    selectDescuentos.options.add(new Option(descuento.nombre));
    selectDescuentos.addEventListener("change", () => {
      if (selectDescuentos.value == descuento.nombre) {
        document.getElementById("input-amount").value = descuento.porcentaje;
      } else if (selectDescuentos.value == 0) {
        document.getElementById("input-amount").value = 0;
      }
    });
  });

  //generoslitearios
  listaGeneros.forEach((genero) => {
    selectGeneros.options.add(new Option(genero.name));
    if (bookSelected.generoLiterario == genero.name) {
      //   selectGeneros[genero.name].selected = true;
    }
  });
};

inicializarListas();

/* fill inputs */
document.getElementById("input-id").value = bookSelected._id;
document.getElementById("input-name").value = bookSelected.nombre;
document.getElementById("input-price").value = bookSelected.precio;

if (bookSelected.stock) {
  document.getElementById("slt-stock").value = 1;
} else {
  document.getElementById("slt-stock").value = 2;
}
document.getElementById("input-idiom").value = bookSelected.idioma;

if (bookSelected.active) {
  document.getElementById("slt-status").value = 1;
} else {
  document.getElementById("slt-status").value = 2;
}

const btnGuardar = document.getElementById("btn-save");

//validation
validar = () => {
  const required = document.querySelectorAll(".required-field");
  let error = false;

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

//botones
inputImg.addEventListener("change", subirImagen);
btnGuardar.addEventListener("click", validar);
