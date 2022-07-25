module.exports = (sequelize, dataTypes) => {

    let alias = 'Escuelita';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      // ASI ESTA EN DIAGRAMA:
    //   identificacion_cancha: {
    //     type: dataTypes.STRING(45),
    //     allowNull: false
    //   },
      valor: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      genero_id: dataTypes.BIGINT(10),
      deporte_id: dataTypes.BIGINT(10),
    };
    let config = {
      tableName: 'escuelitas',
      timestamps: false
    }
    const Escuelita = sequelize.define(alias, cols, config);
  
    // Escuelita.associate = function (models) {
  

    // Escuelita.belongsTo(models.Deporte, {
    //   as: "deporteE",
    //   foreignKey: "deporte_id"
    // })
    // Escuelita.belongsTo(models.Genero,{
    //   as: "genero",
    //   foreignKey: "genero_id"
    // })
    // Escuelita.hasMany(models.ImagenEscuelita,{
    //   as: "imagenEscuelita",
    //   foreignKey: "escuelita_id"
    // })
      //  Escuelita.belongsToMany(models.profesorEscuelita, {
  //     as: "torneoCancha",
  //     through: "torneos_canchas",
  //     foreignKey: "canchas_id",
  //     otherKey: "torneos_id",
  //     timestamps: false
  //   })
  Escuelita.hasMany(models.DiaHorarioEscuelita, {
    as: "diaYhora",
    foreignKey: "escuelitas_id"
  })
    // }

  
    return Escuelita;
  
  }