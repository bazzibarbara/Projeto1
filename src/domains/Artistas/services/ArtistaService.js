const Artistas = require('../models/Artista');

class ArtistasService{
    async criacao(body){
        await Artistas.create(body);
    } 
}

module.exports = new ArtistasService();