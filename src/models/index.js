const Usuario = require('../domains/Usuarios/models/Usuario');
const Musica = require('../domains/Musicas/models/Musica');
const UsuarioMusica = require('../domains/UsuarioMusicas/models/UsuarioMusica')

Musica.belongsToMany(Usuario, { through: UsuarioMusica });
Usuario.belongsToMany(Musica, { through: UsuarioMusica });