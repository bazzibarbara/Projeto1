require('express-async-errors');
const express = require ('express');
const app = express();

const cors = require('cors');
app.use(cors(
{
    origin: process.env.CLIENT_URL,
    credentials: true,
},
));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter=  require('../src/domains/Musicas/controllers/MusicaController');
const artistaRouter=  require('../src/domains/Artistas/controllers/ArtistaController');
const usuarioRouter=  require('../src/domains/Usuarios/controllers/UsuarioController');
app.use('/api/musica', musicaRouter);
app.use('/api/artista', artistaRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;
