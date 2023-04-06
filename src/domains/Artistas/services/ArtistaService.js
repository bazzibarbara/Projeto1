const Artistas = require('../models/Artista');

class ArtistasService{
    async adicionarArtista(body){
        await Artistas.create(body);
    } 
}

module.exports = new ArtistasService();