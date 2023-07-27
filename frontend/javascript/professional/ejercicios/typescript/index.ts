// console.log("Hello, world!");

// function add(a:number, b:number) {
//     return a + b;
// }

// const sum = add(1, 2);

// boolean
// let muted: boolean = true;
// muted = false;

// // number
// let age = 6;
// let numerator: number = 42;
// let denominator: number = age;
// let result = numerator / denominator;

// // string
// let nombre: string = "Rodrigo";
// let greeting = `My name is ${nombre}`;

// // arrays
// let people: string[] = [];
// people = ["Isabel", "Nicole", "Raul"];
// // people.push(9600);

// let peopleAndNumbers: Array< string | number > = [];
// peopleAndNumbers.push("Rodrigo");
// peopleAndNumbers.push(9001);

// // Enum
// enum Color{
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul"
// }

// let favoriteColor: Color = Color.Rojo;
// console.log("favoriteColor is " + favoriteColor)

// // Any
// let comodin: any = "Joker";
// comodin = { type: 'Wildcard'}

// // Object
// let someObject: object = { type: 'Wildcard'};

// Functions
// function add(a:number, b:number):number {
//     return a + b;
// }

// const sum = add(4,6);

// function createAdder(a:number): (number) => number {
//     return function (b:number) {
//         return b + a;
//     };
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// // If ?: Optional field (undefined)
// // function fullName(firstName:string, lastName?:string): string {
// //     return `${firstName} ${lastName}`;
// // }

// // Or provitional value
// function fullName(firstName:string, lastName:string = "Fernandez"): string {
//     return `${firstName} ${lastName}`;
// }

// const rodrigo = fullName('Rodrigo');
// console.log(rodrigo);

// Interfaces

enum Color{
    red = "Red",
    green = "Green"
}

interface Rectangle{
    width: number;
    height: number;
    color?: Color;
}

let rect: Rectangle = {
    width: 4,
    height: 6,
    // color: Color.red
}

function area(r:Rectangle) {
    return r.width * r.height;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function (){
    return this.color? `Un rectangulo ${this.color}`: "Un rectangulo";
}

console.log(rect.toString());
