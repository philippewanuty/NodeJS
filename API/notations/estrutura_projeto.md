## Separação de responsabilidades. backend

*src* - Pasta arquivos do projeto
  .server.js - inicializa aplicação backend => ponto de entrada

*routes* - Pasta - Rotas do programa => diz a rota para o controller

*controllers* - Pasta => Processa as requisições da aplicação
  Ex: verificar se o usuário existe, cadastrar um produto.. etc
  Obs: só pode ter no máximo 5 métodos.

*utils* - tratamento de excesções