module.exports = (sequelize, dataTypes) => {

  let alias = 'TelefonoPlayer';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    telefono: {
      type: dataTypes.INTEGER(100),
      allowNull: false
    },
    telefono2: {
      type: dataTypes.INTEGER(100),
      allowNull: false
    },
    users_players_id: dataTypes.BIGINT(10)
  };
  let config = {
    tableName: 'telefonos_players',
    timestamps: false
  }
  const TelefonoPlayer = sequelize.define(alias, cols, config);

  //  TelefonoPlayer.associate = function (models) {

  //    TelefonoPlayer.belongsTo(models.UserPlayer, {
  //      as: "userPlayer",
  //      foreignKey: "users_players_id"
  //     })
  // }

  return TelefonoPlayer;

}