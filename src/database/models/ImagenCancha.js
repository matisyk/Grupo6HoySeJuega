module.exports = (sequelize, dataTypes) => {

    let alias = 'ImagenCancha';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          img_c: {
            type: dataTypes.STRING(200),
            allowNull: false
          },
          canchas_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'imagen_canchas',
        timestamps: false
    }
    const ImagenCancha = sequelize.define(alias, cols, config);
  
    ImagenCancha.associate = function (models) {
  
      ImagenCancha.belongsTo(models.Cancha, {
        as: "imagenCancha",
        foreignKey: "canchas_id"
      })
      }
  
  return ImagenCancha;
  
  }