'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  Country.init({
    countryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieId:{
      type: DataTypes.STRING,
      allowNull:false
    },
  },{
    sequelize,
    modelName: 'Country',
  });
  return Country;
};