'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countrty extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  Countrty.init({
    countryId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
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
    modelName: 'Countrty',
  });
  return Countrty;
};