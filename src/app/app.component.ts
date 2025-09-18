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

  textAlign = "center";
  visible = true;
  displayProperty = '';
  none = 'none';
  msgToDisplay = '';

  constructor() {
    if (this.visible) {
      this.msgToDisplay = "Visible property is true";
    }
    else {
      this.msgToDisplay = "Visible property is false";
    }

  }
}
