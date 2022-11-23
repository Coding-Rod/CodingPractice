// Libraries
import axios from 'axios';

// Models and services
import { Category } from "../models/category.model";
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(
    private URL: string
  ) {}

  async getAll() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }
}

(async () => {
  const service = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');

  const response = await service.getAll();
  console.log(response);


  const service1 = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/products');

  const response1 = await service.getAll();
  console.log(response);


})();

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();