const Sequelize = require('sequelize');

const workoutSequelizeObject = new Sequelize(
  'workoutlogdb',
  'conorbroaders',
  'GiveMeSecurity12',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = workoutSequelizeObject;