module.exports = (sequelize, dataTypes) => {

  let alias = 'Telefono';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    telefono: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    deportes_id: dataTypes.BIGINT(10)
  };
  let config = {
    timestamps: false
  }
  const Telefono = sequelize.define(alias, cols, config);

  Telefono.associate = function (models) {

     Telefono.belongsTo(models.UserPlayer, {
       as: "userPlayer",
       foreignKey: "user_players_id"
     })
  }

  return Telefono;

}