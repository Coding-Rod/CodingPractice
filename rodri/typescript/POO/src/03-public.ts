export class MyDate{
  year: number;
  readonly month: number;
  private day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year'): void {
    if(type === 'day'){
      this.day += amount;
    } else if(type === 'month'){
      this.month += amount;
    } else {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2022, 11, 22);
console.log(myDate.printFormat());
// myDate.day = 12; // Error: Cannot assign to 'day' because it is a read-only property.
// myDate.month = 12; // Error: Cannot assign to 'month' because it is a read-only property.
// console.log(myDate.printFormat());