// Entries

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Values

const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana"
}

const values = Object.values(data);
console.log(values);

// Padding

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ------'));
console.log('food'.padEnd(12,'  ------'));

// Promises

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello, world'),3000)
            : reject(new Error('Test error'));
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log('Hello');
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();