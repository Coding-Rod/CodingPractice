export class MyDate{
  year: number;
  month: number;
  day: number;

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
myDate.add(1, 'day');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
