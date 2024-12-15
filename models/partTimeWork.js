'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class partTimeWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  partTimeWork.init({
    employeeId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    workDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    morningShift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    afternoonShift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    nightShift: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    theaterId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    sequelize,
    modelName: 'partTimeWork',
  });
  return partTimeWork;
};