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
      users_owners_id: dataTypes.BIGINT(10),
      escuelitas_id: dataTypes.BIGINT(10),
    };
    let config = {
      tableName: 'profesor',
      timestamps: false
    }
    const Profesor = sequelize.define(alias, cols, config);
  
     Profesor.associate = function (models) {

    // Profesor.belongsToMany(models.escuelita , {
    //    as: "escuelita",
    //    through: "torneos_canchas",
    //    foreignKey: "canchas_id",
    //    otherKey: "torneos_id",
    //    timestamps: false
    //  })
       Profesor.hasMany(models.Escuelita, {
         as: "escuelita",
         foreignKey: "id"
       })
     }

  
    return Profesor;
  
  }