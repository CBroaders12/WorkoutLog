const { DataTypes } = require('sequelize');
const workoutlogDatabase = require('../db');

const User = workoutlogDatabase.define('user', {
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  passwordhash: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;