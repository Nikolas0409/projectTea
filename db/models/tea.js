const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    static associate(models) {
      this.hasMany(models.Comment, { foreignKey: 'teaId' });
    }
  }
  Tea.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    image: DataTypes.TEXT,
    discription: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Tea',
  });
  return Tea;
};
