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
const inputNombre = document.getElementById("input-name");

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
        title: "Género literario no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Género literario registrado correctamente",
        text: "Puedes continuar trabajando",
      })
        .then(() => {
          let genero = {
            nombre: inputNombre.value,
          };
          registrarDatos(genero, "/registrar-genero-literario");
        })
        .then(() => {
          window.location.href = "admin-catalogo-generos-literarios.html";
        });
    }
  });
};

btnGuardar.addEventListener("click", validar);

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-generos-literarios.html";
  });
