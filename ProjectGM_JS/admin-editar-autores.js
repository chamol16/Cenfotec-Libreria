let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const authorSelected = JSON.parse(localStorage.getItem("authorClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
document.getElementById("input-name").value = authorSelected.nombreCompleto;
document.getElementById("slt-country").value = authorSelected.paisNacimiento;
document.getElementById("input-birth-date").value =
  authorSelected.fechaNacimiento;
document.getElementById("input-death-date").value =
  authorSelected.fechaDefuncion;

let sexo;
getGender = () => {
  if (authorSelected.genero.toLowerCase() == "masculino") {
    sexo = 1;
  } else if (authorSelected.genero.toLowerCase() == "femenino") {
    sexo = 2;
  } else {
    sexo = 3;
  }
  document.getElementById("slt-gender").value = sexo;
};
getGender();

//lista de libros
let listaLibros = [];
let listaPremios = [];

const books = document.querySelector("#slt-libros-publicados");
const firstAward = document.querySelector("#first-award-won");
const secondAward = document.querySelector("#second-award-won");
const thirdAward = document.querySelector("#third-award-won");

const inicializarListas = async () => {
  listaLibros = await obtenerDatos("/obtener-libros");
  listaPremios = await obtenerDatos("/obtener-premios");
  mostrarListas();
};

const mostrarListas = () => {
  listaLibros.forEach((libro) => {
    if (libro.autor == authorSelected.nombreCompleto) {
      books.options.add(new Option(libro.nombre));
    }
  });

  listaPremios.forEach((premio) => {
    if (premio.nombre == authorSelected.premiosGanados) {
      firstAward.options.add(new Option(premio.nombre));
      secondAward.options.add(new Option(premio.nombre));
      thirdAward.options.add(new Option(premio.nombre));
    }
  });
};

inicializarListas();

//awards won

//cargar el nobel
const selectNobel = document.getElementById("slt-nobel");
const nobelYear = document.getElementById("nobel-year");
if (authorSelected.nobel) {
  selectNobel.value = 1;
  nobelYear.value = authorSelected.anoNobel;
} else {
  selectNobel.value = 2;
  nobelYear.value = "";
  nobelYear.setAttribute("disabled", true);
}

//nobel on change
anularNobelYear = (e) => {
  if (e.target.value == 1) {
    nobelYear.removeAttribute("disabled");
  } else if (e.target.value == 2) {
    nobelYear.value = "";
    nobelYear.setAttribute("disabled", true);
    nobelYear.classList.remove("field-error");
    nobelYear.classList.remove("required-field");
  }
};

selectNobel.addEventListener("change", anularNobelYear);

//resena
document.getElementById("resena").textContent = authorSelected.biografia;

//validation
const btnGuardar = document.getElementById("btn-save");
//validation
validar = () => {
  const required = document.querySelectorAll(".required-field");
  const nacimiento = document.getElementById("input-birth-date");
  const defuncion = document.getElementById("input-death-date");

  let error = false;
  let dateError = false;

  //blank spaces valid
  required.forEach((field) => {
    if (field.value == "") {
      error = true;
      field.classList.add("field-error");
      //dates validation
    } else if (nacimiento.value != "" && defuncion.value == "") {
      dateError = false;
      nacimiento.classList.remove("field-error");
    } else if (nacimiento.value > defuncion.value) {
      dateError = true;
      nacimiento.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
      nacimiento.classList.remove("field-error");
    }

    if (error) {
      //password validation
      Swal.fire({
        icon: "warning",
        title: "Usuario no registrado",
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
      }).then(() => {
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
