module.exports = (sequelize, dataTypes) => {

  let alias = 'HomeOwner';
  let cols = {

    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   nombre_del_lugar: {
      type: dataTypes.STRING(100),
      allowNull: false
    },
    img_ho: {
      type: dataTypes.STRING(100),
    },
    img_hl: {
      type: dataTypes.STRING(100),
    },
    users_owners_id: dataTypes.BIGINT(10),
  };
  let config = {
    tableName: 'home_owners',
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false
  }
  const HomeOwner = sequelize.define(alias, cols, config);

  HomeOwner.associate = function (models) {

    
  }


  return HomeOwner;

}