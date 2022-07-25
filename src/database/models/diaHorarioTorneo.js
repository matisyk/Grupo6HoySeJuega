module.exports = (sequelize, dataTypes) => {

    let alias = 'DiaPlayer';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      torneos_id: dataTypes.BIGINT(10),
      horas_id: dataTypes.BIGINT(10),
      dias_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'dias_y_horas_torneos',
      timestamps: false
    }
    const DiaPlayer = sequelize.define(alias, cols, config);
  
    DiaPlayer.associate = function (models) {
  
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
  
    }
  
    return DiaPlayer;
  
  }