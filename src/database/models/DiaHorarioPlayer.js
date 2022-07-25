module.exports = (sequelize, dataTypes) => {

  let alias = 'DiaHorarioPlayer';
  let cols = {

    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dias_players_id: dataTypes.BIGINT(10),
    horas_players_id: dataTypes.BIGINT(10),
    users_players_id: dataTypes.BIGINT(10)
  };
  let config = {
    tableName: 'dias_y_horas_player',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false
  }
  const DiaHorarioPlayer = sequelize.define(alias, cols, config);

  DiaHorarioPlayer.associate = function (models) {

    DiaHorarioPlayer.belongsTo(models.UserPlayer, {
      as: "dyh",
      foreignKey: "users_players_id"
    })
    DiaHorarioPlayer.belongsTo(models.HoraPlayer, {
      as: "horaP",
      foreignKey: "horas_players_id"
    })
    DiaHorarioPlayer.belongsTo(models.DiaPlayer, {
      as: "diaP",
      foreignKey: "dias_players_id"
    })

  }

  return DiaHorarioPlayer;

}