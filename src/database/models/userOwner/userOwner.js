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
  
     UserOwner.belongsTo(models.DetalleLugarOwners, {
       as: "detalleLugar",
       foreignKey: 'user_owners_id',
     })
     UserOwner.belongsTo(models.MedioDePago, {
        as: "medioDePago",
        foreignKey: 'user_owners_id',
      })
      UserOwner.hasMany(models.TelefonoOwner, {
        as: "telefono",
       foreignKey: "user_players_id"
     })
      UserOwner.hasMany(models.ImagenOwner, {
        as: "imagenOwner",
        foreignKey: "user_owners_id"
     })
    //   UserOwner.belongsToMany(models.DiaPlayer, models.HoraPlayer, {
    //     as: "dia_hora",
    //     through: 'dias_horarios_users_players',
    //     foreignKey: 'user_players_id',
    //     otherKey: 'dias_players_id',
    //     otherKey: 'horas_players_id',
    //     timestamps: false
    //   })
    }
  
  
    return UserOwner;
  
  }