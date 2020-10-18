const { request } = require("express");

const jwt = require('jsonwebtoken');
const User = require('../models/index').user;

module.exports = (request, response, next) => {
  if(request.method == 'OPTIONS') {
    next();
  } else {
    let sessionToken = request.headers.authorization;

    if (!sessionToken) {
      return response.status(403).send( { auth: false, message: 'no token provided.' } )
    } else {
      jwt.verify(sessionToken, process.env.JWT_SECRET, (error, decoded) => {
        if (decoded) {
          User.findOne({ where: { id: decoded.id } })
            .then(
              user => {
                request.user = user;
                next();
              },
              () => {
                response.status(401).send( { error: 'Not authorized' } );
              })
        } else {
          response.status(400).send( { error: 'Not authorized' } );
        }
      });
    }
  }
}