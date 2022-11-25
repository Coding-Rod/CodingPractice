import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  _name = 'Rodrigo';
  _age = 22;
  img = 'https://source.unsplash.com/random';

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}
