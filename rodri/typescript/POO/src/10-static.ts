console.log('builtin', Math.PI)
console.log('builtin', Math.max(1,2,3,4,5,6,7,8,9,10))

class MyMath {
    static readonly PI: number = 3.1416;

    static max(...numbers: number[]): number{
        console.log(numbers);
        return numbers.reduce((prev, current) => prev > current ? prev : current);
    }
}

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(1,2,3,4,5,6,7,8,9,10));
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log('MyMath.max', MyMath.max(...numbers));
const neegative_numbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10];
console.log('MyMath.max', MyMath.max(...neegative_numbers));