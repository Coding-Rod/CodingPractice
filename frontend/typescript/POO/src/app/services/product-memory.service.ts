import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService{
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(data: CreateProductDTO): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: faker.datatype.number(),
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }
    this.products.push(newProduct);
    return newProduct;
  }

  add(product: Product){
    this.products.push(product);
    return product;
  }

  update = (id: Product['id'], changes: UpdateProductDTO): Product => {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...changes,
    }
    return this.products[productIndex];
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find(item => item.id === id) as Product;
  }
}


