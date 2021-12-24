// Create a set
const set = new Set([1,2,3,3,4,4,5,5,6,6,6,6,6,7,7,7,7,7]);

console.log(set)

// Array -> Set -> Array
const numbers = [
    1,2,3,4,5,6,7,8,9,10,11,12,
    1,2,3,4,5,6,7,8,9,10,11,
    1,2,3,4,5,6,7,8,9,10,
    1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,
    1,2,3,4,5,6,7,
    1,2,3,4,5,6,
    1,2,3,4,5,
    1,2,3,4,
    1,2,3,
    1,2,
    1
];

// console.log(numbers);
console.log(Array.from(new Set(numbers)));

// dynamic parameters

const dynamic = "hobbies";
const user = {
    name: "Ed",
    email: "deved@aol.com",
    [dynamic]: "sleep"
};

console.log(user);

// convert Array to Object

const ids = [1,2,3,4,5,6,7];
const users = ["Ivan", "Rodri", "Ale", "Bairu", "Gaby", "Rodri", "Tefi"]

//index = keys
const usersObject = {...ids}; 

console.log(ids);
console.log(usersObject);

var idUsersObject = {};
// array.ForEach((val, index) => {})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
ids.forEach((key, i) => idUsersObject[key] = users[i]); // forEach sends value and index

console.log(Object.keys(idUsersObject));
console.log(Object.values(idUsersObject));
console.log(idUsersObject);
console.table(idUsersObject);

