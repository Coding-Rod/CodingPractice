const faker = require('faker');

const ordersGenerator = (count) => {
    const orders = [];
    for (let i = 0; i < count; i++) {
        orders.push({
            customerName: faker.name.findName(),
            total: faker.commerce.price(),
            delivered: faker.datatype.boolean(),
        });
    }
    return orders;
};

const orders = ordersGenerator(10);

const mappedOrders = orders.map((order) => order.total);
console.log('mappedOrders: ', mappedOrders);

// const mappedOrders2 = orders.map((order) => { // DON'T DO THIS, THIS WILL MODIFY THE ORIGINAL ARRAY
//     order.tax = order.total * 0.2;
//     return order;
// });

// console.log('mappedOrders2: ', mappedOrders2);
// console.log('orders: ', orders);

const mappedOrders3 = orders.map((order) => { // DO THIS INSTEAD
    return {
        ...order,
        tax: Math.round(order.total * 0.2 * 100) / 100,
    };
});

console.log('mappedOrders2: ', mappedOrders3);
console.log('orders: ', orders);