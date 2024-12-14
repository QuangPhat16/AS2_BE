'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
  }
  Employee.init({
    employeeId:{
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      unique:true,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    etype: {
      type: DataTypes.ENUM('CASHIER', 'CLEANER', 'CINEMA'),
      allowNull: false,
    },
    workType: {
      type: DataTypes.ENUM('PARTIME', 'FULLTIME'),
      allowNull: false,
    },
    monthlySalary:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hourlyWage:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isLeader:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};