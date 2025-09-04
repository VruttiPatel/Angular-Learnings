import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss', 'common.component.scss']
})
export class AppComponent {
  cars = ['Eeco', 'Kia', 'Audi', 'Safari', 'Lamborgini'];
  students = [{ "name": "Vrutti", "branch": "IT" },
  { "name": "Janvi", "branch": "CE" }
  ];
}
