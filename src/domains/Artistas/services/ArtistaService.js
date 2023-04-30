const Artista = require('../models/Artista');
const Musica = require('../../Musicas/models/Musica');

const QueryError = require('../../../../errors/QueryError');

class ArtistasService{

    /**@brief Adiciona um artista ao banco de dados. */
    async adicionarArtista(body){
        await Artista.create(body);
    }

    /**@brief Pesquisa e retorna todos os artistas do banco de dados. */
    async obterArtistas(){
        const artistas = await Artista.findAll();

        if(!artistas) throw new QueryError('Nenhum artista disponível.');

        return artistas;
    }

    /**@brief Busca um artista no banco de dados pelo nome. */
    async obterArtistaPorNome(nome){

        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new QueryError('Artista nao encontrado.');
        }
            
        return artista;
    }

    async obterMusicasPorArtista(nome){
        const artista = await Artista.findOne({ where: { nome: nome }, include: [Musica] });

        if (!artista){
            throw new QueryError('Artista nao encontrado.');
        }
            
        return artista.Musicas;
    }

    async editarFoto(nome, novafoto){
        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new QueryError('Artista nao encontrado.');
        }

        artista.foto = novafoto;
        await artista.save();
    }

    /**@brief Deleta uma artista filtrando pelo nome. */
    async deletarArtista(nome){

        const artista = await Artista.findOne({ where: { nome: `${nome}`} });

        if (!artista){
            throw new QueryError('Artista nao encontrado.');
        }

        artista.destroy();
    }
    
}

module.exports = new ArtistasService();