const sequelize = require('../../../../database/index');
const {Datatypes} = require('sequelize');

const Artista = sequelize.define('Artista', {
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

Artista.sync({alter: true, force: false})
.then(() => {
    console.log("Tabela de Artistas foi (re)criada");
})
.catch((err) => console.log(err));

module.exports = Artistas;