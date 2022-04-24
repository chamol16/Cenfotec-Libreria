let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* consulta DB */
const selectSocios = document.getElementById("slt-socio");
const socioId = document.getElementById("input-socio-id");
const cuerpoTabla = document.querySelector("#tbl-puntos-retiro tbody");
let listaSocios = [];

const inicializarListas = async () => {
  listaSocios = await obtenerDatos("/obtener-socios-comerciales");
  llenarSelect();
};

llenarSelect = () => {
  listaSocios.forEach((socio) => {
    selectSocios.options.add(new Option(socio.nombre));
    selectSocios.addEventListener("change", () => {
      if (selectSocios.value == socio.nombre) {
        socioId.value = socio._id;
      } else if (selectSocios.value == 0) {
        socioId.value = "";
      }
    });
  });
};

inicializarListas();

//Costa Rica
const listaProvincias = document.querySelector("#slt-provincia");
const listaCantones = document.querySelector("#slt-canton");
const listaDistritos = document.querySelector("#slt-distrito");
const inputDireccion = document.getElementById("direccion");

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
        title: "Punto de retiro no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Punto de retiro registrado correctamente",
        text: "Puedes continuar trabajando",
      })
        .then(() => {
          let punto = {
            provincia: listaProvincias.value,
            canton: listaCantones.value,
            distrito: listaDistritos.value,
            direccion: inputDireccion.value,
            socioId: socioId.value,
          };
          registrarDatos(punto, "/registrar-punto-retiro");
        })
        .then(() => {
          window.location.href = "admin-catalogo-puntos-retiro.html";
        });
    }
  });
};

btnGuardar.addEventListener("click", validar);

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-puntos-retiro.html";
  });
