const express = require ('express');
const router = express.Router();
const MusicaService = require('../services/MusicaService');
const {verifyJWT, checkRole } = require('../../../middlewares/auth-middlewares.js');
const statusCodes = require('../../../../constants/statusCodes.js');
const userRoles = require('../../Usuarios/constants/userRoles');

router.get('/all',
    verifyJWT,
    async (req, res, next) => {
        try{
            const musicas = await MusicaService.obterMusicas();
            res.status(statusCodes.success).send(musicas);
        }catch(error){
            next(error);
        }
    }
);

// retorna dados de uma musica pelo nome
router.get('/all/:nome',
    verifyJWT,
    async (req, res, next) => {
        const { nome } = req.params;
    
        try{
            const musica = await MusicaService.obterMusicaPorNome(nome);
            res.status(statusCodes.success).json(musica);
        }catch(error){
            next(error);
        }
    }
);

router.get('/all/:nome/artista', 
    verifyJWT,
    async (req, res, next) => {
        const { nome } = req.params;
        
        try{
            const artista = await MusicaService.obterArtistaPorMusica(nome);
            res.status(statusCodes.success).json(artista);
        }catch(error){
            next(error);
        }
    }
);

// adiciona uma musica na lista
router.post('/add', 
    verifyJWT,
    async (req, res, next) => {
        try{
            await MusicaService.adicionarMusica(req.body);
            res.status(statusCodes.created).json('Nova musica criada com sucesso!');
        }catch(error) {
            next(error);
        }
    }
);

// edita a quantidade de downloads de uma musica pelo nome
router.put('/edit/:nome/:foto_str', 
    verifyJWT,
    checkRole([userRoles.admin]),
    async (req, res, next) => {
        const { nome, foto_str } = req.params;
        
        try{
            await MusicaService.editarFoto(nome, foto_str);
            res.status(statusCodes.success).send(`A foto da musica ${nome} editado com sucesso.`);
        }catch(error){
            next(error);
        }
    }
);

// deleta uma musica pelo nome
router.delete('/delete/:nome', 
    verifyJWT,
    checkRole([userRoles.admin]),
    async (req, res, next) => {
        const { nome } = req.params;
        
        try{
            await MusicaService.deletarMusica(nome);
            res.status(statusCodes.success).send('Musica deletada com sucesso');
        } catch(error){
            next(error);
        }
    }
);

module.exports = router;
