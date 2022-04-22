"use strict";

const registrarDatos = async (datos, endPoint) => {
  let url = `http://localhost:3000/api${endPoint}`;

  await axios({
    method: "post",
    url: url,
    data: datos,
  });
};

const obtenerDatos = async (endPoint) => {
  let url = `http://localhost:3000/api${endPoint}`;
  let listaDatos = [];

  await axios({
    method: "get",
    url: url,
  }).then((response) => {
    listaDatos = response.data;
  });

  return listaDatos;
};
