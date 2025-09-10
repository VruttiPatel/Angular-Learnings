import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {

  writableValue: WritableSignal<number> = signal(100);

  constructor() {
    effect(() =>
      console.log(this.writableValue()));
  }

  callEffect() {
    this.writableValue.set(this.writableValue() + 1);
  }
}
