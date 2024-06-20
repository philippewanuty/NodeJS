//* Missão deste index, reunir todas as rotas da aplicação para distribuir mais facilmente.

const { Router } = require("express");

//local para importar os arquivos de rota
const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");

//local para colocar e indicar as rotas para o uso
const routes = Router();

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);
routes.use('/tags', tagsRouter);

module.exports = routes;
