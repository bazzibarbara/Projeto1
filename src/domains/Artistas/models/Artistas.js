const sequelize = require('../../../../../../database/index');
const {Datatypes} = require('sequelize');

const Artistas = sequelize.define('Artistas', {
    id:{
        type:Datatypes.INTEGER,
        allowNull: false,

    },
    nome:{
        type: Datatypes.STRING,
        allowNull: false,

    },
    nacionalidade :{
        type: Datatypes.STRING,
        allowNull: false,
    },
    foto: {
        type: Datatypes.STRING,
        allowNull: false,
    }
});

Usuario.sync({alter: true, force: false})
.then(() => {
    console.log("Tabela de Artistas foi (re)criada");
})
.catch((err) => console.log(err));

module.exports = Artistas;