## O que é uma API ?

API - Application programming interface, ou uma interface de programação de aplicação é um termo para designar uma interface de comunicação que um sistema oferece para que outros acessem suas funções.


## O que é Node.js?

Ele é um ambiente que oferece recursos que permite escrever e executar aplicações Javascript (JS Runtime Enviroment)

## Onde pode ser utilizado ?

- Backend
- Frontend
- Micro serviços
- API
- Script e Automação

## iniciando um projeto Node JS

-npm init -y

- instalar o Express (gerencia as requisições HTTP)

  -npm i express --save

-Criar um arquivo.gitignore

  -Dentro colocar o que será ignorado
  -node_modules

## Metodos de requisições (verbos http)
  -GET => Leitura
  -POST => Criação
  -PUT => Atualização - atualizar um produto
  -DELETE => Deleção - deletar algo
  -PATCH => Atualização parcial/especifica

  Obs: por padrão o navegador só aceita o método GET, para usar os outros métodos precisamos usar uma ferramenta externa.(insomnia)

## Método GET

  # Route Params

  São utilizados para informações simples.
  ex: id de um produto.

  http://seusite.com/caminho/params
  ex: request.params.id
  const {id, user} = request.params

  # Query Params

    http://seusite.com/user/?page=2&limit=10

## Método POST

recupera os valores enviados pelo corpo da requisição.

necessita colocar informação para cada tipo de arquivo que irá ser realizado. => app.use(express.json()); - neste exemplo estamos utilizando o json.

respondemos a API pelo padrão JSON

## HTTP Codes(status codes) => Imagem adicionada em ../assets

  Adiciona uma numeração as respostas, estão agrupados por faixas numéricas

  1xx - Informativo
    102 => Processando

  2xx - Sucesso
    200 => Requisição bem sucedida - OK
    201 => Created - geralmente utilizado para POST após uma inserção

  3xx - Redirecionamento
    301 =>Moved permanently
    302 => Moved

  4xx - Erro do cliente
    400 => Bad request
    401 => Unauthorized
    404 => Not found

  5xx - Erro do servidor
    500 => Internal server error.
    502 => Bad Getway

## Middleware

  Middleware são funções que tem acesso ao objeto de
  solicitação (requisição), o objeto de resposta (resposta), e a
  próxima função de middleware no ciclo solicitação-resposta do
  aplicativo.
  A próxima função middleware é comumente denotada por uma
  variável chamada next.

 Middleware podem
  -Executar qualquer código.
  -Fazer mudanças nos objetos de solicitação e resposta.
  -Encerrar o ciclo de solicitação-resposta.
  -Chamar o próximo middleware na pilha.

  Ex: permitir ou não certo usuário cadastrar um produto.

  ## Tratamento de exceções

    instalar a lib Express Async Error
      npm install express-async-errors --save

      fazer a exportação do async errors no começo do server
        require("express-async-errors");


## Criptografar dados
    Criptografar a senha pelo método hash

    - importar o método dentro de usercontroller

    -criar uma variável chamando o método. 

    (const hashedPassword = await hash(password, 8))

    -substituir a variável escolhida pela variavel hash


