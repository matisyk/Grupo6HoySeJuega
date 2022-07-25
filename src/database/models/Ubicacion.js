module.exports = (sequelize, dataTypes) => {

    let alias = 'Ubicacion';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      provincia: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      localidad: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      municipio: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      calle: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      numeracion: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      users_owners_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: "ubicacion",
      timestamps: false
    }
    const Ubicacion = sequelize.define(alias, cols, config);
  
    // Ubicacion.associate = function (models) { 
  
    //     Ubicacion.belongsTo(models.UserOwner, {
    //         as: "userOwner",
    //         foreignKey: "users_owners_id"
    //        })
  
    // }
  
    return Ubicacion;
  
  }