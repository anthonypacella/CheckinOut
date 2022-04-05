const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Movie.init(
  {
    isan: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    director: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    actors: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    score: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
      type: DataTypes.true,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
