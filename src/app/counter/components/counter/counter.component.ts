import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="modifyCounterValue(1)">Inrementar</button>
    <button (click)="resetCounter()">Resetear contador</button>
    <button (click)="modifyCounterValue(-1)">Decrementar</button>
  `
})

export class CounterComponent {
  public counter: number = 10;
  modifyCounterValue(amount: number): void{
    this.counter+=amount;
  }
  resetCounter():void{
    this.counter=10;
  }
}
