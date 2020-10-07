import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rest:number=0;
 
  onCalcular(op:number[]):void{
    this.rest=op[0]+op[1];
    console.log(this.rest,op[0],op[1])
  }

  constructor(){}
}
