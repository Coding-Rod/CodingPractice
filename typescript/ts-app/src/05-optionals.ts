export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
}

const p1 = createProduct(1, true);
const p2 = createProduct(1, true, 15);
const p3 = createProduct(1, false, 0);

console.log("Product 1", p1);
console.log("Product 2", p2);
console.log("Product 3", p3);