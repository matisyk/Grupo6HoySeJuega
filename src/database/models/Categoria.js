module.exports = (sequelize, dataTypes) => {

  let alias = 'Categoria';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    categoria: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    deportes_id: dataTypes.BIGINT(10)
  };
  let config = {
    timestamps: false
  }
  const Categoria = sequelize.define(alias, cols, config);

  // Categoria.associate = function (models) {

  //   Categoria.hasMany(models.Deporte, {
  //     as: "deporte",
  //     foreignKey: "categorias_id"
  //   })

  // }

  return Categoria;

}