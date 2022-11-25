const username: string = 'Rod5919';
const sum = (a: number, b: number) => a + b;

sum(1, 2);


class Person {

  constructor(public lastName: string, public age: number) {
    this.lastName = lastName;
    this.age = age;
  }
}

const rodri = new Person('Rodrigo', 22);
// rodri.age; // Error: Property 'age' is private and only accessible within class 'Person'.