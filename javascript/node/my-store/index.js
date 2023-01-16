const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

const product_gen = (size = 100) => {
  const products = [];
  for (let i = 0; i < size; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
    });
  }
  return products;
};

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Hello Test!'));
app.get('/products', (req, res) => {
  const { size } = req.query;
  res.json(product_gen(size));
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = product_gen(parseInt(id) + 1).find(
    (p) => p.id === parseInt(id)
  );
  res.json(product);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  const users = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
    {
      id: 3,
      name: 'User 3',
    },
  ];
  res.json(users.slice(offset, limit));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
