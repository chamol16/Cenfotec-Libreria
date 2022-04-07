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
const inputTypeId = document.getElementById("input-type-id");
const inputId = document.getElementById("input-id");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const selectProvince = document.getElementById("slt-province");
const selectCanton = document.getElementById("slt-canton");
const selectDistrict = document.getElementById("slt-district");

const btnRegistrar = document.getElementById("btn-register");
const arrayProvincias = [
  "San José",
  "Alajuela",
  "Cartago",
  "Heredia",
  "Guanacaste",
  "Puntarenas",
  "Limón",
];

setProvinces = () => {
  fetch("https://ubicaciones.paginasweb.cr/provincias.json")
    .then((response) => response.json())
    .then((data) => {
      const idProvincia = Object.keys(data);
      const nombreProvincia = Object.values(data);
      for (let i = 0; i < idProvincia.length; i++) {
        let option = document.createElement("option");
        option.textContent = nombreProvincia[i];
        option.className = "province-class";
        option.id = idProvincia[i];
        selectProvince.appendChild(option);
      }
    });
};

validar = () => {
  const required = document.querySelectorAll(".required-field");
  let error = false;

  required.forEach((field) => {
    if (field.value == "") {
      error = true;
      field.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
    }

    //Validación final
    if (error == true) {
      Swal.fire({
        icon: "warning",
        title: "Usuario no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: "Revise su correo electrónico para validar su cuenta",
      }).then(() => {
        window.location.href = "iniciarSesion.html";
      });
    }
  });
};

setProvinces();

setCanton = () => {
  let id;
  let provincia = selectProvince.value;
  for (let i = 0; i < arrayProvincias.length; i++) {
    if (provincia == arrayProvincias[i]) {
      id = i + 1;
    }
  }
  fetch(`https://ubicaciones.paginasweb.cr/provincia/${id}/cantones.json`)
    .then((response) => response.json())
    .then((data) => {
      const idCanton = Object.keys(data);
      const nombreCanton = Object.values(data);
      for (let i = 0; i < idCanton.length; i++) {
        let option = document.createElement("option");
        option.textContent = nombreCanton[i];
        option.className = "canton-class";
        option.id = idCanton[i];
        selectCanton.appendChild(option);
      }
    });
};

setDistrito = () => {
  let provinceId, cantonId;

  provinceId = selectProvince.options[selectProvince.options.selectedIndex];
  cantonId = selectCanton.options[selectCanton.options.selectedIndex];
  //console.log(provinceId.id, cantonId.id);

  fetch(
    `https://ubicaciones.paginasweb.cr/provincia/${provinceId.id}/canton/${cantonId.id}/distritos.json`
  )
    .then((response) => response.json())
    .then((data) => {
      const idDistrito = Object.keys(data);
      const nombreDistrito = Object.values(data);
      for (let i = 0; i < idDistrito.length; i++) {
        let option = document.createElement("option");
        option.textContent = nombreDistrito[i];
        option.className = "distrito-class";
        option.id = idDistrito[i];
        selectDistrict.appendChild(option);
      }
    });
};

//imgs
const displayImgDiv = document.querySelector("#display-img");
const inputImg = document.querySelector("#input-img");
let uploadedImg = "";

subirImagen = () => {
  //  console.log(inputImg.value);
  const reader = new FileReader();
  const file = inputImg.files[0];
  reader.addEventListener("load", (files) => {
    uploadedImg = reader.result;
    displayImgDiv.style.backgroundImage = `url(${uploadedImg})`;
  });
  reader.readAsDataURL(file);
};

selectProvince.addEventListener("change", setCanton);
selectCanton.addEventListener("change", setDistrito);
inputImg.addEventListener("change", subirImagen);
btnRegistrar.addEventListener("click", validar);
