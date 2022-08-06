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
    img_c: {
      type: dataTypes.STRING(200),
      allowNull: false
    },
    users_owners_id: dataTypes.BIGINT(10),
    tipo_de_cancha_id: dataTypes.BIGINT(10),
    deportes_players_id: dataTypes.BIGINT(10),

  };
  let config = {
    tableName: 'canchas',
    timestamps: false
  }
  const Cancha = sequelize.define(alias, cols, config);

  Cancha.associate = function (models) {


    Cancha.belongsTo(models.UserOwner, {
      as: "userOwner",
      foreignKey: "users_owners_id"
    })
    Cancha.hasMany(models.ImagenCancha, {
      foreignKey: "canchas_id"
    })
     Cancha.belongsTo(models.TipoDeCancha,{
       as: "tipoDeCancha",
       foreignKey: "tipo_de_cancha_id"
     })
    // Cancha.hasMany(models.ImagenCancha,{
    //   as: "imagenCancha",
    //   foreignKey: "canchas_id"
    // })
    Cancha.belongsTo(models.Deporte,{
       as: "deporte",
       foreignKey: "deportes_players_id"
    })
    // Cancha.hasMany(models.DiaHorarioCancha, {
    //   as: "diaYhora",
    //   foreignKey: "canchas_id"
    // })
  }

  return Cancha
}