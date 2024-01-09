/**  O uso do class é devido que pode ser utilizado varias funções. 
No máximo 5 métodos abaixo
* index - GET  para listar varios registros.
* show - GET para exibir um registro específico.
* create - POST para criar um registro.
* update - PUT  para atualiazar um registro.
* delete - DELETE para remover um registro.
*/

const AppError = require("../utils/AppError")

class UsersController {
  create(request, response){
    const { name, email, password } = request.body;


    if(!name){
      throw new AppError("Nome é obrigatório");
    }

				response.status(201).json({ name, email, password });


  }

}

module.exports = UsersController;