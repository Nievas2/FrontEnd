import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/modelo/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit{
  skill: Skill[] = [];
  constructor(private skillService: SkillService, private tokenService: TokenService){}
  isLogged = false;
  ngOnInit(): void{
    this.cargarSkills();
    if (this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }
  cargarSkills(): void{
    this.skillService.lista().subscribe(
      data=>{this.skill = data;})
  }
  delete(id?:number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err=>{
          alert("no se pudo eliminar");
        }
      )
    }
  }


}
