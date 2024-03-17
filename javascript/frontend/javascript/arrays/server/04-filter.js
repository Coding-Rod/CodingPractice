const faker = require('faker');

// # Example 1
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// With for
const newArray = [];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 6) {
        newArray.push(word);
    }
}
console.log('newArray: ', newArray);
console.log('words: ', words);

// With filter
const filteredWords = words.filter((word) => word.length > 6);

console.log('filteredWords: ', filteredWords);
console.log('words: ', words);

// # Example 2
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
}

const orders = ordersGenerator(10);

const filteredOrders = orders.filter((order) => order.delivered && order.total > 100);
console.log('filteredOrders: ', filteredOrders);
console.log('orders: ', orders);

const search = (query) => 
    orders.filter((order) => 
        order.customerName.toLowerCase().includes(query.toLowerCase()));

console.log('search: ', search('y'));