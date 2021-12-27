function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
  
  // es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};
  
newFunction2();
newFunction2('Ricardo', '23', 'CO');
  
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequetur aksndoiansjlan dvai jakjniud kjasb duawñbd aha du ak \n"
+ "otra frase epica que necesitamos";

let lorem2 = `Qui consequetur aksndoiansjlan dvai jakjniud kjasb duawñbd aha du ak
+ "otra frase epica que necesitamos`;

console.log(lorem)
console.log(lorem2)

let person = {
    'name': "Oscar",
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(team1);
console.log(team2);
console.log(education);

// Global variable
{
    var global = "global Var";
}
console.log(global);

// local variable
{
    let globalLet = "global let";
    console.log(globalLet);
}


const a = 'b';
// a = 'a';
console.log(a);

// New assignment for objects
let name = "Oscar";
let age = 32;

obj = { name: name, age: age };

obj2 = {name, age};

console.log(obj);
console.log(obj2);

// Map
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
];

let listOfNames = names.map(function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

// Arrow functions

let listOfNames3 = (name, age) => {
    console.log(name,age);
}

let listOfNames3 = name => {
    console.log(name);
}

let square = num => num*num;
// console.log(square(4));

// Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        }else{
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// FIXME

// import hello from './modules/module.js';

// hello();

// Generators

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);