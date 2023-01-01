import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosComponent } from './components/logos/logos.component';
import { LogoArgProComponent } from './components/logo-arg-pro/logo-arg-pro.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillComponent } from './components/soft-skill/soft-skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    LogoArgProComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    HardSkillsComponent,
    SoftSkillComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
