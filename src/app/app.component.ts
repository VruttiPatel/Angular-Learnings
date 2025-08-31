import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  eventLog: String = "";
  handleEvent(event: any) {
    this.eventLog = event.type;
  }

  inputEvent(event: any) {
    this.eventLog = (event.target as HTMLInputElement).value;
  }
}
