'use strict';
const { Model } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class FD extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  FD.init({
    FDId:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    FDName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    sequelize,
    modelName: 'FD',
  });
  return FD;
};