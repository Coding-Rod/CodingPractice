import { Product } from './product.model';

// type CreateProductDTO = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;

export interface CreateProductDTO extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}

type example2 = Required<Product>;

export interface findProductDTO extends Readonly<Partial<Omit<Product,'tags'>>> {
  readonly tags?: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;