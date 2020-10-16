const Express = require('express');
const app = Express();
const port = 9150;

const workoutlogDatabaseObject = require('./db');

// Import Controllers
const { logs, users } = require('./controllers/index');

// Setup routes to controllers
app.use('/users', users);
app.use('/logs', logs);

workoutlogDatabaseObject
  .authenticate()
  .then(() => workoutlogDatabaseObject.sync())
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Listening on http://localhost:${port}`)
    });
  })
  .catch(error => console.log(error));
