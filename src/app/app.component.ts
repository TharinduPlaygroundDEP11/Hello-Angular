import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1>{{ title }}</h1>
    <p>It's My First Angular App</p>
    @if (flag) {
      <h2>Hello React</h2>
    } @else {
      <h2>Hello Angular</h2>
    }
    <button (click)="buttonClick()">{{ buttonName }}</button>

    <app-change-detection></app-change-detection>

    <app-control-flow />

    <app-loop />
  `
})
export class AppComponent {
  title = 'Hello Angular!';
  flag = false;
  buttonName = 'SHOW React';

  buttonClick() {
    if (this.flag) {
      this.buttonName = 'SHOW React';
    } else {
      this.buttonName = 'SHOW Angular';
    }
    this.flag = !this.flag;
  }

  myMethod1() {
    alert("OKAY");
  }
}
