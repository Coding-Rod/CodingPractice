import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'Product 1 description',
  categoryId: 12,
  images: []
})

// console.log(productService.getAll());

const products = productService.getAll();
const productID = products[0].id;

productService.update(productID, {
  title: 'Product 1 updated',
});

const product = productService.findOne(productID);
console.log(product);