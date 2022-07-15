module.exports = (sequelize, dataTypes) => {

  let alias = 'UserPlayer';
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
    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false
    },







  };
  let config = {

  }
  const UserPlayer = sequelize.define(alias, cols, config);

  // aca va la relacion

  return UserPlayer;

}