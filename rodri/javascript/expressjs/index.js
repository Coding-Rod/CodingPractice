import express, { request } from 'express';
import faker from 'faker';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hola mi server en express");
});

app.get('/nueva-ruta', (req, res) => {
  res.send("Hola, soy una nueva ruta");
});

app.get('/products', (req, res) => {
  const products = [];
  let { limit, offset } = req.query;
  limit = parseInt(limit) || 10;
  offset = parseInt(offset) || 0;
  for (let index = 0; index < 100; index++) {
    products.push({
      id: index,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  // console.log(products);
  // console.log(limit);
  // console.log(offset);
  // console.log(limit + offset);
  res.json(products.slice(offset, limit+offset));
});

app.get('/products/filter', (req, res) => {
  res.send("Hello, I am a filter!");
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

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  limit && offset ?
    res.json({ limit, offset }) :
    res.send('No hay parametros');
});

app.listen(port, () => {
  console.log("Mi port "+ port);
});
