const Musica = require('../models/Musica');

class MusicaService{

    /**@brief Deleta uma musica.*/
    async deletarMusica(nome){
        
        const musica = await Musica.findOne({ where: { titulo: nome } });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }

        Musica.destroy({ where: { titulo: nome } });
    }

    
    async obterMusicas(){
        return await Musica.findAll();
    }

    /**@brief Busca uma musica no banco de dados pelo nome.*/
    async obterMusicaPorNome(nome){
        const musica = await Musica.findOne({ where: { titulo: nome } });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }
            
        return musica;
    }

    /**@brief Adiciona uma musica ao banco.*/
    async adicionarMusica(req_body){
        const { foto, titulo, categoria, idArtista } = req_body;
        const musica = await Musica.create({ foto, titulo, categoria, idArtista });
        return musica;
    }

    /**@brief Filtra uma musica pelo nome e altera o seu numero de downloads.*/
    async editarFoto(nome, foto_str){
        const musica = await Musica.findOne({ where: { titulo: nome } });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }

        musica.foto = foto_str;
        await musica.save();
    }


}

module.exports = new MusicaService;