//=====Codigo del cuadrado=====
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
   return lado*4;
}

// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El Area del cuadrado es: "+ areaCuadrado + "cm2");

console.groupEnd();

//=====Codigo del Triangulo=====

console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log("Los lados del triangulo miden: "
// + ladoTriangulo1 
// + "cm, "
// + ladoTriangulo2 
// + "cm, "
// +baseTriangulo 
// + "cm"
// );


// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: "+alturaTriangulo);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2+base;
}

// console.log("el perimertro del triangulo es de: "+perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

// console.log("el area del triangulo es de: "+areaTriangulo);

console.groupEnd();

// =======Codigo del Circulo=======

console.group("Circulos");

// Radio
// const radioCirculo =  4;
// console.log("El radio del circulo es: "+ radioCirculo);

// Diametro

function diametroCirculo(radio){
    return radio;
}
// const diametroCirculo = radioCirculo*2;
// console.log("El diametro del circulo es: "+ diametroCirculo);

// PI
const piCirculo = Math.PI;
// console.log("El valor de PI es: "+ piCirculo);

// Circunferencia
function perimetroCirculo(radio){
    const diametro =diametroCirculo(radio);
    return diametro * piCirculo;
}
// const perimetroCirculo = diametroCirculo*piCirculo;
// console.log("El perimetro del circulo es: "+ perimetroCirculo);

// Area
function areaCirculo(radio){
    return (radio*radio)*piCirculo;
}

// const areaCirculo = (radioCirculo*radioCirculo)*piCirculo;
// console.log("El area del circulo es: "+ areaCirculo);


console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo");
    const value = input1.value;

    const perimetroTriangulo = perimetroTriangulo(value, value, value);
    alert(perimetroTriangulo);

}