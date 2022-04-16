let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

//subir imagen de usuario
const displayImgDiv = document.querySelector("#display-img");
const inputImg = document.querySelector("#input-img");
const btnRegistrar = document.getElementById("btn-register");
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

inputImg.addEventListener("change", subirImagen);
btnRegistrar.addEventListener("click", validar);

/* llenar premios */
const firstAward = document.getElementById("first-award-won");
const secondAward = document.getElementById("second-award-won");
const thirdAward = document.getElementById("third-award-won");

mostrarPremios = () => {
  listaPremios.forEach((premio) => {
    firstAward.options.add(new Option(premio.nombre));
    secondAward.options.add(new Option(premio.nombre));
    thirdAward.options.add(new Option(premio.nombre));
  });
};

mostrarPremios();

/*Nobel*/
const selectNobel = document.getElementById("slt-nobel");

anularNobelYear = (e) => {
  if (e.target.value == 1) {
    document.getElementById("nobel-year").removeAttribute("disabled");
  } else if (e.target.value == 2) {
    document.getElementById("nobel-year").value = "";
    document.getElementById("nobel-year").setAttribute("disabled", true);
    document.getElementById("nobel-year").classList.remove("field-error");
    document.getElementById("nobel-year").classList.remove("required-field");
  }
};

selectNobel.addEventListener("change", anularNobelYear);

//document.getElementById("nobel-year").value = authorSelected.anoNobel;
/*   document.getElementById("slt-nobel").setAttribute("disabled", true); */
/*   document.getElementById("nobel-year").setAttribute("disabled", true); */
