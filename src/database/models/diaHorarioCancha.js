module.exports = (sequelize, dataTypes) => {

    let alias = 'DiaHorarioCancha';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      canchas_id: dataTypes.BIGINT(10),
      dias_id: dataTypes.BIGINT(10),
      horas_id: dataTypes.BIGINT(10),
    };
    let config = {
      tableName: 'dias_y_horas_canchas',
      timestamps: false
    }
    const DiaHorarioCancha = sequelize.define(alias, cols, config);
  
    DiaHorarioCancha.associate = function (models) {
  
    // DiaHorarioCancha.belongsTo(models.Cancha, {
    //   as: "dyh",
    //   foreignKey: "canchas_id"
    // })
    // DiaHorarioCancha.belongsTo(models.HoraPlayer, {
    //   as: "horaP",
    //   foreignKey: "horas_id"
    // })
    // DiaHorarioCancha.belongsTo(models.DiaPlayer, {
    //   as: "diaP",
    //   foreignKey: "dias_id"
    // })
  
    }
  
    return DiaHorarioCancha;
  
  }