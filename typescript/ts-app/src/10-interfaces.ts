type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;
// type Product = {
//   id: string | number;
//   name: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

// The interface is capable of being extended
interface Product {
  id: string | number;
  name: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  name: 'T-Shirt',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});