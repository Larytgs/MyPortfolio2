// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades

const express = require("express");
// Chamar a funcao express
const app = express();

//app.listen();
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
