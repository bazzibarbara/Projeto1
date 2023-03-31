const { application } = require('express');
const express= require ('express');
const router = express.Router();
const Musica = require('../models/Musica');

router.get('/', (req,res) => {
    res.status(200).send(Musica);
});

router.get('/name/:nome', (req,res) =>{  //obrigatoriamente precisa passar o parametro
    res.status(200).send(req.params);
});



module.exports = router;
