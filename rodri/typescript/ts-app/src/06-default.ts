export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
}

const p1 = createProduct(1, true);
const p2 = createProduct(1, true, 15);
const p3 = createProduct(1, false, 0);
const p4 = createProduct(1);

console.log("Product 1", p1);
console.log("Product 2", p2);
console.log("Product 3", p3);
console.log("Product 4", p4);