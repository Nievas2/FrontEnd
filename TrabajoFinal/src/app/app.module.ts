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
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';

import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/hard-skills/edit-skill.component';
import { NewSkillComponent } from './components/hard-skills/new-skill.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    LogoArgProComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HardSkillsComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    NewEducacionComponent,
    EditSkillComponent,
    NewSkillComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
