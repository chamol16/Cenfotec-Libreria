let adminConnected = JSON.parse(localStorage.getItem("loggedUser"));
const inicioElementoA = document.getElementById("iniciar-sesion-a");

if (adminConnected) {
  inicioElementoA.textContent = "Cerrar sesión";
}

logOut = () => {
  localStorage.clear();
};

inicioElementoA.addEventListener("click", logOut);

//select autores
const selectAutores = document.getElementById("slt-author");
listaAutores.forEach((autor) => {
  selectAutores.options.add(new Option(autor.nombreCompleto));
});

//select premios ganados
const selectAward1 = document.getElementById("slt-award-1");
const selectAward2 = document.getElementById("slt-award-2");
const selectAward3 = document.getElementById("slt-award-3");

listaPremios.forEach((premio) => {
  selectAward1.options.add(new Option(premio.nombre));
  selectAward2.options.add(new Option(premio.nombre));
  selectAward3.options.add(new Option(premio.nombre));
});
//select descuentos && onchange get percentage
const selectDescuentos = document.getElementById("slt-discount");
listaDescuentos.forEach((descuento) => {
  selectDescuentos.options.add(new Option(descuento.nombre));
  selectDescuentos.addEventListener("change", () => {
    if (selectDescuentos.value == descuento.nombre) {
      document.getElementById("input-amount").value = descuento.porcentaje;
    } else if (selectDescuentos.value == 0) {
      document.getElementById("input-amount").value = "";
    }
  });
});

//validation
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
      //password validation
      Swal.fire({
        icon: "warning",
        title: "Libro no registrado",
        text: "Por favor revise los campos resaltados",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Libro registrado correctamente",
        text: "Puedes continuar trabajando",
      }).then(() => {
        window.location.href = "admin-catalogo-libros.html";
      });
    }
  });
};

btnGuardar.addEventListener("click", validar);

//atras btn
const btnCancelar = document
  .getElementById("btn-cancel")
  .addEventListener("click", () => {
    window.location.href = "admin-catalogo-libros.html";
  });
