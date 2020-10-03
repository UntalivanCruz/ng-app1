import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rest:number=0;
  opA:number=0;
  opB:number=0;

  onCalcular(){
    this.rest=this.opA+this.opB;
    console.log(this.rest,this.opA,this.opB)
  }

  constructor(){}
}
