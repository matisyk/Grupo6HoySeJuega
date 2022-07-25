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

  //  Profesor.belongsToMany(models.escuelita , {
  //     as: "escuelita",
  //     through: "torneos_canchas",
  //     foreignKey: "canchas_id",
  //     otherKey: "torneos_id",
  //     timestamps: false
  //   })
    // }

  
    return Escuelita;
  
  }