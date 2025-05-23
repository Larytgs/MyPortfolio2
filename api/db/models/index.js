"use strict"; // Ativa o modo estrito do JavaScript para evitar erros silenciosos

const fs = require("fs"); // Importa o módulo de sistema de arquivos
const path = require("path"); // Importa o módulo para trabalhar com caminhos
const Sequelize = require("sequelize"); // Importa a biblioteca Sequelize (ORM)
const process = require("process"); // Importa o módulo process (para acessar variáveis de ambiente)

const basename = path.basename(__filename); // Pega o nome do arquivo atual (ex: 'index.js')
const env = process.env.NODE_ENV || "development"; // Define o ambiente atual (padrão: development)
const config = require(__dirname + "/../config/config.js")[env]; // Carrega configurações do banco para o ambiente atual
const db = {}; // Cria objeto onde os modelos e a conexão serão armazenados

let sequelize;
if (config.use_env_variable) {
  // Verifica se foi definida uma variável de ambiente com a URL de conexão
  sequelize = new Sequelize(process.env[config.use_env_variable], config); // Usa variável de ambiente para conectar
} else {
  sequelize = new Sequelize( // Conecta usando nome do banco, usuário e senha
    config.database,
    config.username,
    config.password,
    config
  );
}

// ⚠️ Esta verificação de conexão não está funcionando corretamente (só imprime mensagem)
try {
  console.log("Conexao com o banco de dados realizado com sucesso!"); // Apenas imprime mensagem (sem testar de fato)
} catch (error) {
  console.log(
    "Erro: Conexão com o banco de dados não realizado com sucesso.", // Só executaria se houvesse um erro de sintaxe no console.log
    error
  );
}

fs.readdirSync(__dirname) // Lê todos os arquivos da pasta atual (geralmente a pasta 'models')
  .filter((file) => {
    // Filtra arquivos válidos de modelos
    return (
      file.indexOf(".") !== 0 && // Ignora arquivos ocultos (que começam com '.')
      file !== basename && // Ignora o próprio arquivo 'index.js'
      file.slice(-3) === ".js" && // Aceita apenas arquivos com extensão '.js'
      file.indexOf(".test.js") === -1 // Ignora arquivos de teste
    );
  })
  .forEach((file) => {
    // Para cada arquivo válido...
    const model = require(path.join(__dirname, file))(
      // Importa o modelo passando sequelize e Sequelize.DataTypes
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model; // Adiciona o modelo ao objeto db com sua chave sendo o nome do modelo
  });

Object.keys(db).forEach((modelName) => {
  // Para cada modelo carregado...
  if (db[modelName].associate) {
    // Se o modelo tiver um método associate (relacionamentos)...
    db[modelName].associate(db); // Executa o método passando todos os modelos (para configurar relações)
  }
});

db.sequelize = sequelize; // Adiciona a instância de conexão ao objeto db
db.Sequelize = Sequelize; // Adiciona a classe Sequelize ao objeto db (para uso externo)

module.exports = db; // Exporta o objeto db contendo a conexão e todos os modelos
