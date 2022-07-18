module.exports = (sequelize, dataTypes) => {

    let alias = 'medioDePago';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      transferencia: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      mercado_pago: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      efectivo: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      tarjeta: {
        type: dataTypes.BOOLEAN,
        allowNull: false
      },
      users_owners_id: dataTypes.BIGINT(10)
    };

    let config = {
      tableName: 'medios_de_pago',
      timestamps: false
    }
    const medioDePago = sequelize.define(alias, cols, config);
  
    medioDePago.associate = function (models) {
  
        medioDePago.belongsTo(models.UserOwner, {
         as: "userOwner",
         foreignKey: "users_owners_id"
        })
    }
  
    return medioDePago;
  
  }