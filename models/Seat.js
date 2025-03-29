// 📁 models/Seat.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Seat = sequelize.define("Seat", {
  seat_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  row_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_booked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Seat;
