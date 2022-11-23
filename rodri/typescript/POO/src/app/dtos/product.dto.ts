import { Product } from './../models/product.model';
import { Category } from '../models/category.model';

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}