import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { Seducacion } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent{
estud: Educacion[]= [];

  constructor(private seducacion: Seducacion, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void{
    this.cargarEducacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }
  cargarEducacion(): void{
    this.seducacion.lista().subscribe(
      data=>{this.estud = data;})
  }
  delete(id?:number){
    if(id != undefined){
      this.seducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err=>{
          alert("no se pudo eliminar");
        }
      )
    }
  }

}

