// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

// Importar a biblioteca para permitir conexão externa
const cors = require("cors");

// Chamar a funcao express
const app = express();

// Incluir os Controllers
const mensagens = require("./controllers/mensagens");

// Criar o middleware para receber os dados no corpo da requisicao
// Middlewar é uma instrução que vai ser executada antes de acessara rota
app.use(express.json());

// Middleware: permitir requisições externas com CORS (coloque isso sozinho)
app.use(
  cors({
    origin: "https://api.meusite.com",
  })
);

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {
  // Qualquer endereço pode fazer requisição
  res.header("Access-Control-Allow-Origin", "*");
  // Tipos de método que a API aceita
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  // Permitir o envio de dados para API
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // Executar o cors
  app.use(cors());
  // Quando não houver erro deve continuar o processamento
  next();
});

// Criar as rotas
app.use("/message", mensagens); //quando o usuario colocar mensagem, ele quer acessar a rota mensagens

// // Iniciaro servidor na porta 8080
// app.listen(8080, () => {
//   console.log("Servidor iniciado na porta 8080: http://localhost:8080");
// });
module.exports = app;
