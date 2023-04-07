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

    async obterMusicaPorId(id){
        const usuario = await Usuario.findByPk(id);

        if (!usuario){
            throw new Error('Usuario nao encontrada.');
        }
            
        return usuario;
    }

    /**@brief Atualiza nome de  um usuario.*/
    async editarNome(id, novoNome){
        const usuario = await Usuario.findByPk(id);

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        usuario.nome = novoNome;
        await usuario.save();
    }
    
    /**@brief Deleta um usuario.*/
    async deletarUsuario(id){
        const usuario = await Usuario.findByPk(id);

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        Usuario.destroy({ where: { id: `${id}` } });
    }
}

module.exports = new UsuarioService();