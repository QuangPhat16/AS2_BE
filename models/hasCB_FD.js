'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hasCB_FD extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  hasCB_FD.init({
   orderId:{
      //primary reference key
      type: DataTypes.STRING,
      primaryKey: true,
    },
    comboId:{
      type: DataTypes.STRING,
      allowNull: true
    },
    FDId:{
      type: DataTypes.STRING,
      allowNull:true
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    }
  },{
    sequelize,
    modelName: 'hasCB_FD',
  });
  return hasCB_FD;
};