const { Router, request, response } = require('express');
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
LogsControllerRouter.get('/', (request, response) => {
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
LogsControllerRouter.post('/', (request, response) => {
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
LogsControllerRouter.get('/:id', (request, response) => {
  let logId = request.params.id;
  let userId = request.user.id;

  Log
    .findOne({
      where: {
        id: logId,
        owner_id: userId
      }
    })
    .then(
      logEntry => response.json(logEntry),
      error => response.status(500).send(error.message)
    );
});

/*******************************
 * TODO: PUT request: /:id 
 * Allows individual logs to be updated by a user.
********************************/
LogsControllerRouter.put('/:id', (request, response) => {
  let logID = request.params.id;
  let userId = request.user.id;

  let newDescription = request.body.log.description;
  let newDefinition = request.body.log.definition;
  let newResult = request.body.log.result;

  Log
    .update({
      description: newDescription,
      definition: newDefinition,
      result: newResult
    },
    { where: {
        id: logID,
        owner_id: userId
      }
    })
    .then(
      updatedLog => {
        response.json({
          updatedLog: {
            description: newDescription,
            definition: newDefinition,
            result: newResult
          }
        });
      },
      error => response.status(500).send(error.message)
    );
});

/*******************************
 * TODO: DELETE request: /:id 
 * Allows individual logs to be deleted by a user.
********************************/
LogsControllerRouter.delete('/:id', (request, response) => {
  let logId = request.params.id;
  let userId = request.user.id;

  Log
    .destroy({
      where: {
        id: logId,
        owner_id: userId
      }
    })
    .then(
      data => response.send(`Log ${logId} removed`),
      error => response.status(500).send(error.message)
    );
});


module.exports = LogsControllerRouter;