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
    tableName: 'dias',
    timestamps: false
  }
  const DiaPlayer = sequelize.define(alias, cols, config);

  DiaPlayer.associate = function (models) {
//DIAS PLAYER
    //    DiaPlayer.belongsToMany(models.UserPlayer, models.HoraPlayer, {
    //      as: "dia_hora",
    //      through: 'dias_horarios_users_players',
    //     foreignKey: 'dias_players_id',
    //      otherKey: 'horas_players_id',
    //     otherKey: 'user_players_id',
    //      timestamps: false
    //    })
    DiaPlayer.hasMany(models.DiaHorarioPlayer, {
      as: "diaYhoraD",
      foreignKey: "dias_players_id"
    })

//DIAS CANCHA
DiaPlayer.hasMany(models.DiaHorarioCancha, {
  as: "diaYhoraD",
  foreignKey: "dias_id"
})

//DIAS ESCUELITA
DiaPlayer.hasMany(models.DiaHorarioEscuelita, {
  as: "diaYhoraD",
  foreignKey: "dias_id"
})

//DIAS TORNEO
DiaPlayer.hasMany(models.DiaHorarioTorneo, {
  as: "diaYhoraD",
  foreignKey: "dias_id"
})

  }

  return DiaPlayer;

}