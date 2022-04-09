const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnSignIn = document.getElementById("btn-signin");

const validarCredenciales = () => {
  let ingresoCorrecto = false;

  //alertas
  finalValidation = (tipoDeUsuario) => {
    if (ingresoCorrecto) {
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Usuario no encontrado",
        text: "Usuario o contrasena incorrectos",
      });
    }
  };

  listaUsuarios.forEach((usuario) => {
    let user = 0;
    if (
      inputEmail.value == usuario.correo &&
      inputPassword.value == usuario.contrasena
    ) {
      ingresoCorrecto = true;
      localStorage.setItem("loggedUser", JSON.stringify(usuario));
      user = usuario.tipo;
      finalValidation(user);
    }
  });
};

btnSignIn.addEventListener("click", validarCredenciales);
