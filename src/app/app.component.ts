import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {

  task: string = '';
  tasks: string[] = [];

  saveTask(task: string) {
    this.tasks.push(task);
    console.log(this.tasks);
    this.task = '';
  }
  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
