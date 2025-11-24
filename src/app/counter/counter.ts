import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {

  counter = signal(0);

  constructor(){
    this.counter.set(5)
  }

  increament(){
    this.counter.update(value => value +1);
  }

}
