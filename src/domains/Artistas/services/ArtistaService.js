const Artista = require('../models/Artista');

class ArtistasService{

    /**@brief Adiciona um artista ao banco de dados. */
    async adicionarArtista(body){
        await Artista.create(body);
    }

    /**@brief Pesquisa e retorna todos os artistas do banco de dados. */
    async obterArtistas(){
        return await Artista.findAll();
    }

    /**@brief Busca um artista no banco de dados pelo nome. */
    async obterArtistaPorNome(nome){

        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new Error('Artista nao encontrado.');
        }
            
        return artista;
    }

    async editarFoto(nome, novafoto){
        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new Error('Artista nao encontrado.');
        }

        artista.foto = novafoto;
        await artista.save();
    }

    /**@brief Deleta uma artista filtrando pelo nome. */
    async deletarArtista(nome){

        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new Error('Artista nao encontrado.');
        }

        Artista.destroy({ where: { nome: `${nome}` } });
    }
    
}

module.exports = new ArtistasService();