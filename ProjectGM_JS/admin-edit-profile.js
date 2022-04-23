let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

/*data */

document.getElementById("name").value = adminConnected.nombre;
document.getElementById("first-last-name").value =
  adminConnected.primerApellido;
document.getElementById("second-last-name").value =
  adminConnected.segundoApellido;
document.getElementById("phone").value = adminConnected.telefono;
document.getElementById("email").value = adminConnected.correo;
document.getElementById("address").value = adminConnected.direccion;
document.getElementById("id").value = adminConnected.identificacion;
document.getElementById("password").value = adminConnected.contrasena;
document.getElementById("confirm-password").value = adminConnected.contrasena;

const inputs = document.querySelectorAll(".input");

validar = () => {
  let error = false;

  inputs.forEach((input) => {
    if (input.value == "") {
      error = true;
      input.classList.add("field-error");
    } else {
      input.classList.remove("field-error");
    }

    //final validation
    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Usuario no actualizado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Perfil de usuario actualizado correctamente",
        text: "Ahora puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-profile.html";
      });
    }
  });
};

//botones
document.getElementById("btn-cancel").addEventListener("click", () => {
  window.location.href = "admin-profile.html";
});
document.getElementById("btn-save").addEventListener("click", validar);
