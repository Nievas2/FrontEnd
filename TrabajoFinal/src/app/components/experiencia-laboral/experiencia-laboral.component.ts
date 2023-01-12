import { Component } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
exper: Experiencia[]= [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void{
    this.cargarExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }
  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(
      data=>{this.exper = data;})
  }
  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err=>{
          alert("no se pudo eliminar");
        }
      )
    }
  }

}

