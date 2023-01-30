const totals = [10, 20, 30, 40, 50];

// With for
let sum = 0;
for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
}
console.log('Sum: ', sum);

// With reduce
// reduce takes 2 arguments: a callback function and an initial value
// the callback function takes 2 arguments: an accumulator and a currentValue
const sumReduce = totals.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('SumReduce: ', sumReduce);