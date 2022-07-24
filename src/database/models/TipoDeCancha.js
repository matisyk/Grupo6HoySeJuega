module.exports = (sequelize, dataTypes) => {

    let alias = 'TipoDeCancha';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          material: {
            type: dataTypes.STRING(45),
            allowNull: false
          },
          canchas_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'tipo_de_cancha',
        timestamps: false
    }
    const UserOwner = sequelize.define(alias, cols, config);
  
    TipoDeCancha.associate = function (models) {
        TipoDeCancha.hasMany(models.Cancha, {
             as: "cancha",
            foreignKey: "tipo_de_cancha_id"
          })
        }
  
  return UserOwner;
  
  }