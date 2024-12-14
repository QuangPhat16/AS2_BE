'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class showtimeSeat extends Model {
    static associate(models) {
      // define association here
    }
  }
  showtimeSeat.init({
    seatId:{
      type: DataTypes.STRING,
      primaryKey: true,
    },
    showtimeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticketId: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    sequelize,
    modelName: 'showtimeSeat',
  });
  return showtimeSeat;
};