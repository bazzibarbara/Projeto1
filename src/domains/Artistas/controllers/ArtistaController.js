const router =  require('express').Router();
const ArtistaService = require('../service/ArtistaService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await ArtistaService.adicionarArtista(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch {
        return res.status(400);
    }
});

module.exports = router;