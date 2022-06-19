import express, { request } from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-tura', (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

app.get('/products', (req, res) => {
  res.json([
    {
    name: 'Product 1',
    price: '$10.00',
    },
    {
    name: 'Product 2',
    price: '$20.00',
    },
  ])
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: '$10.00',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.listen(port, () => {
  console.log("Mi port "+ port);
});
