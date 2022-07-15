module.exports = (sequelize, dataTypes) => {

  let alias = 'DiaPlayer';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dia: {
      type: dataTypes.STRING(45),
      allowNull: false
    }
  };
  let config = {
    timestamps: false
  }
  const DiaPlayer = sequelize.define(alias, cols, config);

  // DiaPlayer.associate = function (models) {

  //   DiaPlayer.belongsToMany(models.UserPlayer, models.HoraPlayer, {
  //     as: "dia_hora",
  //     through: 'dias_horarios_users_players',
  //     foreignKey: 'dias_players_id',
  //     otherKey: 'horas_players_id',
  //     otherKey: 'user_players_id',
  //     timestamps: false
  //   })

  // }

  return DiaPlayer;

}