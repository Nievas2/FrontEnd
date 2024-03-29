import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/modelo/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia-laboral.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab : Experiencia = null;

  constructor( private sExperiencia: SExperienciaService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.details(id).subscribe(
      data=>{
        this.expLab = data;
      }, err=>{
        alert("Error al modificar");
      }
    )
  }
  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar")
      }
    )
  }

}
