const sequelize = require('../../../../database/index');
const {Datatypes} = require('sequelize');

const Musica = sequelize.define('Musica', {
    id:{
        type:Datatypes.INTEGER,
        allowNull: false,

    },
    foto:{
        type: Datatypes.STRING,
        allowNull: false,

    },
    nacionalidade :{
        type: Datatypes.STRING,
        allowNull: false,
    },
    titulo: {
        type: Datatypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: Datatypes.STRING,
        allowNull: false,
    }
});

Usuario.sync({alter: true, force: false})
.then(() => {
    console.log("Tabela de Musica foi (re)criada");
})
.catch((err) => console.log(err));

module.exports = Musica;