import { Product } from './product.model';

// type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;