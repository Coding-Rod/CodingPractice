export class Animal{
    constructor(public name: string) {}

    move(): void {
        console.log('Moving...');
    }

    gretting(){
        return `Hi, I'm ${this.name}`;
    }
}

export class Dog extends Animal{

    constructor(name: string, public ownmer: string) {
        super(name);
    }

    bark(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log('Woof!');
        }
    }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.gretting());

const sparkie = new Dog('Sparkie', 'Rodrigo');
sparkie.move();
console.log(sparkie.gretting());
sparkie.bark(3);