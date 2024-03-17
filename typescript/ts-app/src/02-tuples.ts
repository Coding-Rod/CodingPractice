const prices: (number | string)[] = [1,2,3,3,2,1, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
user = ['nicobytes', 15, true];
// user = [15, 'nicobytes']; // Error
// user = []; // Error

const [username, age, isDeveloper] = user;
console.table({username, age, isDeveloper});