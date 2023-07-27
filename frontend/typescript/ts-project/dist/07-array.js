"use strict";
(() => {
    let prices = [100, 200, 300, 'hola', true];
    prices.push(400);
    let products = ['Samsung Galaxy S10', 'iPhone X', 'Huawei P30', true];
    products.push(false);
    let mixed = ['Samsung Galaxy S10', 100, true];
    mixed.push('iPhone X');
    mixed.push(200);
    mixed.push(false);
    mixed.push({});
    mixed.push([]);
})();
