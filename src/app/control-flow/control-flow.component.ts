import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  template: `
    <hr>
    <button (click)="handleShow()">{{ buttonText }}</button>
    @if (show) {
      <h1>Hello!</h1>
    }

    <hr>
    <input id="chk" type="checkbox" [checked]="checked" (input)="handleCheck()">
    @if (checked) {
      <label for="chk">Checked</label>
    } @else {
      <label for="chk">Unchecked</label>
    }
    <hr>
    <div> Select an Option</div>
    <label><input type="radio" name="rdo" value="option-1" (input)="handleRadio($event)">Option 1</label>
    <label><input type="radio" name="rdo" value="option-2" (input)="handleRadio($event)">Option 2</label>
    <label><input type="radio" name="rdo" value="option-3" (input)="handleRadio($event)">Option 3</label>

    @if (value === 'option-1') {
      <h1>Option 1 Selected</h1>
    } @else if (value === 'option-2') {
      <h2>Option 2 Selected</h2>
    } @else if (value === 'option-3') {
      <h3>Option 3 Selected</h3>
    } @else {
      <h4>No Option Selected</h4>
    }

    @switch (value) {
      @case ('option-1') {
        <h1>Option 1 Selected</h1>
      }
      @case ('option-2') {
        <h2>Option 2 Selected</h2>
      }
      @case ('option-3') {
        <h3>Option 3 Selected</h3>
      }
      @default {
        <h4>No Option Selected</h4>
      }
    }

  `,
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  show = false;
  buttonText = 'SHOW';
  checked = true;
  value = '';
  handleShow() {
    this.show = !this.show;
    if (this.show) {
      this.buttonText = "HIDE";
    } else {
      this.buttonText = 'SHOW';
    }
  }

  handleCheck() {
    this.checked = ! this.checked
  }

  handleRadio(eventData:Event) {
    if (eventData.target) {
      // this.value = (eventData.target as HTMLInputElement).value;
      // this.value = (<HTMLInputElement> eventData.target).value ?? "";
      this.value = (<HTMLInputElement> eventData.target).value;
    }
  }
}
