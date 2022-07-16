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

  // AutoValoracion.associate = function (models) {

  //   AutoValoracion.belongsTo(models.UserPlayer, {
  //     as: "userPlayer",
  //     foreignKey: "user_players_id"
  //   })
  // }

  return AutoValoracion;

}