/**  O uso do class é devido que pode ser utilizado varias funções. 
No máximo 5 métodos abaixo
* index - GET  para listar varios registros.
* show - GET para exibir um registro específico.
* create - POST para criar um registro.
* update - PUT  para atualiazar um registro.
* delete - DELETE para remover um registro.
*/
const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite');

class UsersController {
	async create(request, response) {
		const { name, email, password } = request.body;

		const database = await sqliteConnection();

		const checkUserExists = await database.get('SELECT * FROM users WHERE EMAIL = (?)', [email]);

		if (checkUserExists) {
			throw new AppError('Este E-mail já está em uso.');
		}

		const hashedPassword = await hash(password, 8);

		await database.run('INSERT INTO users (name, email, password)VALUES (?,?,?)', [name, email, hashedPassword]);

		return response.status(201).json();
	}

	async update(request, response) {
		const { name, email, password, old_password } = request.body;
		const { id } = request.params;

		const database = await sqliteConnection();

		const user = await database.get('SELECT * FROM users WHERE id = (?)', [id]);

		if (!user) {
			throw new AppError('Usuário não encontrado');
		}

		const userWithUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

		if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
			throw new AppError('Este e-mail ja está em uso.');
		}

		user.name = name ?? user.name; // usar o ??  quando vazio permanecer o conteúdo.
		user.email = email ?? user.email;

		if (password && !old_password) {
			throw new AppError('Você precisa informar a senha antiga para definir a nova senha.');
		}

		if (password && old_password) {
			const CheckOldPassword = await compare(old_password, user.password);

			if (!CheckOldPassword) {
				throw new AppError('A senha antiga não confere');
			}

			user.password = await hash(password, 8);
		}

		await database.run(
			`
			UPDATE users SET
			name = ?,
			email = ?,
			password = ?,
			updated_at = DATETIME('now')
			WHERE id = ?`,
			[user.name, user.email, user.password, id]
		);

		return response.json();
	}
}

module.exports = UsersController;
