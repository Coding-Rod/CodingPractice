function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2,2, sum));


setTimeout(function(){
    console.log('Hola JavaScript')
},2000)


function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Ivan');