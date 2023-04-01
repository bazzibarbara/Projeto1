const express = require ('express');
const router = express.Router();
let Musica = require('../models/Musica');

router.get('/all', (req,res) => {
    res.status(200).send(Musica);
});

// retorna dados de uma musica pelo nome
router.get('/all/:nome', (req,res) =>{  //obrigatoriamente precisa passar o parametro
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
router.delete('/delete/:nome', (req, res) => {
    const { nome } = req.params;
    const musica = Musica.find(musica => musica.nome == nome);

    if(!musica) return res.status(401).json();

    const musica_index = Musica.indexOf(musica);  //Obtendo o index da musica a ser deletada
    Musica.splice(musica_index, 1); // Deleta 1 elemento a partir do index obtido, ou seja, o proprio elemento

    res.status(200).json(Musica);
})

module.exports = router;
