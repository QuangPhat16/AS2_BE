'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comboHas extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  comboHas.init({
    comboId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    FDId:{
      type: DataTypes.STRING,
      allowNull:false
    },
    FDquantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    sequelize,
    modelName: 'comboHas',
  });
  return comboHas;
};