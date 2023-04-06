const database = require('../../../../database/index');
const Sequelize = require('sequelize');

const Musica = database.define('Musica', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    foto:{
        type: Sequelize.STRING,
        allowNull: false,

    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Musica.sync({alter: true, force: false})
    .then(() => {
        console.log('Tabela de Musica foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = Musica;