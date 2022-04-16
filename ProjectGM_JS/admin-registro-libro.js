let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

//validation
const btnGuardar = document.getElementById("btn-save");

validar = () => {
  /*  const required = document.querySelectorAll(".required-field");
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
  }); */
  window.location.href = "admin-catalogo-libros.html";
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-libros.html";
  });

//btn forward
btnGuardar.addEventListener("click", validar);
