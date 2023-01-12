import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelo/educacion';
import { Seducacion } from 'src/app/service/educacion.service';


@Component({
  selector: 'app-new-estudios',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreE: string = '';
  descripcionE:string = '';
  constructor(private seducacion: Seducacion, private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate(): void{
    const est = new Educacion(this.nombreE, this.descripcionE);
    this.seducacion.save(est).subscribe(data =>{alert("Estudios añadidos");
    this.router.navigate(['']);

  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
  }
  )
  }
}
