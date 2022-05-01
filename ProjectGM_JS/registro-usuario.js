/* function iniciarMap() {
  var coord = { lat: 9.9324445, lng: -84.0332054 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
} */

const inputName = document.getElementById("input-name");
const inputFirstLastName = document.getElementById("input-first-last-name");
const inputSecondLastName = document.getElementById("input-second-last-name");
const inputGender = document.getElementById("slt-gender");
const inputTypeId = document.getElementById("slt-type-id");
const inputId = document.getElementById("input-id");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnRegistrar = document.getElementById("btn-register");
const listaProvincias = document.querySelector("#slt-province");
const listaCantones = document.querySelector("#slt-canton");
const listaDistritos = document.querySelector("#slt-district");
const direccion = document.getElementById("textarea-address");
const generoFavorito1 = document.querySelector("#genero-favorito-1");
const generoFavorito2 = document.querySelector("#genero-favorito-2");
const generoFavorito3 = document.querySelector("#genero-favorito-3");
const autorFavorito1 = document.querySelector("#autor-favorito-1");
const autorFavorito2 = document.querySelector("#autor-favorito-2");
const autorFavorito3 = document.querySelector("#autor-favorito-3");

let provinciaSeleccionada;
let cantonSeleccionado;
const mostrarProvincias = () => {
  distribucion.provincias.forEach((provincia) => {
    listaProvincias.options.add(new Option(provincia.title));
  });
};
const mostrarCantones = (nombreProvincia) => {
  listaCantones.innerHTML = "";
  listaCantones.options.add(new Option("-- Seleccione un cantón --"));
  distribucion.provincias.forEach((provincia) => {
    if (provinciaSeleccionada == provincia.title) {
      provincia.cantones.forEach((canton) => {
        listaCantones.options.add(new Option(canton.title));
      });
    }
  });
};
const mostrarDistritos = (nombreCanton) => {
  listaDistritos.innerHTML = "";
  listaDistritos.options.add(new Option("-- Seleccione un distrito --"));
  distribucion.provincias.forEach((provincia) => {
    if (provinciaSeleccionada == provincia.title) {
      provincia.cantones.forEach((canton) => {
        if (cantonSeleccionado == canton.title) {
          canton.distritos.forEach((distrito) => {
            listaDistritos.options.add(new Option(distrito.title));
          });
        }
      });
    }
  });
};
mostrarProvincias();
listaProvincias.addEventListener("change", () => {
  provinciaSeleccionada = listaProvincias.value;
  mostrarCantones(provinciaSeleccionada);
});
listaCantones.addEventListener("change", () => {
  cantonSeleccionado = listaCantones.value;
  mostrarDistritos(cantonSeleccionado);
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

//validation
validar = () => {
  const required = document.querySelectorAll(".required-field");
  let error = false;
  let passwordError = false;

  //blank spaces valid
  required.forEach((field) => {
    if (field.value == "") {
      error = true;
      field.classList.add("field-error");
      //valid password
    } else if (
      inputPassword.value.length < 8 ||
      inputPassword.value.length > 12
    ) {
      passwordError = true;
      field.classList.remove("field-error");
      document.getElementById("input-password").classList.add("field-error");
    } else {
      field.classList.remove("field-error");
    }

    //password validation
    if (error) {
      //TEST foto
     // console.log(uploadedImg);

      Swal.fire({
        icon: "warning",
        title: "Usuario no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else if (passwordError) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña incorrecta",
        text: "La contraseña debe ser entre 8 y 12 caracteres, alfanúmerica y al menos una letra mayúscula",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuario registrado correctamente",
        text: "Ahora puedes iniciar sesión",
      })
        .then(() => {
          let usuario = {
            correo: inputEmail.value,
            identificacion: inputId.value,
            tipoUsuario: 2,
            tipoId: inputTypeId.value,
            nombre: inputName.value,
            primerApellido: inputFirstLastName.value,
            segundoApellido: inputSecondLastName.value,
            contrasena: inputPassword.value,
            genero: inputGender.value,
            provincia: listaProvincias.value,
            canton: listaCantones.value,
            distrito: listaDistritos.value,
            direccion: direccion.value,
            generosFavoritos: [
              generoFavorito1.value,
              generoFavorito2.value,
              generoFavorito3.value,
            ],
            autoresFavoritos: [
              autorFavorito1.value,
              autorFavorito2.value,
              autorFavorito3.value,
            ],
            foto: uploadedImg,
            libroFan: false,
          };
          registrarDatos(usuario, "/registrar-usuario");
        })
        .then(() => {
          window.location.href = "login.html";
        });
    }
  });
};

inputImg.addEventListener("change", subirImagen);
btnRegistrar.addEventListener("click", validar);
