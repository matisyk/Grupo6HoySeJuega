module.exports = (sequelize, dataTypes) => {

    let alias = 'UserOwner';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          cantidad_equipos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
          },
          categoria: {
            type: dataTypes.STRING(45),
            allowNull: false
          },
          valor: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          premio: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          fecha_inicio: {
            type: dataTypes.DATE,
            allowNull: false
          },
          fecha_fin: {
            type: dataTypes.DATE,
            allowNull: false
          },
          canchas_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'tipo_de_cancha',
        timestamps: false
    }
    const UserOwner = sequelize.define(alias, cols, config);
  
  
  return UserOwner;
  
  }