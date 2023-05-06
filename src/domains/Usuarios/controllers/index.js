/* eslint-disable no-unused-vars */
const router =  require('express').Router();
const statusCodes = require('../../../../constants/statusCodes');
const UsuarioService = require('../service/UsuarioService');
const {loginMiddleware, verifyJWT, checkRole, notLoggedIn} = require('../../../middlewares/auth-middlewares.js');

router.post('/login', notLoggedIn, loginMiddleware);

router.post('/logout', 
    verifyJWT,
    async (req, res, next) => {
        try {
            res.clearCookie('jwt');
            res.status(statusCodes.noContent).end();
        } catch (error) {
            next(error);
        }
    },
);

router.put('/:id',
    verifyJWT,
    async(req,res, next) => {
        try{
            await UsuarioService.update(req.params.id, req.body, req.user);
            res.status(statusCodes.noContent).end();
        }   catch (error) {
            next(error);
        }
    },
);

//cria usuario(C do CRUD)
router.post('/add', async(req,res, next) => {
    const body = req.body;

    try {
        await UsuarioService.adicionarUsuario(body);
        return res.status(statusCodes.created).json('Usuario criado com sucesso');
    } catch(error) {
        next(error);
    }
});

//modulo read todos os usuarios (R DO CRUD)
router.get('/all', async (req,res, next) => {
    try{
        const usuarios = await UsuarioService.obterUsuarios();
        res.status(statusCodes.success).send(usuarios);
    }catch(error) {
        next(error);
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
router.delete('/delete/:id', async(req,res) =>{
    const { id } = req.params;
    try{
        await UsuarioService.deletarUsuario(id);
        res.status(200).json({message: 'Usuario deletado com sucesso'});
    }
    catch{
        res.status(404).send('Usuario nao encontrado');
    }
});


module.exports = router;