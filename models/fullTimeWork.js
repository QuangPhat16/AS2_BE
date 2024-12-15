'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fullTimeWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fullTimeWork.init({
    employeeId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    workDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.NOW
    },
    presentStatus: {
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
    modelName: 'fullTimeWork',
  });
  return fullTimeWork;
};