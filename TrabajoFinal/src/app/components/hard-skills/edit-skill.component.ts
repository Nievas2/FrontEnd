import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/modelo/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill : Skill = null;

  constructor( private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router ){}
  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.skillService.details(id).subscribe(
      data=>{
        this.skill = data;
      }, err=>{
        alert("Error al modificar");
      }
    )
  }
  onUpdate(): void{
    const id= this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar")
      }
    )
  }
}
