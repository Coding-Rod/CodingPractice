import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  name: 'T-Shirt',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
  category: {
    id: 1,
    name: 'Clothes',
  }
});