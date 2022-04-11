const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Search extends Model {}

Search.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {  
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'search',
  }
);

module.exports = Search;

