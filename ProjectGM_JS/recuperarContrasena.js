const inputEmail = document.getElementById("input-email");
const btnSendCode = document.getElementById("btn-send-code");
const requiredFields = document.querySelectorAll(".required-field");
const btnSave = document.getElementById("btn-save");

validEMail = () => {
  let error = false;

  if (inputEmail.value == "") {
    error = true;
    inputEmail.classList.add("field-error");
  } else {
    inputEmail.classList.remove("field-error");
  }

  //final validation
  if (error) {
    Swal.fire({
      icon: "warning",
      title: "Ingresar tu correo electrónico",
      text: "Por favor revisa el campo resaltado",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Código de verificación enviado",
      text: "Por favor revise su correo electrónico y copie el código recibido",
    });
  }
};

/*valid sent code*/
validCode = () => {
  let error = false;
  requiredFields.forEach((field) => {
    if (field.value == "") {
      error = true;
      field.classList.add("field-error");
    } else {
      field.classList.remove("field-error");
    }

    //final validation
    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña no guardada",
        text: "Por favor revisa los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Contraseña guardada correctamente",
        text: "Ahora puedes iniciar sesión",
      }).then(() => {
        window.location.href = "iniciarSesion.html";
      });
    }
  });
};

btnSendCode.addEventListener("click", validEMail);
btnSave.addEventListener("click", validCode);
