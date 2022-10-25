"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    name: "T-Shirt",
    createdAt: new Date(),
    stock: 10,
});
(0, product_service_1.addProduct)({
    name: "Pants",
    createdAt: new Date(2022, 1, 1),
    stock: 5,
    size: "M",
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log("Total stock:", total);
