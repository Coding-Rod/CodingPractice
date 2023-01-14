import { addProduct, calcStock, products } from "./product.service";

addProduct({
  name: "T-Shirt",
  createdAt: new Date(),
  stock: 10,
});

addProduct({
  name: "Pants",
  createdAt: new Date(2022, 1, 1),
  stock: 5,
  size: "M",
});

console.log(products);
const total = calcStock();
console.log("Total stock:", total);