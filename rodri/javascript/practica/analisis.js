//Utils
function esPar(num){
    return num%2 === 0;
}

// Functions
const salariosCol = colombia.map( (person) => {
    return person.salary;
    }
);


const salariosColSorted = salariosCol.sort((SalaryA, SalaryB) =>{
    return SalaryA - SalaryB;
    }
);


function medianaSalarios(list){
    const mitad = parseInt(list.length/2);

    if (esPar(list.length)) {
        const personaMitad1 = list[mitad-1];
        const personaMitad2 = list[mitad+1];

        return (personaMitad1+personaMitad2)/2;
    } else {
        return list[mitad];
    }
}

console.log(medianaSalarios(salariosColSorted));

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Median Top 10
const medianaTop10Col = salariosColSorted.splice(salariosColSorted.length-10,salariosColSorted.length-1);
let sum = 0;
medianaTop10Col.map((element) => {
    (element>salariosColSorted[salariosColSorted.length-10])?
        sum+=element:
        sum+=0;
});


console.log({
    medianaGeneralCol,
    medianaTop10Col,
    sum
})