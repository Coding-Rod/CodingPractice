// Libraries
import axios from 'axios';

// Models and services
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/product.dto';

export class ProductHttpService implements ProductService {

  private URL = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDTO): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.URL}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDTO): Promise<Product> {
    const { data } = await axios.post<Product>(this.URL, dto);
    return data;
  }
  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.URL}/${id}`);
    return data;
  }
}