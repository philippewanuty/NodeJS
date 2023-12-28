const express = require("express");

const app = express();

//Route Params
app.get("/message/:id/:user", (request, response)=> {
	const { id, user } = request.params;

	response.send(`
  Menssagem ID: ${id}.
  User: ${user}.
  `);
	//http://localhost:3333/message/7/philippe
});

// Query params

app.get("/users" , (request, response) => {
	const { page, limit } = request.query;

	response.send(`Página: ${page}. Mostrar: ${limit}`);

	//http://localhost:3333/users?page=5&limit=10
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
