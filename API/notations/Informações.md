## O que é uma API ?

API - Application programming interface, ou uma interface de programação de aplicação é um termo para designar uma interface de comunicação que um sistema oferece para que outros acessem suas funções.


## O que é Node.js?

Ele é um ambiente que oferece recursos que permite escrever e executar aplicações Javascript (JS Runtime Enviroment)

## Onde pode ser utilizado ?

- Backend
- Frontend
- Micro serviços
-API
-Script e Automação

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

