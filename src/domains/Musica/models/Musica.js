const sequelize = require('../../../../../../database/index');
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
/*const listaDeMusicas = [
    {
        nome: 'Dark Necessities',
        artista: 'Red Hot Chili Peppers',
        genero: 'Rock',
        quantidadeDownloads: 15000,
    },
    {
        nome: 'Boate Azul',
        artista: 'Bruno & Marrone',
        genero: 'Sertanejo',
        quantidadeDownloads: 1000,
    },
    {
        nome: 'Power',
        artista: 'Kanye West',
        genero: 'Hip Hop',
        quantidadeDownloads: 12000,
    },
    {
        nome: 'Money',
        artista: 'Pink Floyd',
        genero: 'Rock',
        quantidadeDownloads: 140500,
    },
    {
        nome: 'Enemy',
        artista: 'Imagine Dragons x J.I.D',
        genero: 'Electropop',
        quantidadeDownloads: 18000,
    }
];

module.exports = listaDeMusicas;*/