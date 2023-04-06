const Musica = require('../models/Musica');

class MusicaService{
    async criacao(body){
        await Musica.create(body);
    } 
};

module.exports = new MusicaService();