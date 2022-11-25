import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  name = 'Sergio';
  age = 22;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;

  person = {
    name: 'Sergio',
    age: 22,
    img: 'https://source.unsplash.com/random',
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrease(){
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyUp(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}