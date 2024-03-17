const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const response = numbers.every((number) => number < 11);
console.log(response);

const response2 = numbers.every((number) => number < 10);
console.log(response2);