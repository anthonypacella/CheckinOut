const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Patron extends Model {}

Patron.init(
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle_initial: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address_2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'patron',
  }
);

module.exports = Patron;