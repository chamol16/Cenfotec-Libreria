const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");
const btnSignIn = document.getElementById("btn-signin");

const validarCredenciales = () => {
  let ingresoCorrecto = false;

  listaUsuarios.forEach((usuario) => {
    if (
      inputEmail.value == usuario.correo &&
      inputPassword.value == usuario.contrasena
    ) {
      ingresoCorrecto = true;
      localStorage.setItem("loggedUser", JSON.stringify(usuario));
    }
  });

  //alertas
  if (ingresoCorrecto) {
    Swal.fire({
      icon: "success",
      title: "Usuario autenticado",
      text: "Accediendo a la libreria",
    }).then(() => {
      window.location.href = "libreria.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Usuario no encontrado",
      text: "Usuario o contrasena incorrectos",
    });
  }
};

btnSignIn.addEventListener("click", validarCredenciales);
