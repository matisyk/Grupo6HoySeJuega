module.exports = (sequelize, dataTypes) => {

  let alias = 'ZonaDeJuego';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provincia: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    localidad: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    municipio: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
  };
  let config = {
    tableName: "zonas_de_juego",
    timestamps: false
  }
  const ZonaDeJuego = sequelize.define(alias, cols, config);

  // ZonaDeJuego.associate = function (models) { 

  //   ZonaDeJuego.belongsToMany(models.UserPlayer, { 
  //     as: "userPlayer",
  //     through: 'ZonaDeJuegos_users_player',
  //     foreignKey: 'ZonaDeJuegos_id',
  //     otherKey: 'user_players_id',
  //     timestamps: false
  //   })
  //   ZonaDeJuego.belongsTo(models.Categoria, {
  //     as: "categoria",
  //     foreignKey: "ZonaDeJuegos_id"
  //   })

  // }

  return ZonaDeJuego;

}