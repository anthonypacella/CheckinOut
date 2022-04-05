const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Branch extends Model {}

Branch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address_2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'branch',
  }
);

module.exports = Branch;
