const { Router } = require('express');
const UsersControllerRouter = Router();
const User = require('../models/index').user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UsersControllerRouter.get('/test', (request, response) => {
  response.send("Hello from the users controller!")
})

/*******************************
 * TODO: POST request: /register
 * Allows a new user to be created with an email and password.
********************************/
UsersControllerRouter.post('/register', (request, response) => {
  let email = request.body.email;
  let password = request.body.password;

  User
    .create({
      email: email,
      passwordhash: bcrypt.hashSync(password, 12)
    })
    .then( 
      user => {
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

        response.json({
          user: user,
          message: 'created',
          sessionToken: token
        });
      },
      error => response.status(500).send(error.message)
    );
});

/*******************************
 * TODO: POST request: /login
 * Allows log in with an existing user.
********************************/
UsersControllerRouter.post('/login', (request, response) => {
  response.send("You have found the login route");
})


module.exports = UsersControllerRouter;