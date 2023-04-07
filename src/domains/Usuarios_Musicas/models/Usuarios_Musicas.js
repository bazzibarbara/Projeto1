const Usuario = sequelize.define('Usuario', { name: DataTypes.STRING });
const Musica = sequelize.define('Musica', { name: DataTypes.STRING });
const UsuarioMusicas = sequelize.define('UsuarioMusicas', {
  idMusica: {
    type: DataTypes.INTEGER,
    references: {
      model: Musica,
      key: 'id'
    }
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  }
});

Movie.belongsToMany(Musica, { through: UsuarioMusicas });
Actor.belongsToMany(Usuario, { through: UsuarioMusicas });

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