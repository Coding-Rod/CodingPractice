const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello);
}
helloWorld();

var scope = 'imGlobal';

const funcitonScope = () => {
    var scope = 'im just a local';
    const funciton = () => {
        return scope;
    }
};

functionScope(funciton);