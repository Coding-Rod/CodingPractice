"use strict";
(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({
        email: 'nico@nico.co',
        password: 12121212
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
})();
