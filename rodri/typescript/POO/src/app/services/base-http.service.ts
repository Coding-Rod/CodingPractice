// Libraries
import axios from 'axios';
import { UpdateProductDTO } from '../dtos/product.dto';

// Models and services
import { Category } from "../models/category.model";
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(
    protected URL: string
  ) {}

  async getAll() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO ) {
    const { data } = await axios.put<Product>(`${this.URL}/${id}`, changes);
    return data;
  }
}

(async () => {
  const service = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');

  const response = await service.getAll();
  console.log(response);
  service.update<Product['id'], UpdateProductDTO>(1, {
    // name: 'Product 1 updated', // name is not part of product model
    title: 'Product 1 updated',
    description: 'Description updated',
  });

  const service1 = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/products');

  const response1 = await service.getAll();
  console.log(response);


})();

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.getAll();