Como rodar o projeto baixado:

### npm i

Criar a base de dados no MySQL
Alterar as credenciais do BD no arquivo ".env"

Executar as migrations:

### npx sequelize-cli db:migrate

Rodar o projeto usando nodemon:

### node app.js

Abrir o endereço no navegador para acessar a página inicial localmente:

### http://localhost:8080

Mas estou colocando nesse:

### https://api.meusite.com

Instalar a dependencia de forma global, "-g" significa globalmente.
Executar o comando atraves do prompt de comando, executar somente se
nunca instalou a dependência na maquina, após instalar, reiniciar o PC:

### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor
sempre que houver alteracão no codigo fonte:

### npm install -- save-dev nodemon

Depois de montar a API no app.js e mensagens.js
No MySQL ou PHPmyAmin executa:

### CREATE DATABASE celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca Javascript que facilita o gerenciamento do
banco de dados SQL:

### npm install -- save sequelize

Instalar o drive do banco de dados:

### npm install -- save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos,
configurações e arquivos de migração para bancos de dados:

### npm install -- save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config:

### npx sequelize-cli init

Manipular variaveia de ambiente, para poder renomear algumas partes:

### npm i dotenv --save

Criar a Models mensagem:

### npx sequelize-cli model:generate --name Messages --attributes name:string,email:string,subject:string,content:string

Executar a migrations:

### npx sequelize-cli db:migrate

Axios é uma biblioteca de client HTTP que permite fazer requisição a API:

### npm install axios

Permitir a requesição externa, para nao dar uns erros:

### npm i cors
