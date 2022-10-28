import { Product } from './product.model';
import { CreateProductDTO } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDTO):void => {
  // data.id = "1"; // Error: Readonly property 'id' cannot be assigned to
  // data.createdAt = new Date(1999, 1, 1);
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
}

