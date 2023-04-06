const sequelize = require('../../database/index');
const {Datatypes} = require('sequelize');

const Usuario = sequelize.define('Usuario', {
    id:{
        type:Datatypes.INTEGER,
        autoIncrement: true,
        allowNull: false,

    },
    nome:{
        type: Datatypes.STRING,
        allowNull: false,

    },
    email :{
        type: Datatypes.STRING,
        allowNull: false,
    },
    senha: {
        type: Datatypes.STRING,
        allowNull: false,
    }
});

Usuario.sync({alter: false, force: false})
.then(() => {
    console.log("Tabela de Usuarios foi (re)criada");
})
.catch((err) => console.log(err));

module.exports = Usuario;