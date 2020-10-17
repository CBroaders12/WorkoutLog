const Sequelize = require('sequelize');

const workoutSequelizeObject = new Sequelize(
  'workoutlogdb',
  'conorbroaders',
  process.env.postgres_password,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = workoutSequelizeObject;