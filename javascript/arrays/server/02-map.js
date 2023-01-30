// Map is a function that takes an array and a function and creates a new array from the results of calling the function on each element of the input array.
// Map is inmutable, it does not modify the original array.

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const mappedLetters = letters.map((letter) => letter.toUpperCase());

console.log('letters: ', letters);
console.log('mappedLetters: ', mappedLetters);
