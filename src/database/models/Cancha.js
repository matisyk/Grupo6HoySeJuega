module.exports = (sequelize, dataTypes) => {

    let alias = 'Cancha';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      identificacion: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      capacidad: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      valor: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      users_owners_id: dataTypes.BIGINT(10),
      deporte_id: dataTypes.BIGINT(10),
      tipo_de_cancha_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'canchas',
      timestamps: false
    }
    const Cancha = sequelize.define(alias, cols, config);
  
    // Cancha.associate = function (models) {
  

    // Cancha.belongsTo(models.UserOwner, {
    //   as: "userOwner",
    //   foreignKey: "users_owners_id"
    // })
    // Cancha.belongsTo(models.TipoDeCancha,{
    //   as: "tipoDeCancha",
    //   foreignKey: "tipo_de_cancha_id"
    // })
    // Cancha.hasMany(models.ImagenCancha,{
    //   as: "imagenCancha",
    //   foreignKey: "canchas_id"
    // })
    // Cancha.belongsToMany(models.Torneo,{
    //   as: "torneoCancha",
    //   foreignKey: "canchas_id"
    // })
    // }

  
    return Cancha;
  
  }