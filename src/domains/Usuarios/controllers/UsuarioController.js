const router =  require('express').Router();
const UsuarioService = require('../service/UsuarioService');


//cria usuario(C do CRUD)
router.post('/add', async(req,res) => {
    const body = req.body;

    try {
        await UsuarioService.adicionarUsuario(body);
        return res.status(201).json('Usuario criado com sucesso');
    } catch {
        return res.status(400);
    }
});

//modulo read todos os usuarios (R DO CRUD)
router.get('/all', async (req,res) => {
    try{
        const usuarios = await UsuarioService.obterUsuarios();
        res.status(200).send(usuarios);
    }catch{
        res.status(400).json('Nao foi possivel acessar a tabela de usuarios.');
    }
});

//modulo read pelo id do usuario 
router.get('/all/:id', async (req,res) => {
    const { id } = req.params;
    try{
        const lerUsuarioId = await UsuarioService.findByPk(id);
        res.status(200).json(lerUsuarioId);
    }catch{
        res.status(400).json(`Nao foi encontrado usuario com o id ${id}.`);
    }
});

//atualiza um usuario (U do crud)
router.put('/edit/:nome/:novoNome', async (req,res) =>{
    const { nome, novoNome } = req.params;
    
    try{
        await UsuarioService.editarNome(nome, novoNome);
        res.status(200).send(`Nome do usuario ${nome} editado com sucesso.`);
    }catch{
        res.status(400).json();
    }
});


//deleta um usuario pelo nome (D do crud)
router.delete('/delete', async(req,res) =>{
    const { nome } = req.params;
    try{
        await UsuarioService.deletarUsuario(nome);
        res.status(200).json({message: 'Usuario deletado com sucesso'});
    }
    catch{
        res.status(404).send('Usuario nao encontrado');
    }
});


module.exports = router;