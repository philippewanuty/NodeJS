const {Router} = require("express");

const UsersController = require("../controllers/UsersController");

const usersController = new UsersController();

const usersRoutes = Router();

//Middleware
// function myMiddleware(request, response, next) {
//   console.log('Voce passou pelo middleware');

//   if(!request.body.isAdmin) {
//     return response.json({Message: "User unauthorized"});
//   }
  
  
//   next();

// }




usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;