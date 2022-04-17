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
listaPuntosRetiro.forEach((punto) => {
  if (puntoSelected.id == punto.id) {
    document.getElementById("input-id").value = punto.id;
    document.getElementById("input-socio").value = punto.socioName;
    document.getElementById("input-provincia").value = punto.provincia;
    document.getElementById("input-canton").value = punto.canton;
    document.getElementById("input-distrito").value = punto.distrito;
    document.getElementById("input-direccion-exacta").value = punto.direccion;
  }
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
