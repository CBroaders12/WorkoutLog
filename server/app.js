require('dotenv').config();

const Express = require('express');
const app = Express();
const port = 9150;

const workoutlogDatabaseObject = require('./db');

// Import Controllers
const { logs, users } = require('./controllers/index');

// CORS
app.use(require('./middleware/corsMiddleware'));

// Middleware
app.use(Express.json());

// Controller Routes
//~  OPEN ROUTES
app.use('/user', users);

//~ AUTHENTICATED ROUTES
app.use(require('./middleware/validate-session')); // Only validated users can create logs
app.use('/log', logs);

// Sync to database and start listening
workoutlogDatabaseObject
  .authenticate()
  .then(() => workoutlogDatabaseObject.sync())
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Listening on http://localhost:${port}`)
    });
  })
  .catch(error => console.log(error));
