const Usuario = require('../models/Usuario');

class UsuarioService{
    
    /**@brief Busca no banco todos os usuarios cadastrados.*/
    async obterUsuarios(){
        return await Usuario.findAll();
    }
    /**@brief Adiciona novo usuario no banco.*/
    async adicionarUsuario(body){
        await Usuario.create(body);
    }

    /**@brief Atualiza nome de  um usuario.*/
    async editarNome(nome, novoNome){
        const usuario = await Usuario.findOne({ where: { nome: `${nome}`} });

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        usuario.quantidadeDownloads = novoNome;
        await usuario.save();
    }
    
    /**@brief Deleta um usuario.*/
    async deletarUsuario(nome){
        const usuario = await Usuario.findOne({ where: { nome: `${nome}`} });

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        Usuario.destroy({ where: { nome: `${nome}` } });
    }
}

module.exports = new UsuarioService();