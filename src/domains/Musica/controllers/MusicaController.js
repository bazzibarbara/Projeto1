const router =  require('express').Router();
const Musica = require('../models/Musica');
const MusicaService = require('../service/MusicaService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
<<<<<<< HEAD:src/domains/musicas/models/usuarios/controllers/index.js
        await MusicaService.criacao = Usuario.create(body);
=======
        MusicaService.criacao = await Musica.create(body);
>>>>>>> ec9e921e0798bfa0784e0852bc879361d6577af4:src/domains/usuarios/controllers/UsuarioController.js
        return res.status(201).json('Musica criada com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

module.exports = router;