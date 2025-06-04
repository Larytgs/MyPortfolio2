// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades

// Importando o modulo express, Ele facilita a criação de servidores HTTP, gerencia rotas, requisições e respostas, etc.
/* eslint-env node */

const express = require("express");

// Incluir conexão com banco de dados
const db = require("../db/models");

// Chamar a função express
const router = express.Router(); // Quero somente importar a parte das rotas
// express.Router() cria um "mini app" do Express, útil para definir rotas separadas em arquivos diferentes.

// Criar a rota cadastrar
router.post("/", async (req, res) => {
  // Receber os dados enviados no corpo da requesição
  var data = req.body;

  await db.Messages.create(data)
    .then((dataMessage) => {
      // req: requesição res: resposta
      return res.json({
        error: false,
        mensagem: "Mensagem cadastrada com sucesso!",
        dataMessage, // Para ver se esta recebendo realmente os dados
      });
    })
    .catch((err) => {
      console.error(err); // Mostra o erro no terminal

      // req: requesição res: resposta
      return res.json({
        error: false,
        mensagem: "Mensagem NÂO cadastrada com sucesso!",
        detalhes: err.message, // Para ver o erro específico
      });
    });
});

// Exportar a instrução que esta dentro da constante router
module.exports = router;
