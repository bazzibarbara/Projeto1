const { QueryError } = require('sequelize');
const Usuario = require('../models/Usuario');

async create(body) {
    if (body.role == userRoles.admin){
        throw new PermissionError('Não é possivel criar um usuário com cargo de administrador');
    }
    const user = await User.findOne{(where:{ email: body.email})};
    if(user){
        throw new QueryError('E-mail já cadastrado');

    } else {
        const user = {
            name: body.name, 
            email: body.email, 
            password: body.password,
            role: body.role, 
        };
        user.password = await this.encryptPassword(body.password);
       
        await User.create(user);
    }
}








class UsuarioService{
     
    async encryptPassword(password) {
        const saltRounds = 10;
        const encryptPassword = await bcrypt.hash(password, saltRounds);
        return encryptPassword;
    }



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
    async deletarUsuario(id){
        const usuario = await Usuario.findOne({ where: { id: `${id}`} });

        if (!usuario){
            throw new Error('Usuario nao encontrado.');
        }

        Usuario.destroy({ where: { id: `${id}` } });
    }
}

module.exports = new UsuarioService();