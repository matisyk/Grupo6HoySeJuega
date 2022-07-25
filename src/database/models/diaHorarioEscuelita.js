module.exports = (sequelize, dataTypes) => {

    let alias = 'DiaHorarioEscuelita';
    let cols = {
  
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dias_id: dataTypes.BIGINT(10),
      horas_id: dataTypes.BIGINT(10),
      escuelitas_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'dias_y_horas_escuelitas',
      timestamps: false,
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      // deletedAt: false
    }
    const DiaHorarioEscuelita = sequelize.define(alias, cols, config);
  
    DiaHorarioEscuelita.associate = function (models) {
  
      DiaHorarioEscuelita.belongsTo(models.Escuelita, {
        as: "dyhEsc",
        foreignKey: "escuelitas_id"
      })
      DiaHorarioEscuelita.belongsTo(models.HoraPlayer, {
        as: "horaEsc",
        foreignKey: "horas_id"
      })
      DiaHorarioEscuelita.belongsTo(models.DiaPlayer, {
        as: "diaEsc",
        foreignKey: "dias_id"
      })
  
    }
  
    return DiaHorarioEscuelita;
  
  }