import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.scss',
})
export class LinkedSignal {

  quantitySignal = signal(1);
  price = 10;
 total = computed(() =>{
  return this.quantitySignal() * this.price;
 });

 calculate(){

  this.quantitySignal.set(2);
 }

}
