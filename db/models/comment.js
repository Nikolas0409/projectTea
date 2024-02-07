const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Tea, { foreignKey: 'teaId' });
    }
  }
  Comment.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    teaId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
