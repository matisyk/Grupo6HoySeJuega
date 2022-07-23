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
    tableName: 'dias_horarios_users_players',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false
  }
  const DiaHorarioPlayer = sequelize.define(alias, cols, config);

  // aca va la relacion

  return DiaHorarioPlayer;

}