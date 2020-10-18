const { Router, request } = require('express');
const LogsControllerRouter = Router();
const Log = require('../models/index').log;

// TEST ROUTE
LogsControllerRouter.get('/test', (request, response) => {
  response.send("Hello from the logs controller!");
})

/*******************************
 * TODO: GET request: /
 * Gets all logs for an individual user.
********************************/
LogsControllerRouter.get('/log', (request, response) => {
  let userid = request.user.id;

  Log
    .findAll({
      where : { owner_id: userid }
    })
    .then(
      data => response.json(data),
      error => response.status(500).send(error.message)
    );
});

/*******************************
 * TODO: POST request: /
 * Allows users to create a workout log with descriptions, definitions, results, and owner properties.
********************************/
LogsControllerRouter.post('/log', (request, response) => {
  let owner = request.user.id;
  let description = request.body.log.description;
  let definition = request.body.log.definition;
  let result = request.body.log.result;

  Log
    .create({
      description: description,
      definition: definition,
      result: result,
      owner_id: owner
    })
    .then(
      logdata => {
        response.json({
          logdata: logdata
        });
      },
      error => {
        response.status(500).send(error.message)
      }
    );
});

/*******************************
 * TODO: GET request: /:id 
 * Gets individual logs by id for an individual user.
********************************/


/*******************************
 * TODO: PUT request: /:id 
 * Allows individual logs to be updated by a user.
********************************/


/*******************************
 * TODO: DELETE request: /:id 
 * Allows individual logs to be deleted by a user.
********************************/



module.exports = LogsControllerRouter;