import { Dog } from './09-protected'

// const getValue = (value: number): number => value;
// const getValue = (value: unknown) => value;

const getValue = <T>(value: T): T => value;

getValue<number>(12).toFixed();
getValue<string>('13').toLowerCase();
getValue<number[]>([1, 2, 3]).push(4);

const sparkie = new Dog('Sparkie', 'Rodri');
getValue<Dog>(sparkie).bark();