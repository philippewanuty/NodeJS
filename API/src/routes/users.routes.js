const {Router} = require("express");

const UsersController = require("../controllers/UsersController");

const usersController = new UsersController();

const usersRoutes = Router();

function myMiddleware(request, response, next) {

  
}









usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;