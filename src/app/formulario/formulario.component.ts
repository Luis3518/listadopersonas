import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
@Output() personaCreada =  new EventEmitter<Persona>(); //el output personacreada es igual al evento con el paramentro persona
 
  nombreInput:string = ''; //nombreinput es de tipo string, que entiendo que no es lo mismo que nombre
  apellidoInput:string = '';

  agregarPersona(){ //agregar persona viene del html cuando presionas un boton
    let persona1 = new Persona(this.nombreInput, this.apellidoInput); //lo que hace es crear persona1 y agregarle la persona (que a su vez tiene los parametros de nombre y apellido)
    this.personaCreada.emit(persona1); //a personacreada.emit le guarda el persona1
  }


}
