const express = require ('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

const musicaRouter=  require('../src/domains/entidade_1/controllers/index');
app.use('/api/musica', musicaRouter);
module.exports = app;
