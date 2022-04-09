// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Movie extends Model {}

// Movie.init(
//   {
//     isan: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: false,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     genre: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     year: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//     director: {
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     actors: {
//         type: Data.ARRAY(DataTypes.STRING),
//         allowNull: true,
//     },
//     production_company: {
//       type: Data.ARRAY(DataTypes.STRING),
//       allowNull: true,
//     },
//     score: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     language: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     subtitles: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true,
//     },
//     description: {
//       type: DataTypes.true,
//       allowNull: true,
//     },
//     key_words: {
//       type: Data.ARRAY(DataTypes.STRING),
//       allowNull: true,
//     }
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'movie',
//   }
// );

// module.exports = Movie;
