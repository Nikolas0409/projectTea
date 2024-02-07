const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.User, { foreignKey: 'roleId' });
    }
  }
  Role.init({
    admin: DataTypes.INTEGER,
    user: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};
