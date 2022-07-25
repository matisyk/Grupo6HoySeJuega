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
    },
  };
  let config = {
    tableName: 'horas',
    timestamps: false
  }
  const HoraPlayer = sequelize.define(alias, cols, config);

  HoraPlayer.associate = function (models) {


 //HORAS PLAYER
    //    HoraPlayer.belongsToMany(models.UserPlayer, models.DiaPlayer, {
    //      as: "dia_hora",
    //      through: 'dias_horarios_users_players',
    //      foreignKey: 'horas_players_id',
    //      otherKey: 'dias_players_id',
    //      otherKey: 'user_players_id',
    //      timestamps: false
    //    })
    HoraPlayer.hasMany(models.DiaHorarioPlayer, {
      as: "diaYhoraH",
      foreignKey: "horas_players_id"
    })

// //HORAS CANCHA
// DiaPlayer.hasMany(models.DiaHorarioCancha, {
//   as: "horaCancha",
//   foreignKey: "horas_id"
// })

// //HORAS ESCUELITA
// DiaPlayer.hasMany(models.DiaHorarioEscuelita, {
//   as: "horaEsc",
//   foreignKey: "horas_id"
// })

// //HORAS TORNEO
// DiaPlayer.hasMany(models.DiaHorarioTorneo, {
//   as: "horaTorneo",
//   foreignKey: "horas_id"
// })
  }

  return HoraPlayer;

}