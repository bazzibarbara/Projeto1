const express= require ('express');
const router = express.Router();
const Musica = require('../models/Musica');

router.get('/all', (req,res) => {
    res.status(200).send(Musica);
});

// retorna dados de uma musica pelo nome
router.get('/all/:nome', (req,res) =>{  //obrigatoriamente precisa passar o parametro
    const { nome } = req.params;
    const musica = Musica.find(musica => musica.nome === nome);

    if(!musica) return res.status(404).json();

    res.json(musica);
});

router.post('/all', (req, res) => {
    const { nome, artista, genero, quantidadeDownloads } = req.body;
    const musica = Musica.find(musica => musica.nome === nome);

    if(musica) return res.status(401).json();

    Musica.push(req.body);

    res.json({ nome, artista, genero, quantidadeDownloads });
});

module.exports = router;