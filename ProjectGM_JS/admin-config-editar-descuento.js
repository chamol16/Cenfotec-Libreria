let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const descuentoSelected = JSON.parse(localStorage.getItem("discountClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
document.getElementById("input-id").value = descuentoSelected._id;
document.getElementById("input-name").value = descuentoSelected.nombre;
document.getElementById("input-percentage").value =
  descuentoSelected.porcentaje;

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
        title: "Descuento no actualizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Descuento actualizado correctamente",
        text: "Puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-config-descuentos.html";
      });
    }
  });
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-config-descuentos.html";
  });

btnGuardar.addEventListener("click", validar);
