# Query Builder

    é um construtor de consulta, permite que voce construa instruções SQL independente do banco de dados ultilizado

    Ele converte o código para o banco de dados desejado

## KNEX.JS

**Configurações -> ajustar o path**

            const path = require('path');

    module.exports = {
      development: {
        client: 'sqlite3',
        connection: {
          filename: path.resolve(__dirname, "src", "database", "database.db")
        },
        useNullAsDefault: true
      }
    };



## Migrations

    É uma forma de verisonar a base de dados.

    UP: método responsavel por criar ou alterar algo no banco de dados

    DOWN: Responsável pelo rollback. ou sea desfazer as alterações realizadas pela migration


       npx knex migrate:make NomeDoArquivo  -> para criar a pasta com migration


