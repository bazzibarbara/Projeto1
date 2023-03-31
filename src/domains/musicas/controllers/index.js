const express= require ('express');
const router = express.Router();
const Musica = require('../models/Musica');

router.get('/all', (req,res) => {
    res.status(200).send(Musica);
});

// retorna dados de uma musica pelo name
router.get('/all/:name', (req,res) =>{  //obrigatoriamente precisa passar o parametro
    const { name } = req.params;
    const musica = Musica.find(musica => musica.nome === name);

    if(!musica) return res.status(404).json();

    res.json(musica);
});

router.post('/all', (req, res) => {
    const { name, artista, genero, quantidadeDownloads } = req.body;
    
    const  musica = Musica.find(musica => musica.name == name);
    if(musica) return res.status(401).json();

    res.json({name, artista, genero, quantidadeDownloads});
});

module.exports = router;