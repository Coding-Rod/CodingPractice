function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6,2,sum));


function date(callback){ //callback = printDate
    // Time now
    console.log(new Date); // Actual time (1)
    
    // After 3s 
    setTimeout(function(){ //Process in 3s 
        let date = new Date(); // date = Actual time "3 seconds passed" (3)
        callback(date); // printDate(date);
    }, 3000) // Configure time in ms

    // After Time now
    console.log("Middle process"); // Actual time (3)
}

function printDate(x){
    console.log(x);
}

date(printDate);