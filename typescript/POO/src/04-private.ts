export class MyDate{
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.addPadding(this.day)}/${this.month}/${this.year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
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

  getDay(): number {
    return this.day;
  }
}

const myDate = new MyDate(2022, 11, 2);
console.log(myDate.printFormat());
// myDate.addPadding(1); // Error: 'addPadding' is private and only accessible within class 'MyDate'.
