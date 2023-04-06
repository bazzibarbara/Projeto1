const router =  require('express').Router();
const Artista = require('../models/Artista');
//const ArtistaService = require('../service/ArtistaService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await Artista.create(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    }
});

module.exports = router;