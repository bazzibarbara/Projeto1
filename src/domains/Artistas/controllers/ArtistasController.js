const router =  require('express').Router();
const Usuario = require('../Artistas/Usuario');
const Artistas = require('../models/Artistas');
const ArtistasService = require('../service/ArtistasService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
<<<<<<< HEAD:src/domains/musicas/models/usuarios/controllers/index.js
        await ArtistasService.criacao = Artistas.create(body);
=======
        ArtistasService.criacao = await Artistas.create(body);
>>>>>>> ec9e921e0798bfa0784e0852bc879361d6577af4:src/domains/usuarios/controllers/UsuarioController.js
        return res.status(201).json('Artistas criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

module.exports = router;