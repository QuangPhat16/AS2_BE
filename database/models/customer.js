'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {

    static associate(models) {
      // define association here
    }
    
  }
  Customer.init({
    customerEmail: {
      type: DataTypes.STRING,
      primaryKey:true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },{
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};