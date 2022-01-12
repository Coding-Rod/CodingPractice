let list = ['a','b','c','d','e','f','g','h','i','j'];
let obj = {
    name: "Rodrigo",
    country: "BO",
    telf: "69761943",
    birthdate: "2000-02-09"
};

console.log("----------------------------------------------------------------");

for (const key in list) {
    console.log(key);
}

for (const iterator of list) {
    console.log(iterator);
}

list.forEach(element => {
    console.log(element);    
});

console.log("----------------------------------------------------------------");

for (const key in obj) {
    value = obj[key];
    console.log(`${key}: ${value}`);
}

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

Object.entries(obj).forEach((key, value) => {
    console.log(`${key}: ${value}`);
});