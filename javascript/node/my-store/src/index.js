const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

// Startup config
const app = express();
const port = 3000;

// Middleware for body parser
app.use(express.json());

// CORS config
const whitelist = [
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'http://127.0.0.1:8000',
];
const corsOptions = {
  origin: (origin, callback) => {
    whitelist.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  },
};
app.use(cors(corsOptions));

// Main routes
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Router
routerApi(app);

// Middlewares for errors
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Port listener
app.listen(port);
