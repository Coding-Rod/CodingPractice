const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array3 = array1.concat(array2);
console.log(array3);

const array4 = [...array1, ...array2];
console.log(array4);

