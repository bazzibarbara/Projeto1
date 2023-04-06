const Musica = require('../models/Musica');

class MusicaService{

    /**@brief Deleta uma musica.*/
    async deletarMusica(nome){
        
        const musica = await Musica.findOne({ where: { nome: `${nome}`} });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }

        Musica.destroy({ where: { nome: `${nome}` } });
    }

    
    async obterMusicas(){
        return await Musica.findAll();
    }

    /**@brief Busca uma musica no banco de dados pelo nome.*/
    async obterMusicaPorNome(nome){
        const musica = await Musica.findOne({ where: { nome: `${nome}`} });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }
            
        return musica;
    }

    /**@brief Adiciona uma musica ao banco.*/
    async adicionarMusica(req_body){
        
        if (!req_body){
            throw new Error('Musica sem dados nao pode ser adicionada.');
        }
        
        await Musica.create(req_body);
    }

    /**@brief Filtra uma musica pelo nome e altera o seu numero de downloads.*/
    async editarNumDownloads(nome, quant_downloads){
        const musica = await Musica.findOne({ where: { nome: `${nome}`} });

        if (!musica){
            throw new Error('Musica nao encontrada.');
        }

        musica.quantidadeDownloads = quant_downloads;
        await musica.save();

    }


}

module.exports = new MusicaService;