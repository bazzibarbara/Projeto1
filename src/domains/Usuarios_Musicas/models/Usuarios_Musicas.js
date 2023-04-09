const database = require('../../../../database/index');
const Usuario = require('../../Usuarios/models/Usuario');
const Musica = require('../../Musicas/models/Musica');

const UsuarioMusicas = sequelize.define('UsuarioMusica', {
  idMusica: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Musicas',
      key: 'id'
    }
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id'
    }
  }
});

Usuario.belongsToMany(Musica, { through: UsuarioMusicas });
Musica.belongsToMany(Usuario, { through: UsuarioMusicas });

UsuarioMusicas.sync({alter: false, force: false})
    .then(() => {
        console.log('Tabela de UsuarioMusicas foi (re)criada');
    })
    .catch((err) => console.log(err));

module.exports = UsuarioMusicas;
// Musica.belongsToMany(Usuario,{
//     through: {
//         model: MusicaUsuario
//     },
//     foreignKey: 'idMusica',
//     constraint: true
// });
// Usuário.belongsToMany(Musica,{
//     through: {
//         model:MusicaUsuario
//     },
//     foreignKey: 'idUsuario',
//     constraint: true
// });