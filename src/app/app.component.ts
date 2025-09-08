import { Component, computed, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {
  writableSignalValue: WritableSignal<number> = signal(100);
  computedSignalValue = computed(() => 200);

  updateWritableSignal() {
    this.writableSignalValue.set(this.writableSignalValue() + 1);
  }

  updateComputedSignal() {
    this.computedSignalValue;
    //this.computedSignalValue.set(this.computedSignalValue()+1); - Computed signals are constant so not having set method
  }
}
