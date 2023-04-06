const router =  require('express').Router();
const ArtistaService = require('../services/ArtistaService');

router.get('/all', async(res) =>{
    try {
        await ArtistaService.obterMusicas();
        return res.status(200).send(musicas);
    } catch {
        return res.status(400);
    }
});

router.get('/all/:nome', async (req, res) => {
    const { nome } = req.params;

    try{
        const artista = await ArtistaService.obterArtistaPorNome(nome);
        res.status(200).send(artista)
    }catch{
        res.status(400).json('Artista nao encontrado.')
    }
});

router.post('/add', async(req,res) =>{
    const body = req.body;
    try {
        await ArtistaService.adicionarArtista(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch {
        return res.status(400);
    }
});

router.delete('/delete/:nome', async (req, res) => {
    const { nome } = req.params;
    
    try{
        await ArtistaService.deletarArtista(nome);
        res.status(200).send('Artista deletado com sucesso');
    }
    catch{
        res.status(400).send('Artista nao encontrado.');
    }
});

module.exports = router;