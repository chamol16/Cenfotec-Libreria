let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const puntoSelected = JSON.parse(localStorage.getItem("pointClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
const cuerpoTabla = document.querySelector("#tbl-puntos-retiro tbody");
let listaPuntosRetiro = [];
let listaSocios = [];

const inicializarListas = async () => {
  listaPuntosRetiro = await obtenerDatos("/obtener-puntos-retiro");
  listaSocios = await obtenerDatos("/obtener-socios-comerciales");
  llenarCampos();
};

const llenarCampos = () => {
  listaSocios.forEach((socio) => {
    if (puntoSelected.socioId == socio._id) {
      document.getElementById("input-id").value = puntoSelected._id;
      document.getElementById("input-socio").value = socio.nombre;
      /*         document.getElementById("input-provincia").value = punto.provincia;
        document.getElementById("input-canton").value = punto.canton;
        document.getElementById("input-distrito").value = punto.distrito; */
      document.getElementById("input-direccion-exacta").value =
        puntoSelected.direccion;
    }
  });
};

inicializarListas();

//Costa Rica
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
      Swal.fire({
        icon: "warning",
        title: "Punto de retiro no actualizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Punto de retiro actualizado correctamente",
        text: "Puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-catalogo-puntos-retiro.html";
      });
    }
  });
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-puntos-retiro.html";
  });

btnGuardar.addEventListener("click", validar);
