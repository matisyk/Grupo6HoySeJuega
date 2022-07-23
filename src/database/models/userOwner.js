module.exports = (sequelize, dataTypes) => {

    let alias = 'UserOwner';
    let cols = {
  
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      apellido: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      email: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
      password: {
        type: dataTypes.STRING(200),
        allowNull: false
      },
      nombre_del_lugar: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
    };
    let config = {
      tableName: 'users_owners',
      timestamps: false,
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      // deletedAt: false
    }
    const UserOwner = sequelize.define(alias, cols, config);
  
  //    UserOwner.associate = function (models) {
  
  //    UserOwner.belongsTo(models.DetalleLugarOwner, {
  //      as: "detalleLugar",
  //      foreignKey: 'user_owners_id',
  //    })
  //    UserOwner.belongsTo(models.MedioDePago, {
  //       as: "medioDePago",
  //       foreignKey: 'user_owners_id',
  //     })
  //     UserOwner.belongsTo(models.Ubicacion, {
  //       as: "ubicacion",
  //       foreignKey: 'user_owners_id',
  //     })
  //     UserOwner.belongsTo(models.LogoOwner, {
  //       as: "logoOwner",
  //       foreignKey: 'user_owners_id',
  //     })
  //     UserOwner.hasMany(models.TelefonoOwner, {
  //       as: "telefono",
  //      foreignKey: "user_owners_id"
  //    })
  //    UserOwner.hasMany(models.Cancha, {
  //     as: "cancha",
  //    foreignKey: "user_owners_id"
  //  })
  //     UserOwner.hasMany(models.ImagenOwner, {
  //       as: "imagenOwner",
  //       foreignKey: "user_owners_id"
  //    })
    
  //  }
  
  
    return UserOwner;
  
  }