// # Example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// With for
let response = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    response = true;
    break;
  }
}
console.log(response);

// With some
const response2 = numbers.some((number) => number === 7);
console.log(response2);

// # Example 2
// Verify if array contains an item type number
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const response3 = numbers2.some((number) => typeof number === 'number');