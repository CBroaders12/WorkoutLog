const { DataTypes } = require('sequelize');
const workoutlogDatabaseObject = require('../db');

const Log = workoutlogDatabaseObject.define('log', {
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  definition: {
    type: DataTypes.STRING,
    allowNull: false
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Log;