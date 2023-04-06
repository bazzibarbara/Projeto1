const router =  require('express').Router();
const Musica = require('../models/Musica');
const MusicaService = require('../service/MusicaService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
<<<<<<< HEAD:src/domains/musicas/models/usuarios/controllers/index.js
        await MusicaService.criacao = Usuario.create(body);
=======
        MusicaService.criacao = await Musica.create(body);
>>>>>>> ec9e921e0798bfa0784e0852bc879361d6577af4:src/domains/usuarios/controllers/UsuarioController.js
        return res.status(201).json('Musica criada com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

module.exports = router;
/*const express = require ('express');
const router = express.Router();
const Musica = require('../models/Musica');
const MusicaService = require('../services/MusicaService');

router.get('/all', (req,res) => {
    res.status(200).send(Musica);
});

// retorna dados de uma musica pelo nome
router.get('/all/:nome', async (req,res) =>{  //obrigatoriamente precisa passar o parametro
    const { nome } = req.params;
    const musica = Musica.find(musica => musica.nome === nome);

    if(!musica) return res.status(404).json();

    res.status(200).json(musica);
});

// adiciona uma musica na lista
router.post('/add', (req, res) => {
    const { nome, artista, genero, quantidadeDownloads } = req.body;
    const musica = Musica.find(musica => musica.nome === nome);

    if(musica) return res.status(401).json();

    Musica.push(req.body);

    res.status(200).json({ nome, artista, genero, quantidadeDownloads });
});

// edita a quantidade de downloads de uma musica pelo nome
router.put('/edit/:nome/:quantidadeDownloads', (req, res) => {
    const { nome, quantidadeDownloads } = req.params;
    const musica = Musica.find(musica => musica.nome === nome);

    if(!musica) return res.status(404).json();

    musica.quantidadeDownloads = quantidadeDownloads;

    res.status(200).json(musica);
});

// deleta uma musica pelo nome
router.delete('/delete/:nome', async (req, res) => {
    const { nome } = req.params;
    try{
        await MusicaService.deletaMusica(nome);
        res.status(200).send('Musica deletada com sucesso');
    }
    catch{
        res.status(404).send('Musica nao encontrada');
    }
});

module.exports = router; */
