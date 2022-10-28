import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product):void => {
  // data.id = "1"; // Error: Readonly property 'id' cannot be assigned to
  data.createdAt = new Date(1999, 1, 1);
  products.push(data);
}