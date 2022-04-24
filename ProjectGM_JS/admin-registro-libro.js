let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

//variables
const inputISBN = document.getElementById("input-isbn");
const inputNombre = document.getElementById("input-name");
const selectAutores = document.getElementById("slt-author");
const inputFechaPublicacion = document.getElementById("input-release-date");
const inputEditorial = document.getElementById("input-editorial");
const inputPremio1 = document.getElementById("premio-1");
const inputPremio2 = document.getElementById("premio-2");
const inputPremio3 = document.getElementById("premio-3");
const inputResena = document.getElementById("text-review");
const inputPrecio = document.getElementById("input-price");
const selectDescuentos = document.getElementById("slt-discount");
const inputPorcentajeDescuento = document.getElementById("input-amount");
const selectStatus = document.getElementById("slt-active");
const selectGeneros = document.getElementById("slt-genero");
const selectIdioma = document.getElementById("slt-idiom");

//libros
let listaAutores = [];
let listaDescuentos = [];
let listaGenerosLiterarios = [];

const inicializarListas = async () => {
  listaAutores = await obtenerDatos("/obtener-autores");
  listaDescuentos = await obtenerDatos("/obtener-descuentos");
  listaGenerosLiterarios = await obtenerDatos("/obtener-generos-literarios");
  llenarAutores();
  llenarDescuentos();
  llenarGenerosLiterarios();
};

const llenarAutores = () => {
  listaAutores.forEach((autor) => {
    selectAutores.options.add(new Option(autor.nombreCompleto));
    selectAutores.addEventListener("change", () => {
      if (selectAutores.value == autor.nombreCompleto) {
        selectAutores.id = autor._id;
      }
    });
  });
};

const llenarDescuentos = () => {
  listaDescuentos.forEach((descuento) => {
    selectDescuentos.options.add(new Option(descuento.nombre));
    selectDescuentos.addEventListener("change", () => {
      if (selectDescuentos.value == descuento.nombre) {
        inputPorcentajeDescuento.value = descuento.porcentaje;
        selectDescuentos.id = descuento._id;
      } else if (selectDescuentos.value == 0) {
        selectDescuentos.id = 0;
        inputPorcentajeDescuento.value = "";
      }
    });
  });
};

const llenarGenerosLiterarios = () => {
  listaGenerosLiterarios.forEach((genero) => {
    selectGeneros.options.add(new Option(genero.nombre));
    selectGeneros.addEventListener("change", () => {
      if (selectGeneros.value == genero.nombre) {
        selectGeneros.id = genero._id;
      }
    });
  });
};

inicializarListas();

//activo
let stock = false;
if (selectStatus.value == 1) {
  stock = true;
} else {
  stock = false;
}

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

//validation
const btnGuardar = document.getElementById("btn-save");

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
      //password validation
      Swal.fire({
        icon: "warning",
        title: "Libro no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Libro registrado correctamente",
        text: "Puedes continuar trabajando",
      })
        .then(() => {
          let libro = {
            foto: uploadedImg,
            ISBN: inputISBN.value,
            nombre: inputNombre.value,
            autor: selectAutores.value,
            fechaPublicacion: inputFechaPublicacion.value,
            editorial: inputEditorial.value,
            premiosGanados: [
              inputPremio1.value,
              inputPremio2.value,
              inputPremio3.value,
            ],
            resena: inputResena.value,
            precio: inputPrecio.value,
            descuento: selectDescuentos.value,
            porcentajeDescuento: inputPorcentajeDescuento.value,
            activo: stock,
            generoLiterario: selectGeneros.value,
            idioma: selectIdioma.value,
            autorId: selectAutores.id,
            generoLiterarioId: selectGeneros.id,
            descuentoId: selectDescuentos.id,
          };
          registrarDatos(libro, "/registrar-libro");
        })
        .then(() => {
          window.location.href = "admin-catalogo-libros.html";
        });
    }
  });
};

btnGuardar.addEventListener("click", validar);

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-libros.html";
  });
