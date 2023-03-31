const { application } = require('express');
const express= require ('express');
const router = express.Router();
const Musica = require('../models/Musica');

router.get('/', (req,res) => {
    res.status(200).send(Musica);
});

router.get('/name/:nome', (req,res) =>{ 
    const { nome } = req.params; //obrigatoriamente precisa passar o parametro
    res.status(200).send(nome);
});



module.exports = router;
