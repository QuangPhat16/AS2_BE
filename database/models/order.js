'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {

    static associate(models) {
      // define association here
    }
  }
  Order.init({
   orderId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    customerEmail:{
      type: DataTypes.STRING,
      allowNull:false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  },{
    sequelize,
    modelName: 'Order',
  });
  return Order;
};