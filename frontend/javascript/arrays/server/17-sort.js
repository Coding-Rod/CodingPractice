// Sort an array of months
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]

// Sort an array of numbers
const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [ 1, 100000, 21, 30, 4 ]
numbers.sort((a, b) => a - b);
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]
numbers.sort((a, b) => b - a);
console.log(numbers); // [ 100000, 30, 21, 4, 1 ]

const words = ['résumé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'sauvage', 'âme', 'œuvre'];
words.sort();
console.log(words); // [ 'âme', 'adieu', 'café', 'communiqué', 'éclair', 'œuvre', 'premier', 'résumé', 'sauvage' ]
words.sort((a, b) => a.localeCompare(b)); // [ 'âme', 'adieu', 'café', 'communiqué', 'éclair', 'œuvre', 'premier', 'résumé', 'sauvage' ]
console.log(words);

const orders = [
    { id: 1, name: 'Order 1', price: 100, delivered: true },
    { id: 2, name: 'Order 2', price: 200, delivered: false },
    { id: 3, name: 'Order 3', price: 300, delivered: true },
    { id: 4, name: 'Order 4', price: 400, delivered: false },
    { id: 5, name: 'Order 5', price: 500, delivered: true },
];

// Sort by price DESC
orders.sort((a, b) => b.price - a.price)
const delivered = orders.filter((order) => order.delivered);
console.log(delivered);
