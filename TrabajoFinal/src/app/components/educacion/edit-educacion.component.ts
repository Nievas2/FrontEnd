import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { Seducacion } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion : Educacion = null;

  constructor( private seducacion: Seducacion, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.seducacion.details(id).subscribe(
      data=>{
        this.educacion = data;
      }, err=>{
        alert("Error al modificar");
      }
    )
  }
  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id'];
    this.seducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar")
      }
    )
  }

}
