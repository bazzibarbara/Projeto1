const router =  require('express').Router();
const ArtistaService = require('../services/ArtistaService');

router.post('/artistas', async(req,res) =>{
    const body = req.body;
    try {
        await ArtistaService.adicionarArtista(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch {
        return res.status(400);
    }
});

router.get('/', async(req,res) =>{
    const body = req.body;
    try {
        await ArtistaService.adicionarArtista(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch {
        return res.status(400);
    }
});

module.exports = router;