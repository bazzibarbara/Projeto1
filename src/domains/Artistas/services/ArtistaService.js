const Artistas = require('../models/Artistas');

class ArtistasService{
    async criacao(body){
        await Artistas.create(body);
    } 
};

module.exports = new ArtistasService();