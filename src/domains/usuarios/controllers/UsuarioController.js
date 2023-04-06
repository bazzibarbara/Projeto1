const router =  require('express').Router();
const Usuario = require('../../Musica/models/usuarios/models/Usuario');
const Usuario = require('../models/Usuario');
const Usuario = require('../models/Usuario');
const Usuario = require('../models/Usuario');
const UsuarioService = require('../service/UsuarioService');

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await Usuario.create(body);
        return res.status(201).json('Usuario criado com sucesso');
    } catch (error) {
        return res.status(400);
        
    };
})

//cria usuario
try {
    const resultado = await database.sync();
    console.log(resultado);

    const criarUsuario = await Usuario.create({
        nome: 
        email: 
        senha:
        cargo:
    })
    console.log(criarUsuario);
} catch (error) {
    console.log(error).status(400);
};
//modulo read
const lerUsuario = await Usuario.findAll();
console.log(lerUsuario);
res.status(200);
if(!Usuario){
    res.status(400).json({message: 'Usuario não existe'});
}


//atualiza um usuario
router.put('edit/:nome/', (req,res) =>{
    const {nome} = req.params;
if(!Usuario){
    res.status(400).json({message: 'Usuario não existe'});}

    const Usuario = Usuario.find(Usuario => Usuario.nome === nome);
    Usuario.nome = nome;
    res.status(200).json(usuario);
)};

// edita a quantidade de downloads de uma musica pelo nome
router.put('/edit/:nome/:quantidadeDownloads', (req, res) => {
    const { nome, quantidadeDownloads } = req.params;

    if(!musica) return res.status(404).json();

    musica.quantidadeDownloads = quantidadeDownloads;

});

const resultadoSave = await Usuario.save();
console.log(resultadoSave);

//deletar usuario pelo nome
router.delete('/delete/:nome', async(req,res) =>{
    const { nome } = req.params;
try{
    await UsuarioService.deletarUsuario(nome);
    res.status(200).json({message: 'Usuario deletado com sucesso'});
}
catch{
    res.status(404).send('Usuario nao encontrado');

}});


module.exports = router;