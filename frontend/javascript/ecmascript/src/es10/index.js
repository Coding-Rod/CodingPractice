let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));

let hello = '                      hello world                    ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

// Entries
let entries = [["name","oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

// string description
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);