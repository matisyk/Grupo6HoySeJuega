module.exports = (sequelize, dataTypes) => {

    let alias = 'DetalleLugarOwner';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      iluminacion: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      iluminacion: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      estacionamiento: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      wifi: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      vestuario: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      }, 
      ducha: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      }, 
      parrilla: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      }, 
      quincho: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      quiosco: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      users_owners_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'detalle_lugar_owners',
      timestamps: false
    }
    const DetalleLugarOwner = sequelize.define(alias, cols, config);
  
    DetalleLugarOwner.associate = function (models) {
  
        DetalleLugarOwner.belongsTo(models.UserOwner, {
         as: "userOwner",
         foreignKey: "users_owners_id"
        })
    }
  
    return DetalleLugarOwner;
  
  }