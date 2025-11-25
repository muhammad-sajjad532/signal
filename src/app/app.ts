import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./counter/counter";
import { LinkedSignal } from "./linked-signal/linked-signal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, LinkedSignal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signal');
}
