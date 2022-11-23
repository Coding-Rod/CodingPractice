export class MyService {
    static instance: MyService | null = null;

    private constructor(private _name: string) {}

    get name(){
        return this._name;
    }

    static create(name: string): MyService {
        if (this.instance === null) {
            this.instance = new MyService(name);
        }
        return this.instance;
    }
}

const myService = MyService.create('MyService');
console.log(myService.name);
const myService2 = MyService.create('MyService 2');
console.log(myService2.name);

console.log(myService === myService2); // true