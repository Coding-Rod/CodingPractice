"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addProduct = exports.products = void 0;
exports.products = [];
const addProduct = (data) => {
    exports.products.push(data);
};
exports.addProduct = addProduct;
const calcStock = () => {
    return exports.products.reduce((total, product) => total + product.stock, 0);
};
exports.calcStock = calcStock;
