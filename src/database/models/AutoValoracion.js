module.exports = (sequelize, dataTypes) => {

  let alias = 'AutoValoracion';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo:{
      type: dataTypes.STRING(45),
    },
    
  };
  let config = {
    tableName: 'auto_valoracion',
    timestamps: false
  }
  const AutoValoracion = sequelize.define(alias, cols, config);

   AutoValoracion.associate = function (models) {

     AutoValoracion.hasMany(models.UserPlayer, {
      as: "userPlayer",
       foreignKey: "auto_valoracion_id"
     })
 }

  return AutoValoracion;

}