module.exports = (sequelize, dataTypes) => {

    let alias = 'ImagenEscuelita';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          link: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          escuelitas_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'imagen_escuelitas',
        timestamps: false
    }
    const ImagenEscuelita = sequelize.define(alias, cols, config);
  
    ImagenEscuelita.associate = function (models) {
  
        ImagenEscuelita.belongsTo(models.Escuelita, {
        as: "escuelita",
        foreignKey: "escuelitas_id"
      })
      }
  
  return ImagenEscuelita;
  
  }