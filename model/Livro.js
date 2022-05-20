/*
 * Importa o módulo do Sequelize
 */

const Sequelize = require('sequelize');

/*
 * Importa o arquivo de conexão com o banco de dados
 */

const connection = require('../database/database');

const Livro = connection.define('tblLivro', {
  idLivro: {
    type: Sequelize.INTEGER(10),
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  imagem: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
});

// Livro.sync({force:true});

module.exports = Livro;
