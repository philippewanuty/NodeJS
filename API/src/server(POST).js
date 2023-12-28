//* Só para questão de estudo. esse arquivo não será executado

const express = require('express');

const app = express();
app.use(express.json()); //necessita colocar essa informação para cada tipo de arquivo que irá ser realizado.

app.post('/users', (request, response) => {
	const { name, email, password } = request.body;

	// response.send(`Usuario: ${name} , E-mail: ${email} , Password ${password}`); //*primeira forma

	response.json({ name, email, password });
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
