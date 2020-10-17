const { Router } = require('express');
const UsersControllerRouter = Router();
const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UsersControllerRouter.get('/test', (request, response) => {
  response.send("Hello from the users controller!")
})

/*******************************
 * TODO: POST request: /register
 * Allows a new user to be created with a username and password.
********************************/
UsersControllerRouter.post('/register', (request, response) => {
  response.send("You have found the register route")
})

/*******************************
 * TODO: POST request: /login
 * Allows log in with an existing user.
********************************/
UsersControllerRouter.post('/login', (request, response) => {
  response.send("You have found the login route");
})


module.exports = UsersControllerRouter;