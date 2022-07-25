module.exports = (sequelize, dataTypes) => {

    let alias = 'ImagenTorneo';
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
          torneos_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'imagen_torneos',
        timestamps: false
    }
    const ImagenTorneo = sequelize.define(alias, cols, config);
  
    // ImagenTorneo.associate = function (models) {
  
    //   ImagenTorneo.belongsTo(models.Torneo, {
    //     as: "TorneoI",
    //     foreignKey: "torneos_id"
    //   })
    //   }
  
  return ImagenTorneo;
  
  }