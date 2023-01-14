// Libraries
import axios from 'axios';

// Imports
import { Product } from './models/product.model';

// Variables
let anyVar: any = 12;
let booleanVar: boolean = anyVar;

// Code
(async () => {

  // Get products
  // const getProducts = async (): Promise<Product[]> => { // First option
  const getProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products'); // First option
    // data = data as Product[]; // Second option (not recommended)
    return data;
  }

  const products = await getProducts();
  console.log(products.map((product: Product) => `${product.id} - ${product.title}`));
})();