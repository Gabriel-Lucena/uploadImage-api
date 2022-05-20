/*
 * Importa o módulo do Sequelize
 */

const Sequelize = require('sequelize');

/*
 *
 * Cria a constante "connection" que armazena a instância do sequelize e abre a
 * conexão com o banco de dados.
 *
 * Parâmetros:
 *
 * 1 - Nome do banco de dados;
 * 2 - Usuário do banco de dados;
 * 3 - Senha do banco de dados;
 * 4 - Objeto json que determina
 *     o em que o banco de dados está
 *     localizado e o seu tipo.
 */

const connection = new Sequelize('libri_upload_image', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00',
});

/*
 *Exporta a constante connection a tornando disponível em toda a aplicação
 */

module.exports = connection;
