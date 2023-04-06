const router =  require('express').Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../service/UsuarioService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
<<<<<<< HEAD:src/domains/musicas/models/usuarios/controllers/index.js
        await UsuarioService.criacao = Usuario.create(body);
=======
        UsuarioService.criacao = await Usuario.create(body);
>>>>>>> ec9e921e0798bfa0784e0852bc879361d6577af4:src/domains/usuarios/controllers/UsuarioController.js
        return res.status(201).json('Usuario criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

module.exports = router;