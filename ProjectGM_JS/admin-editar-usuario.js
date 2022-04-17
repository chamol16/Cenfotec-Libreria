let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");
const userSelected = JSON.parse(localStorage.getItem("userClicked"));

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/* fill inputs */
listaUsuarios.forEach((usuario) => {
  if (userSelected.id == usuario.id) {
    document.getElementById("input-email").value = usuario.correo;
    document.getElementById("input-password").value = usuario.contrasena;
    document.getElementById("input-confirm").value = usuario.contrasena;
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
        title: "Usuario no actualizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuario actualizado correctamente",
        text: "Puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-catalogo-usuarios.html";
      });
    }
  });
};

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-usuarios.html";
  });

btnGuardar.addEventListener("click", validar);
