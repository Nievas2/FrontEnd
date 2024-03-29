import { Component } from '@angular/core';
import { persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService){

  }
  ngOnInit():void{
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }
}
