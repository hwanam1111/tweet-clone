module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    tableName: 'TB_IMAGE',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });

  Image.associate = (db) => {
    db.Image.belongsTo(db.User);
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
