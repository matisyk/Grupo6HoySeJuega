module.exports = (sequelize, dataTypes) => {

    let alias = 'DetalleLugarOwner';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      iluminacion: {
        type: dataTypes.STRING(2),
        allowNull: false
      },
      estacionamiento: {
        type: dataTypes.STRING(2),
        allowNull: false
      },
      wifi: {
        type: dataTypes.STRING(2),
        allowNull: false
      },
      vestuario: {
        type: dataTypes.STRING(2),
        allowNull: false
      }, 
      ducha: {
        type: dataTypes.STRING(2),
        allowNull: false
      }, 
      parrilla: {
        type: dataTypes.STRING(2),
        allowNull: false
      }, 
      quincho: {
        type: dataTypes.STRING(2),
        allowNull: false
      },
      quiosco: {
        type: dataTypes.STRING(2),
        allowNull: false
      },
      users_owners_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'detalle_lugar_owners',
      timestamps: false
    }
    const DetalleLugarOwner = sequelize.define(alias, cols, config);
  
    // DetalleLugarOwner.associate = function (models) {
  
    //     DetalleLugarOwner.belongsTo(models.UserOwner, {
    //      as: "userOwner",
    //      foreignKey: "users_owners_id"
    //     })
    // }
  
    return DetalleLugarOwner;
  
  }