module.exports = (sequelize, dataTypes) => {

  let alias = 'HoraPlayer';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    hora: {
      type: dataTypes.TIME(),
      allowNull: false
    }
  };
  let config = {
    tableName: 'horas_players',
    timestamps: false
  }
  const HoraPlayer = sequelize.define(alias, cols, config);

  // HoraPlayer.associate = function (models) {

  //   HoraPlayer.belongsToMany(models.UserPlayer, models.DiaPlayer, {
  //     as: "dia_hora",
  //     through: 'dias_horarios_users_players',
  //     foreignKey: 'horas_players_id',
  //     otherKey: 'dias_players_id',
  //     otherKey: 'user_players_id',
  //     timestamps: false
  //   })

  // }

  return HoraPlayer;

}