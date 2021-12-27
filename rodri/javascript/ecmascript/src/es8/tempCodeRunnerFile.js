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