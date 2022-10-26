import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product):void => {
  products.push(data);
}