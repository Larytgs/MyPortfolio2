// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades

// Importando o modulo express, Ele facilita a criação de servidores HTTP, gerencia rotas, requisições e respostas, etc.
const express = require("express");

// Chamar a função express
const router = express.Router(); // Quero somente importar a parte das rotas
// express.Router() cria um "mini app" do Express, útil para definir rotas separadas em arquivos diferentes.

// Criar a rota cadastrar
router.post("/", async (req, res) => {
  // Receber os dados enviados no corpo da requesição
  var data = req.body;

  // req: requesição res: resposta
  return res.json({
    error: false,
    mensagem: "Mensagem cadastrada com sucesso!",
    data, // Para ver se esta recebendo realmente os dados
  });
});

// Exportar a instrução que esta dentro da constante router
module.exports = router;
