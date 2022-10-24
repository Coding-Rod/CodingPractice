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

    let numbers = [1, 2, 3, 4, 5];
    // let numbers = ['numbers']; // Error
    numbers.map(item => item * 2);
})();
