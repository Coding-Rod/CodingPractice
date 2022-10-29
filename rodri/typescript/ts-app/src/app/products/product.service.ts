import { Product } from './product.model';
import { CreateProductDTO, UpdateProductDTO, findProductDTO } from './product.dto';
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

export const updateProduct = (id: Product['id'], changes: UpdateProductDTO): Product => {
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) {
    throw new Error('Product not found');
  }
  products[productIndex] = {
    ...products[productIndex],
    ...changes,
    updatedAt: new Date()
  }
  return products[productIndex];
}

export const findProducts = (dto: findProductDTO): Product[] => {
  //! Not implemented yet
  // dto.color = 'blue'; // Error: Cannot assign to 'color' because it is a read-only property
  // dto.tags = []; // Error: Cannot assign to 'tags' because it is a read-only property
  // dto.tags?.pop(); // Error: Cannot assign to '0' because it is a read-only property
  // dto.tags?.push(); // Error: Cannot assign to 'length' because it is a read-only property
  return products;
}