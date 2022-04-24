"use strict";

const registrarDatos = async (data, endPoint) => {
  let url = `http://localhost:3000/api${endPoint}`;

  await axios({
    method: "post",
    url: url,
    responseType: "json",
    data: data,
  });
};

const obtenerDatos = async (endPoint) => {
  let url = `http://localhost:3000/api${endPoint}`;
  let listaDatos = [];

  await axios({
    method: "get",
    url: url,
    responseType: "json",
  })
    .then((response) => {
      listaDatos = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return listaDatos;
};
