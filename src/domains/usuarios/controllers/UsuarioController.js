const router =  require('express').Router();
const Usuario = require('../models/Usuario');
const UsuarioService = require('../service/UsuarioService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        UsuarioService.criacao = await Usuario.create(body);
        return res.status(201).json('Usuario criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

module.exports = router;