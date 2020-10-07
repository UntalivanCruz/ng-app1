import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  @Output() onEnviar = new EventEmitter<number[]>();

  opA:number=0;
  opB:number=0;

  onSumar():void{
    this.onEnviar.emit([this.opA,this.opB]);    
  }

  constructor() { }
}
