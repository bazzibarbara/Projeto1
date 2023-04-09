const database = require('../../../../database/index');
const {DataTypes} = require('sequelize');

const UsuarioMusica = database.define('UsuarioMusica', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    idMusica: {
      type: DataTypes.INTEGER
    },

    idUsuario: {
      type: DataTypes.INTEGER
    }
});

UsuarioMusica.sync({alter: false, force: false})
    .then(() => {
        console.log('Tabela de UsuarioMusicas foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = UsuarioMusica;