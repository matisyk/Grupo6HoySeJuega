module.exports = (sequelize, dataTypes) => {

  let alias = 'Escuelita';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    valor: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    categoria: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    alumnos: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    img_e: {
      type: dataTypes.STRING(200),
      allowNull: false
    },
    genero_id: dataTypes.BIGINT(10),
    deportes_players_id: dataTypes.BIGINT(10),
    canchas_id: dataTypes.BIGINT(10),
    users_owners_id: dataTypes.BIGINT(10),
  };
  let config = {
    tableName: 'escuelitas',
    timestamps: false
  }
  const Escuelita = sequelize.define(alias, cols, config);

  Escuelita.associate = function (models) {


    Escuelita.belongsTo(models.Deporte, {
      as: "deporteE",
      foreignKey: "deportes_players_id"
    })
     Escuelita.belongsTo(models.Genero,{
       as: "genero",
       foreignKey: "genero_id"
     })
    // Escuelita.hasMany(models.ImagenEscuelita,{
    //   as: "imagenEscuelita",
    //   foreignKey: "escuelita_id"
    // })
    //  Escuelita.belongsToMany(models.profesorEscuelita, {
    //     as: "torneoCancha",
    //     through: "torneos_canchas",
    //     foreignKey: "canchas_id",
    //     otherKey: "torneos_id",
    //     timestamps: false
    //   })
      Escuelita.belongsTo(models.DiaHorarioEscuelita, {
        as: "diaYhora",
       foreignKey: "id"
      })
    Escuelita.belongsTo(models.Cancha, {
      as: "cancha",
      foreignKey: "canchas_id"
    })
    Escuelita.belongsTo(models.Profesor, {
      as: "profesor",
      foreignKey: "id"
    })
  }


  return Escuelita;

}