module.exports = (sequelize, dataTypes) => {

    let alias = 'LogoOwner';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      logo: {
        type: dataTypes.STRING(100),
        allowNull: false
      },
    };
    let config = {
      tableName: "logo_owners",
      timestamps: false
    }
    const LogoOwner = sequelize.define(alias, cols, config);
  
    // LogoOwner.associate = function (models) { 
  
    //        LogoOwner.belongsTo(models.UserOwner, {
    //         as: "userOwner",
    //         foreignKey: "users_owners_id"
    //        })
  
    // }
  
    return LogoOwner;
  
  }