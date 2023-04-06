const Artistas = require('../models/Artista');
class ArtistasService{
    async adicionarArtista(body){
        await Artistas.create(body);
    }

    async obterArtistas(){
        return await Artistas.findAll();
    }


}

module.exports = new ArtistasService();