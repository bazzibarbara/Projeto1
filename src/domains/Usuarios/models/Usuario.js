const database = require('../../../../database/index');
const Sequelize = require('sequelize');

const Usuario = database.define('Usuario', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    email :{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Usuario.sync({alter: false, force: false})
    .then(() => {
        console.log('Tabela de Usuarios foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = Usuario;