'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieGenre extends Model {

    static associate(models) {
      // define association here
    } 
  }
  movieGenre.init({
    movieGenreName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieId:{
      type: DataTypes.STRING,
      allowNull:false
    },
  },{
    sequelize,
    modelName: 'movieGenre',
  });
  return movieGenre;
};