import {Animal, Dog} from './09-protected';

// const animal = new Animal('elite'); // Error: Cannot create an instance of an abstract class.
// animal.gretting();

const sparkie = new Dog('sparkie', 'Rodri');
sparkie.gretting();
sparkie.bark(5);