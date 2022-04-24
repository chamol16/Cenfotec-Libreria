let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* llenar premios */
const premio1 = document.getElementById("premio-1");
const premio2 = document.getElementById("premio-2");
const premio3 = document.getElementById("premio-3");

//subir imagen de usuario
const displayImgDiv = document.querySelector("#display-img");
const inputImg = document.querySelector("#input-img");
const btnGuardar = document.getElementById("btn-save");
let uploadedImg = "";

subirImagen = () => {
  const reader = new FileReader();
  const file = inputImg.files[0];
  reader.addEventListener("load", (files) => {
    uploadedImg = reader.result;
    displayImgDiv.setAttribute("src", `${uploadedImg}`);
  });
  reader.readAsDataURL(file);
};

//variables de inputs
const nombre = document.getElementById("input-name");
const paisNacimiento = document.getElementById("slt-country");
const fechaNacimiento = document.getElementById("input-birth-date");
const fechaDefuncion = document.getElementById("input-death-date");
const genero = document.getElementById("slt-gender");
const resena = document.getElementById("text-review");

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
      //dates validation
    } else if (fechaNacimiento.value != "" && fechaDefuncion.value == "") {
      dateError = false;
      fechaNacimiento.classList.remove("field-error");
    } else if (fechaNacimiento.value > fechaDefuncion.value) {
      dateError = true;
      fechaNacimiento.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
      fechaNacimiento.classList.remove("field-error");
    }

    if (error) {
      //password validation
      Swal.fire({
        icon: "warning",
        title: "Autor no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else if (dateError) {
      Swal.fire({
        icon: "warning",
        title: "Fecha incorrecta",
        text: "La fecha de nacimiento no puede ser mayor a la fecha de defuncion",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Autor registrado correctamente",
        text: "Puedes continuar trabajando",
      })
        .then(() => {
          let autor = {
            nombreCompleto: nombre.value,
            foto: uploadedImg,
            paisNacimiento: paisNacimiento.value,
            fechaNacimiento: fechaNacimiento.value,
            fechaDefuncion: fechaDefuncion.value,
            genero: genero.value,
            nobel: esNobel,
            anoNobel: nobelYear.value,
            premiosGanados: [premio1.value, premio2.value, premio3.value],
            biografia: resena.value,
          };
          registrarDatos(autor, "/registrar-autor");
        })
        .then(() => {
          window.location.href = "admin-catalogo-autores.html";
        });
    }
  });
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-autores.html";
  });

inputImg.addEventListener("change", subirImagen);
btnGuardar.addEventListener("click", validar);

/*Nobel*/
const selectNobel = document.getElementById("slt-nobel");
const nobelYear = document.getElementById("nobel-year");
let esNobel = false;
anularNobelYear = (e) => {
  if (e.target.value == 1) {
    esNobel = true;
    nobelYear.removeAttribute("disabled");
  } else if (e.target.value == 2) {
    esNobel = false;
    nobelYear.value = "";
    nobelYear.setAttribute("disabled", true);
    nobelYear.classList.remove("field-error");
    nobelYear.classList.remove("required-field");
  }
};

selectNobel.addEventListener("change", anularNobelYear);
