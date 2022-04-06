const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cd extends Model {}

Cd.init(
  {
    discid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tracks: {
      type: Data.ARRAY(DataTypes.STRING), 
      allowNull: true,
    },
    description: {
      type: DataTypes.true,
      allowNull: true,
    },
    key_words: {
      type: Data.ARRAY(DataTypes.STRING),
      allowNull: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cd',
  }
);

module.exports = Cd;
