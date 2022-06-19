const express = require('express');
const routerApi = require('./routes/index.js');
const faker = require('faker');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

routerApi(app);

app.listen(port, () => {
  console.info("Server started on port " + port);
});
