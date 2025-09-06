import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {
  name = signal("Vrutti");
}
