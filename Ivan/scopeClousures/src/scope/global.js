
// Esta esta asignada de forma global
var hello = 'Hello';
var hello = 'Hello+'
// Con let y const no podemos cambiar los valores ya una vez asignado
let world = 'Hello World';


const anotherFunction1 = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
    
}

anotherFunction1();

const helloWorld = () => {
    globalVar = 'imGlobal';
}

helloWorld();
console.log(helloWorld);

