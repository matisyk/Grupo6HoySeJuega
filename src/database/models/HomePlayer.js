module.exports = (sequelize, dataTypes) => {

  let alias = 'HomePlayer';
  let cols = {

    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    img_hp: {
      type: dataTypes.STRING(100),
    },
    users_players_id: dataTypes.BIGINT(10),
  };
  let config = {
    tableName: 'home_players',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false
  }
  const HomePlayer = sequelize.define(alias, cols, config);

  HomePlayer.associate = function (models) {

    
  }


  return HomePlayer;

}