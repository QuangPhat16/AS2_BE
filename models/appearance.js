'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appearance extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  Appearance.init({
    ADId:{
      type: DataTypes.STRING,
      allowNull:false
    },
    movieId:{
      type: DataTypes.STRING,
      allowNull:false
    }
  },{
    sequelize,
    modelName: 'Appearance',
  });
  return Appearance;
};