var hello = "hello";
console.log(hello);

// Mala practica
// const helloworld = () => {
//     var globalVar = "I am global";
// }

// console.log(globalVar);

const fruits = () => {
    if (true){
        var fruit1 = "apple";
        let fruit2 = "orange";
        const fruit3 = "banana";
    }
    console.log(fruit1);
    // console.log(fruit2); block scope
    // console.log(fruit3); block scope
}

fruits();