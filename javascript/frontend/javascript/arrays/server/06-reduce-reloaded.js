const faker = require('faker');

const array = [1, 3, 2, 3];

// # Example 1
// Count each number in the array
const count = array.reduce((accumulator, currentValue) => {
    
    // If the current value is not in the accumulator, add it
    typeof accumulator[currentValue] === 'undefined'
        ? accumulator[currentValue] = 1
        : accumulator[currentValue]++;
    
    return accumulator;
}
, {}); // In this case, the initial value is an empty object

console.log(count);

// # Example 2

const dataGenerator = (n) => {
    const data = [];
    for (let i = 0; i < n; i++) {
        data.push({
            name: faker.name.findName(),
            level: ["low", "medium", "high"][faker.datatype.number({ min: 0, max: 2 })],
        });
    }
    return data;
}

const data = dataGenerator(100);

const newData = data
.map (item => item.level)
.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] 
        ? accumulator[currentValue] + 1 
        : 1;
    return accumulator;
}, {});

console.log(newData);

// # Example 3
const numbersGenerator = (n) => {
    const numbers = [];
    for (let i = 0; i < n; i++) numbers.push(faker.datatype.number({ min: 1, max: 10 }));
    return numbers;
}

const numbers = numbersGenerator(10);

console.log(numbers.sort((a, b) => a - b));

const count_numbers = {
    '1-5': numbers.filter(number => number >= 1 && number <= 5).length,
    '6-8': numbers.filter(number => number >= 6 && number <= 8).length,
    '9-10': numbers.filter(number => number >= 9 && number <= 10).length
}

console.log(count_numbers);