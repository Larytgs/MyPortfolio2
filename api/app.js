// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

// Importar a biblioteca para permitir conexão externa
const cors = require("cors");

// Chamar a funcao express
const app = express();

// Incluir os Controllers
const mensagens = require("./controllers/mensagens");

// Add pelo chat
// const allowedOrigins = [
//   "http://localhost:8080",
//   "https://meusite.com", // produção
//   "http://localhost:5173", // desenvolvimento local
//   "https://api.meusite.com", // só + um teste
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//   })
// );

// Criar o middleware para receber os dados no corpo da requisicao
// Middlewar é uma instrução que vai ser executada antes de acessara rota

app.use(express.json());

// Middleware: permitir requisições externas com CORS (coloque isso sozinho)
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

//Chat falou que nao precisa desse codigo duplicado a baixo:

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
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});

module.exports = app;
