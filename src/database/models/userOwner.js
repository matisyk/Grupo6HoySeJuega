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
  
     UserOwner.associate = function (models) {
  
      UserOwner.hasMany(models.DetalleLugarOwner, {
        as: "detalleLugar",
        foreignKey: 'users_owners_id',
      })
      UserOwner.hasMany(models.MedioDePago, {
         as: "medioDePago",
         foreignKey: 'users_owners_id',
       })
       UserOwner.hasMany(models.Ubicacion, {
         as: "ubicacion",
         foreignKey: 'users_owners_id',
       })
       UserOwner.hasMany(models.LogoOwner, {
         as: "logoOwner",
         foreignKey: 'users_owners_id',
       })
  //     UserOwner.hasMany(models.TelefonoOwner, {
  //       as: "telefono",
  //      foreignKey: "users_owners_id"
  //    })
     UserOwner.hasMany(models.Cancha, {
      as: "canchas",
     foreignKey: "users_owners_id"
   })
      UserOwner.hasMany(models.ImagenOwner, {
        as: "imagenOwner",
        foreignKey: "users_owners_id"
      })
       
    
   }
  
  
    return UserOwner;
  
  }