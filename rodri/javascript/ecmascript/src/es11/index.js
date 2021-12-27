const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 90012389123n;

const anotherBigNumber = BigInt(9810239182301);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => reject("resolve"));
const promise3 = new Promise((resolve, reject) => reject("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}