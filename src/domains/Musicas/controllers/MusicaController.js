const express = require ('express');
const router = express.Router();
const Musica = require('../models/Musica');
const MusicaService = require('../services/MusicaService');

router.get('/all', (req,res) => {
    res.status(200).send(Musica);
});

// retorna dados de uma musica pelo nome
router.get('/all/:nome', async (req,res) =>{  //obrigatoriamente precisa passar o parametro
    const { nome } = req.params;
    
    try{
        let musica = await MusicaService.getMusicaByNome(nome);
        res.status(200).json(musica);
    }catch{
        res.status(404).json();
    }
});

// adiciona uma musica na lista
router.post('/add', async (req, res) => {
    try{
        await MusicaService.adicionarMusica(req.body);
        res.status(200).send('Musica adicionada com sucesso');
    }catch{
        res.status(404).send('Musica nao encontrada');
    }
});

// edita a quantidade de downloads de uma musica pelo nome
router.put('/edit/:nome/:quantidadeDownloads', (req, res) => {
    const { nome, quantidadeDownloads } = req.params;
    
    try{
        await MusicaService.editarNumDownloads(nome, quantidadeDownloads);
        res.status(200).send(`Numero de downloads da musica ${nome} editado com sucesso.`);
    }catch{
        res.status(404).json();
    }

});

// deleta uma musica pelo nome
router.delete('/delete/:nome', async (req, res) => {
    const { nome } = req.params;
    try{
        await MusicaService.deletarMusica(nome);
        res.status(200).send('Musica deletada com sucesso');
    }
    catch{
        res.status(404).send('Musica nao encontrada');
    }
});

module.exports = router;
