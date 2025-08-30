import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  val:number = 0;
 increment(){
  this.val++;
 }
 reset(){
  this.val=0;
 }
 decrement(){
  if(this.val<=0){
    this.val=0;
  }
  else{
  this.val--;
  }
 }
}
