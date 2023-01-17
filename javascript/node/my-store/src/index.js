const express = require('express');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

// Startup config
const app = express();
const port = 3000;

app.use(express.json());

// Main routes
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Router
routerApi(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Port listener
app.listen(port, () => {
  console.log('Mi port ' + port);
});
