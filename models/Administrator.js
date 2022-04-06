const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Administrator extends Model {}

Administrator.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'administrator',
  }
);

module.exports = Administrator;
