const { DataTypes } = require('sequelize');
const workoutlogDatabaseObject = require('../db');

const User = workoutlogDatabaseObject.define('user', {
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