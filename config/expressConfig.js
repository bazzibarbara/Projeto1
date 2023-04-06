const express = require ('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter=  require('../src/domains/Musicas/controllers/MusicaController');
app.use('/api/musica', musicaRouter);

module.exports = app;
