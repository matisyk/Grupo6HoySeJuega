module.exports = (sequelize, dataTypes) => {

    let alias = 'UserOwner';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          link: {
            type: dataTypes.STRING(45),
            allowNull: false
          },
    };
    let config = {
        tableName: 'imagen_canchas',
        timestamps: false
    }
    const UserOwner = sequelize.define(alias, cols, config);
  

  
  return UserOwner;
  
  }