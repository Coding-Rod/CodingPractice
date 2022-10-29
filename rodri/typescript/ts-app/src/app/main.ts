import { faker } from '@faker-js/faker';

import { addProduct, updateProduct, findProducts, products } from './products/product.service';

addProduct({
  description: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  color: faker.commerce.color(),
  size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.helpers.arrayElements(),
  name: faker.commerce.productName(),
  stock: faker.datatype.number({ min: 0, max: 100 }),
  categoryId: faker.datatype.uuid(),
});

console.log(products);
const product = products[0];
updateProduct(product.id, {
  name: 'New name',
  stock: 80
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['tag1', 'tag2'],
});