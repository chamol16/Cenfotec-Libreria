const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnSignIn = document.getElementById("btn-signin");

const validarCredenciales = () => {
  let inputError = false;

  listaUsuarios.forEach((usuario) => {
    let user = 0;

    if (inputEmail.value == "" || inputPassword.value == "") {
      inputEmail.classList.add("field-error");
      inputPassword.classList.add("field-error");
      user = usuario.tipo;
      inputError = true;
      finalValidation(user, inputError);
    } else if (
      inputEmail.value == usuario.correo &&
      inputPassword.value == usuario.contrasena
    ) {
      localStorage.setItem("loggedUser", JSON.stringify(usuario));
      user = usuario.tipoUsuario;
      inputError = false;
      finalValidation(user, inputError);
    }
  });
};

finalValidation = (tipoDeUsuario, error) => {
  if (error) {
    Swal.fire({
      icon: "warning",
      title: "Usuario no autenticado",
      text: "Por favor revise los campos resaltados",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Usuario autenticado",
      text: "Accediendo a la libreria",
    }).then(() => {
      if (tipoDeUsuario == 1) {
        window.location.href = "admin-profile.html";
      } else {
        window.location.href = "libreria.html";
      }
    });
  }
};

btnSignIn.addEventListener("click", validarCredenciales);

/*ojito pass */
document.getElementById("btn-ver").addEventListener("click", () => {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});
