module.exports = (sequelize, dataTypes) => {

  let alias = 'ImagenPlayer';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    link: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    user_players_id: dataTypes.BIGINT(10)
  };
  let config = {
    timestamps: false
  }
  const ImagenPlayer = sequelize.define(alias, cols, config);

  ImagenPlayer.associate = function (models) {

    ImagenPlayer.belongsTo(models.UserPlayer, {
      as: "userPlayer",
      foreignKey: "user_players_id"
    })
  }

  return ImagenPlayer;

}