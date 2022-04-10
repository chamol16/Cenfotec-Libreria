let userConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (userConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

const inputName = (document.getElementById("nombreUsuario").value =
  userConnected.nombre);
const inputFirstLastName = (document.getElementById(
  "input-first-last-name"
).value = userConnected.primerApellido);
const inputSecondLastName = (document.getElementById(
  "input-second-last-name"
).value = userConnected.segundoApellido);
const inputGender = (document.getElementById("slt-gender").value =
  userConnected.genero);
const inputTypeId = (document.getElementById("slt-type-id").value =
  userConnected.tipoId);
const inputId = (document.getElementById("input-id").value = userConnected.id);
const inputEmail = (document.getElementById("input-email").value =
  userConnected.correo);
const inputPassword = (document.getElementById("input-password").value =
  userConnected.contrasena);
/* const listaProvincias = document
  .querySelector("#slt-province")
  .options.add(new Option(userConnected.provincia));
const listaCantones = document
  .querySelector("#slt-canton")
  .options.add(new Option(userConnected.canton));
const listaDistritos = document
  .querySelector("#slt-district")
  .options.add(new Option(userConnected.distrito)); */
const inputAddress = (document.getElementById("input-address").value =
  userConnected.direccion);
const selectGenFav = document
  .getElementById("generos-favoritos")
  .options.add(new Option(userConnected.generoFavorito));
const selectAutorFav = document
  .getElementById("autores-favoritos")
  .options.add(new Option(userConnected.autorFavorito));

/* const inputName = document.getElementById("input-name");
const inputFirstLastName = document.getElementById("input-first-last-name");
const inputSecondLastName = document.getElementById("input-second-last-name");
const inputGender = document.getElementById("slt-gender");
const inputTypeId = document.getElementById("input-type-id");
const inputId = document.getElementById("input-id");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");*/
const btnSave = document.getElementById("btn-save");
const listaProvincias = document.querySelector("#slt-province");
const listaCantones = document.querySelector("#slt-canton");
const listaDistritos = document.querySelector("#slt-district");

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
    } else {
      field.classList.remove("field-error");
    }

    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Los cambios no se han realizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Datos del usuario actualizados",
        text: "Ahora puedes continuar comprando",
      }).then(() => {
        window.location.href = "perfil.html";
      });
    }
  });
};

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
btnSave.addEventListener("click", validar);
