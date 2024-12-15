'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seatPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  }
  seatPrice.init({
   seatPriceId:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    theaterId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    singlePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50000
    },
   couplePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90000
    },
    VIPPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 70000
    },
  },{
    sequelize,
    modelName: 'seatPrice',
  });
  return seatPrice;
};