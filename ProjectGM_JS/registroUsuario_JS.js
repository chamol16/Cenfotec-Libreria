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

const btnRegistrar = document.getElementById("btn-register");

/* setProvinces = () => {
  provincias.forEach((province) => {
    const newOptionProvince = document.createElement("option");
    newOptionProvince.innerHTML = `${JSON.stringify(province.name).replaceAll(
      `"`,
      ``
    )}`;
    selectProvince.appendChild(newOptionProvince);
  });
};

getCanton = (e) => {
  let cantones = [];

  if (e.target.value === "San José") {
    cantones = cantonesSanJose;
  } else if (e.target.value === "Alajuela") {
    cantones = cantonesAlajuela;
  } else if (e.target.value === "Cartago") {
    cantones = cantonesCartago;
  } else if (e.target.value === "Heredia") {
    cantones = cantonesHeredia;
  } else if (e.target.value === "Guanacaste") {
    cantones = cantonesGuanacaste;
  } else if (e.target.value === "Puntarenas") {
    cantones = cantonesPuntarenas;
  } else {
    cantones = cantonesLimon;
  }

  cantones.forEach((canton) => {
    var option = document.createElement("option");
    option.text = `${JSON.stringify(canton.name).replaceAll('"', "")}`;
    selectCanton.appendChild(option);
  });
};

setProvinces();

resetCanton = () => {
  console.log("reset");
};

;
selectProvince.addEventListener("change", getCanton);
 */
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

verId = () => {
  const hijos = document.querySelectorAll(".province-class");
  let id;
  for (let i = 0; i < hijos.length; i++) {
    id = hijos[i].id;
    setCanton(id);
  }
};

setCanton = (id) => {
  console.log(id);
};
selectProvince.addEventListener("change", verId);

btnRegistrar.addEventListener("click", validar);
