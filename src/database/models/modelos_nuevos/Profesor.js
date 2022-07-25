module.exports = (sequelize, dataTypes) => {

    let alias = 'Profesor';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      apellido: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
    };
    let config = {
      tableName: 'profesor',
      timestamps: false
    }
    const Profesor = sequelize.define(alias, cols, config);
  
    // Profesor.associate = function (models) {
  

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
    // CAMBIAR TORNEOS A REL. MUCHOS A MUCHOS EN DIAGRAMA
      //  Profesor.belongsToMany(models.profesorEscuelita, {
  //     as: "torneoCancha",
  //     through: "torneos_canchas",
  //     foreignKey: "canchas_id",
  //     otherKey: "torneos_id",
  //     timestamps: false
  //   })

  //  Profesor.belongsToMany(models. HORARIO , {
  //     as: "torneoCancha",
  //     through: "torneos_canchas",
  //     foreignKey: "canchas_id",
  //     otherKey: "torneos_id",
  //     timestamps: false
  //   })
    // }

  
    return Escuelita;
  
  }