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
    if (this.tasks.includes(task)) {
      alert("This task already exists.");
    }
    else {
      this.tasks.push(task);
      this.task = '';
    }
  }
  deleteTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
  viewTask(task: string) {
    this.task = task;
  }
}
