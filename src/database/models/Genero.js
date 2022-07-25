module.exports = (sequelize, dataTypes) => {

    let alias = 'Genero';
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      genero: {
        type: dataTypes.STRING(45),
        allowNull: false
      },
    };
    let config = {
      tableName: 'genero',
      timestamps: false
    }
    const Genero = sequelize.define(alias, cols, config);
  
    // Genero.associate = function (models) {
  
    // Genero.hasMany(models.Escuelita,{
    //   as: "escuelita",
    //   foreignKey: "genero_id"
    // })
    // Genero.hasMany(models.Torneo,{
    //   as: "torneo",
    //   foreignKey: "genero_id"
    // })
    // }

  
    return Genero;
  
  }