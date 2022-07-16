module.exports = (sequelize, dataTypes) => {

  let alias = 'Deporte';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    deporte: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    active: {
      type: dataTypes.BOOLEAN,
      allowNull: false
    }
  };
  let config = {
    tableName: "deportes_players",
    timestamps: false
  }
  const Deporte = sequelize.define(alias, cols, config);

  // Deporte.associate = function (models) { 

  //   Deporte.belongsToMany(models.UserPlayer, { 
  //     as: "userPlayer",
  //     through: 'deportes_users_player',
  //     foreignKey: 'deportes_id',
  //     otherKey: 'user_players_id',
  //     timestamps: false
  //   })
  //   Deporte.belongsTo(models.Categoria, {
  //     as: "categoria",
  //     foreignKey: "deportes_id"
  //   })

  // }

  return Deporte;

}