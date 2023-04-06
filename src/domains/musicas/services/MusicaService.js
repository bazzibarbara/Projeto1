const Musica = require('../models/Musica');

class MusicaService{

    /**@brief Deleta uma musica.*/
    async deletarMusica(nome){
        
        const musica = Musica.find(musica => musica.nome == nome);

        if(!musica)
            throw new Error('Musica nao encontrada');

        const musica_index = Musica.indexOf(musica);  //Obtendo o index da musica a ser deletada
        Musica.splice(musica_index, 1); // Deleta 1 elemento a partir do index obtido, ou seja, o proprio elemento
    }

    /**@brief Busca uma musica no banco de dados pelo nome.*/
    async getMusicaByNome(nome){
        const musica = Musica.find(musica => musica.nome === nome);

        if(!musica)
            throw new Error('Musica nao encontrada.');
        return musica;
    }

    /**@brief Adiciona uma musica ao banco.*/
    async adicionarMusica(req_body){
        
        if(!req_body)
            throw new Error('Musica sem dados nao pode ser adicionada.');
            
        Musica.push(req_body);
        const { nome, artista, genero, quantidadeDownloads } = req_body;
        return { nome, artista, genero, quantidadeDownloads };
    }
}

module.exports = new MusicaService;