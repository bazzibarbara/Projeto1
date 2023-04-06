const express = require ('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter=  require('../src/domains/Musicas/controllers/MusicaController');
const artistaRouter=  require('../src/domains/Artistas/controllers/ArtistaController');
const usuarioRouter=  require('../src/domains/Usuarios/controllers/UsuarioController');
app.use('/api/musica', musicaRouter);
app.use('/api/musica', artistaRouter);
app.use('/api/musica', usuarioRouter);

module.exports = app;
