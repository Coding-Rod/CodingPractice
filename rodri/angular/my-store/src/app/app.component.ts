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
}
