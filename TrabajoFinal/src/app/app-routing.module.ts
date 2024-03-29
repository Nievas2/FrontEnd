import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';

import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditSkillComponent } from './components/hard-skills/edit-skill.component';
import{NewSkillComponent } from'./components/hard-skills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'editedu/:id', component:EditEducacionComponent},
  {path: 'nuevaedu', component:NewEducacionComponent},
  {path: 'editskill/:id', component:EditSkillComponent},
  {path: 'newskill', component: NewSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
