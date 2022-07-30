module.exports = (sequelize, dataTypes) => {

    let alias = 'Torneo';
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
          img_t: {
            type: dataTypes.STRING(200),
            allowNull: false
          },
          deportes_players_id: dataTypes.BIGINT(10),
      genero_id: dataTypes.BIGINT(10),
          users_owners_id: dataTypes.BIGINT(10),
    };
    let config = {
        tableName: 'torneos',
        timestamps: false
    }
    const Torneo = sequelize.define(alias, cols, config);

  Torneo.associate = function (models) {

    // Torneo.hasMany(models.ImagenTorneo, {
    //   as:"imagenTorneo",
    //   foreignKey: "torneos_id"
    // })
     Torneo.belongsTo(models.Deporte, {
       as: "deporteT",
       foreignKey: "deportes_players_id"
     })
    Torneo.belongsTo(models.Genero, {
       as: "genero",
       foreignKey: "genero_id"
     })
     Torneo.belongsTo(models.DiaHorarioTorneo, {
    as: "diahora",
       foreignKey: "id"
     })
    
  }
  
  return Torneo;
  
  }