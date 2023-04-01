const Musica = require('../models/Musica');

class MusicaService{
    async deletaMusica(nome){
        const musica = Musica.find(musica => musica.nome == nome);

        if(!musica) 
            throw new Error('Musica nao encontrada');

        const musica_index = Musica.indexOf(musica);  //Obtendo o index da musica a ser deletada
        Musica.splice(musica_index, 1); // Deleta 1 elemento a partir do index obtido, ou seja, o proprio elemento
    }
}

module.exports = new MusicaService;