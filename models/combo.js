'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Combo extends Model {

    static associate(models) {
      // define association here
    }
  }
  Combo.init({
    comboId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    comboName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comboPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    sequelize,
    modelName: 'Combo',
  });
  return Combo;
};