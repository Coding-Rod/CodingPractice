const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index.js');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler.js');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin))
      callback(null, true);
    else
      callback(new Error('Invalid origin'));
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.info("Server started on port " + port);
});
