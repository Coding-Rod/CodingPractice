export class MyDate{

  constructor(
      // Constructor parameters are automatically assigned to class properties.
      private _year: number = 2022,
      private _month: number = 11,
      private _day: number = 22 // If the access modifier is not specified, the parameter will be only available within the constructor.
    ){
    this._year = _year;
    this._month = _month;
    this._day = _day;
  }

  printFormat(): string {
    return `${this.addPadding(this._day)}/${this._month}/${this._year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year'): void {
    if(type === 'day'){
      this._day += amount;
    } else if(type === 'month'){
      this._month += amount;
    } else {
      this._year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    return this._year % 400 === 0 || (this._year % 4 === 0 && this._year % 100 !== 0);
  }
}

const myDate = new MyDate(2022, 11, 2);
console.log(myDate.printFormat());
myDate.day;
myDate.isLeapYear;
// myDate.day = 3; // Error: Cannot assign to 'day' because it is a read-only property.
