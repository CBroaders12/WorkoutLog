const { Router } = require('express');

const LogsControllerRouter = Router();

// TEST ROUTE
LogsControllerRouter.get('/test', (request, response) => {
  response.send("Hello from the logs controller!");
})

/*******************************
 * TODO: GET request: /
 * Gets all logs for an individual user.
********************************/


/*******************************
 * TODO: POST request: /
 * Allows users to create a workout log with descriptions, definitions, results, and owner properties.
********************************/


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