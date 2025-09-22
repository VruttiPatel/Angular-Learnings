import { NgFor } from '@angular/common';
import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {

  students: string[] = ['Vrutti', 'Jahanvi', 'Shreya'];

}
