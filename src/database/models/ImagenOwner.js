module.exports = (sequelize, dataTypes) => {

    let alias = 'ImagenOwner';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      image: {
        type: dataTypes.STRING(100),
      },
      image2: {
        type: dataTypes.STRING(100),
      },
      image3: {
        type: dataTypes.STRING(100),
      },
      users_owners_id: dataTypes.BIGINT(10)
    };
    let config = {
      tableName: 'imagenes_owners',
      timestamps: false
    }
    const ImagenOwner = sequelize.define(alias, cols, config);
  
    ImagenOwner.associate = function (models) {
  
      ImagenOwner.belongsTo(models.UserOwner, {
        as: "userOwnerI",
        foreignKey: "users_owners_id"
      })
    }
  
    return ImagenOwner;
  
  }