import { Category } from './../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: string | number;
  name: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
}
