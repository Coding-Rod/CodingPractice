function newFuntion(name,age,country){
    var name= name || 'Ivan'
    var age = age || 32;
    var country = country || 'Bo'
    console.log(name,age,country);
}

//es6

function newFuntion2(name='ivan', age=23, country='bo'){
    console.log(name,age,country);
}

newFuntion2();
newFuntion2('ricardo',22,'co');

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + " "+world;

console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lore = 'lorem ipsum dolor sit amet, consectet \n'
+ "Otra frase epica que necesitabamos";

//es6
let lorem2 = `otra frase epica que necesitabamos
ahora es otra frase epica
`;

console.log(lore);
console.log(lorem2);

let person = {
    'name': 'ivan', 'age': 23, 'country': 'bo'
}
console.log(person.name, person.age, person.country);

let{ name,age,country}=person;

console.log(name,age);

let team1= ['Ivan','Josue','Rodri'];
let team2= ['Vale','Marmol','Masssiel'];

let education= ['David', ...team1, ...team2];

console.log(education);


var hola ='hola';
{
    var globalVar = 'Global var';
}

{
    let globalet = 'Global Let';
    console.log(globalet)
}

console.log(globalVar);

const a = 'b';
a='c';
console.log(a);

let name = 'Ivan';
let age = 23;

//es5
obj = { name: name,age: age};

//es6
obj2={name, age};

console.log(obj2);

// const names = [
//     {name:'Ivan',age: 23}
//     {name:'Jose',age: 24}
// ]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item=> console.log(item.name));

// const listOfNames3 = (name, age, country) => {
//     ...
// }

// const listOfNames4 = name => {
//     ...
// }

const square = num => num * num;
