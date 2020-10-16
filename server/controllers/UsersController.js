const { Router, response } = require('express');

const UsersControllerRouter = Router();

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