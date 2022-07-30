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

   Deporte.associate = function (models) { 

// USER PLAYER

  Deporte.hasMany(models.UserPlayer, {
    as: "userPlayerD",
    foreignKey: "deportes_players_id"
  })
   Deporte.hasMany(models.UserPlayer, {
     as: "userPlayerD2",
     foreignKey: "deportes_players_id2"
   })

  // USER OWNER

     Deporte.hasMany(models.Escuelita, {
       as: "escuelita",
      foreignKey: "deportes_players_id"
   })
   Deporte.hasMany(models.Cancha, {
       as: "cancha",
       foreignKey: "deportes_players_id"
   })
   Deporte.hasMany(models.Torneo, {
       as: "torneo",
       foreignKey: "deportes_players_id"
   })

  }

  return Deporte;

}