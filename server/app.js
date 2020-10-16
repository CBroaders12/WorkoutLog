const Express = require('express');
const app = Express();

app.get('/', (request, response) => {
  response.send('You have the root route working!')
})

app.listen(9150, () => console.log('[server]: Listening on Port 9150'))