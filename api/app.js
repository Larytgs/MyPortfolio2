// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades

const express = require("express");
// Chamar a funcao express
const app = express();

// Testar conexão com banco de dados
const db = require("./db/models");

// Incluir os Controllers
const mensagens = require("./controllers/mensagens");

// Criar o middleware para receber os dados no corpo da requisicao
// Middlewar é uma instrução que vai ser executada antes de acessara rota
app.use(express.json());

// Criar as rotas
app.use("/message", mensagens); //quando o usuario colocar mensagem, ele quer acessar a rota mensagens

// Iniciaro servidor na porta 8080
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
