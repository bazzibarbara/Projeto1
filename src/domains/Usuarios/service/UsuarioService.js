const Usuario = require('../models/Usuario');

class UsuarioService{
    async obterUsuarios(){
        return await Usuario.findAll();
    }

    async adicionarUsuario(body){
        await Usuario.create(body);
    }

    async editarNome(nome, novoNome){
        const usuario = await Usuario.findOne({ where: { nome: `${nome}`} });

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        usuario.quantidadeDownloads = novoNome;
        await usuario.save();
    }

    async deletarUsuario(nome){
        const usuario = await Usuario.findOne({ where: { nome: `${nome}`} });

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        Usuario.destroy({ where: { nome: `${nome}` } });
    }
}

module.exports = new UsuarioService();