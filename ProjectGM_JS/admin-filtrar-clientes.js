const metodos = document.querySelectorAll(".editar");
const btnEditar = document.getElementById("btnEditar");
const btnGuardar = document.getElementById("btnGuardar");

let idGlobal;

const edicion = () => {
  let metodoSelected;
  for (const metodo of metodos) {
    metodoSelected = metodo.checked;
    if (metodoSelected) {
      let id = "." + metodo.id;
      idGlobal = id;
      const tds = document.querySelectorAll(id);
      for (const td of tds) {
        td.contentEditable = true;
      }
    }
  }
};

const guardar = () => {
  const tds = document.querySelectorAll(idGlobal);
  for (const td of tds) {
    td.contentEditable = false;
  }
  Swal.fire({
    icon: "success",
    title: "Datos de los clientes actualizados",
    text: "Puedes continuar trabajando",
  }).then(() => {
    window.location.href = "admin-profile.html";
  });
};

btnGuardar.addEventListener("click", guardar);
btnEditar.addEventListener("click", edicion);
