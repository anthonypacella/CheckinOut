const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Administrator extends Model {}

Administrator.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [8],
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'administrator'
  }
);

module.exports = Administrator;
