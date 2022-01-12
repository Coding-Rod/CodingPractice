const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ " cm");

const perimentroCuadrado = ladoCuadrado *4;

console.log("El perímetro del cuadrado mide: "+ perimentroCuadrado+ " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado mide: "+ areaCuadrado+ " cm²");

const ladoTriandulo1 = 6;
const ladoTriandulo2 = 6;
const baseTriandulo = 4;

console.log(
    "Los lados del triangulo miden: \n"+
    ladoTriandulo1+
    " cm, "+
    ladoTriandulo2+
    " cm, "+
    baseTriandulo+
    " cm, "
);

const alturaTriandulo = 5.5;
console.log("La altura del triangulo es: "+ alturaTriandulo+ " cm");

console.groupEnd();

const list = [1,1,
              2,2,2,2,2,2,2,2,
              3,3,3,3,3,3,
              4,4,4,
              5,5,5,5,5,5];

const listCount = {};

list.map((element) => {listCount[element] ? listCount[element] +=1 :listCount[element] = 1;});

console.log(listCount);

let max = Math.max(...Object.values(listCount));
console.log(Object.values(listCount));
console.log("Moda: "+ Object.keys(listCount).find(key => listCount[key] === max));