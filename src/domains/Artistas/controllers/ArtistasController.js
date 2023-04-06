const router =  require('express').Router();
const Usuario = require('../Artistas/Usuario');
const Artistas = require('../models/Artistas');
const ArtistasService = require('../service/ArtistasService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await Artistas.create(body);
        return res.status(201).json('Artistas criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    }
});

module.exports = router;