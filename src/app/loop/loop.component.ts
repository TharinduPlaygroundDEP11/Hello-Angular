import {Component} from '@angular/core';

@Component({
  selector: 'app-loop',
  template: `
    <hr>
    <label for="num">Enter a number to repeat value</label>
    <input type="number" id="num" min="0" value="0" (input)="handleInput($event)">

    @for (num of numbers; track num) {
      <p>loop works!</p>
    }

  `,
  styleUrl: './loop.component.scss'
})
export class LoopComponent {
    numbers= [];

  handleInput(eventData:Event) {
    const value = +(<HTMLInputElement> eventData.target).value;
    this.numbers = new Array(value) as [];
  }
}
