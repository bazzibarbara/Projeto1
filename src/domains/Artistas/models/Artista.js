const database = require('../../../../database/index');
const Sequelize = require('sequelize');

const Artista = database.define('Artista', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncerement: true,
        allowNull: false,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    nacionalidade :{
        type: Sequelize.STRING,
        allowNull: false,
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Artista.sync({alter: true, force: false})
    .then(() => {
        console.log('Tabela de Artistas foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = Artista;