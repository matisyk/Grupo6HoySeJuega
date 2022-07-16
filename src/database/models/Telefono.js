module.exports = (sequelize, dataTypes) => {

  let alias = 'Telefono';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    telefono: {
      type: dataTypes.INTEGER(45),
      allowNull: false
    },
    telefono2: {
      type: dataTypes.INTEGER(45),
      allowNull: false
    },
    users_players_id: dataTypes.BIGINT(10)
  };
  let config = {
    tableName: 'telefonos_players',
    timestamps: false
  }
  const Telefono = sequelize.define(alias, cols, config);

   Telefono.associate = function (models) {

     Telefono.belongsTo(models.UserPlayer, {
       as: "userPlayer",
       foreignKey: "users_players_id"
      })
  }

  return Telefono;

}