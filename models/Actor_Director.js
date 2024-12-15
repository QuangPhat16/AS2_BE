'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AD extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  AD.init({
    ADId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['ACTOR', 'DIRECTOR']],
      },
    },
    birthDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },{
    sequelize,
    modelName: 'AD',
  });
  return AD;
};