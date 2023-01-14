export abstract class Animal{
    constructor(protected name: string) {}

    move(): void {
        console.log('Moving...');
    }

    gretting(){
        return `Hi, I'm ${this.name}`;
    }

    protected doSomething(){
      console.log('Do something...');
    }
}

export class Dog extends Animal{

    constructor(name: string, public ownmer: string) {
        super(name);
    }

    bark(times: number = 2): void {
        for (let i = 0; i < times; i++) {
            console.log('Woof! '+ this.name);
        }
        this.doSomething();
    }

    move(): void {
        console.log('Running...');
        super.move();
    }
}

// const fifi = new Animal('Fifi'); // Error: Cannot create an instance of an abstract class.
// fifi.move();
// console.log(fifi.gretting());

const sparkie = new Dog('Sparkie', 'Rodrigo');
sparkie.move();
console.log(sparkie.gretting());
sparkie.bark(3);
// sparkie.name = 'Sparkie 2'; // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
// sparkie.doSomething(); // Error: Method 'doSomething' is protected and only accessible within class 'Animal' and its subclasses.
