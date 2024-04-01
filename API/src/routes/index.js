//* Missão deste index, reunir todas as rotas da aplicação para distribuir mais facilmente.

const { Router } = require("express");

//local para importar os arquivos de rota
const usersRoutes = require("./users.routes");
const notesRoutes = require("./notes.routes");

//local para colocar e indicar as rotas para o uso
const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);

module.exports = routes;
