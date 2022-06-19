const express = require('express');
const routerApi = require('./routes/index.js');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

routerApi(app);

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   });
// });

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   limit && offset ?
//     res.json({ limit, offset }) :
//     res.send('No hay parametros');
// });

app.listen(port, () => {
  console.log("Mi port "+ port);
});
