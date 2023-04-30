const router = require('express').Router();
const ArtistaService = require('../services/ArtistaService');
const {verifyJWT, checkRole } = require('../../../middlewares/auth-middlewares.js');
const statusCodes = require('../../../../constants/statusCodes.js');
const userRoles = require('../../Usuarios/constants/userRoles');

router.get('/all', 
    verifyJWT,
    async(req,res, next) =>{
        try {
            const artistas = await ArtistaService.obterArtistas();
            res.status(statusCodes.success).send(artistas);
        } catch(error) {
            next(error);
        }
    },
);

router.get('/all/:nome', 
    verifyJWT,
    async(req, res, next) =>{
        const { nome } = req.params;
        try{
            const artista = await ArtistaService.obterArtistaPorNome(nome);
            res.status(statusCodes.success).send(artista);
        }catch(error){
            next(error);
        }
    },
);

router.get('/all/:nome/musicas',
    verifyJWT,
    async(req, res, next) =>{
        const { nome } = req.params;

        try{
            const musica = await ArtistaService.obterMusicasPorArtista(nome);
            res.status(statusCodes.success).send(musica);
        }catch(error) {
            next(error);
        }
    }
);

router.post('/add',
    verifyJWT,
    async(req, res, next) => {
        const body = req.body;
        try {
            await ArtistaService.adicionarArtista(body);
            return res.status(statusCodes.created).json('Artista criado com sucesso');
        } catch(error){
            next(error);
        }
    },
);

router.put('/edit/:nome/:novafoto',
    verifyJWT,
    checkRole([userRoles.admin]),
    async (req, res, next) => {
        const { nome, novafoto } = req.params;
        
        try{
            await ArtistaService.editarFoto(nome, novafoto);
            res.status(statusCodes.success).send(`Foto do artista ${nome} editado com sucesso.`);
        }catch(error){
            next(error);
        }
    }
);

router.delete('/delete/:nome',
    verifyJWT,
    checkRole([userRoles.admin]),
    async (req, res, next) => {
        const { nome } = req.params;
    
        try{
            await ArtistaService.deletarArtista(nome);
            res.status(statusCodes.success).send('Artista deletado com sucesso');
        }
        catch(error){
            next(error);
        }
    }
);

module.exports = router;