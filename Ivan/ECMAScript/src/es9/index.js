const obj = {
    name: 'ivan', age: 23, country: 'bo'
};

let{ name,...all}= obj;
console.log(name,all);