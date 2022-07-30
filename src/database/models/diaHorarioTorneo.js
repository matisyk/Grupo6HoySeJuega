module.exports = (sequelize, dataTypes) => {

    let alias = 'DiaHorarioTorneo';
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
    const DiaHorarioTorneo = sequelize.define(alias, cols, config);
  
     DiaHorarioTorneo.associate = function (models) {

       DiaHorarioTorneo.hasMany(models.Torneo, {
         
         foreignKey: "id"
       })
       
    //   DiaHorarioTorneo.belongsTo(models.Torneo, {
    //     as: "dyh",
    //     foreignKey: "torneos_id"
    //   })
    //   DiaHorarioTorneo.belongsTo(models.HoraPlayer, {
    //     as: "horaP",
    //     foreignKey: "horas_id"
    //   })
    //   DiaHorarioTorneo.belongsTo(models.DiaPlayer, {
    //     as: "diaP",
    //     foreignKey: "dias_id"
    //   })
  
    }
  
    return DiaHorarioTorneo;
  
  }