module.exports = (sequelize, dataTypes) => {

  let alias = 'TelefonoOwner';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    telefono: {
      type: dataTypes.INTEGER(100),
      allowNull: false
    },
    telefono2: {
      type: dataTypes.INTEGER(100),
      allowNull: false
    },
    users_owners_id: dataTypes.BIGINT(10)
  };
  let config = {
    tableName: 'telefonos_owners',
    timestamps: false
  }
  const TelefonoOwner = sequelize.define(alias, cols, config);

  //  TelefonoOwner.associate = function (models) {

  //    TelefonoOwner.belongsTo(models.UserOwner, {
  //      as: "userOwner",
  //      foreignKey: "users_owners_id"
  //     })
  // }

  return TelefonoOwner;

}