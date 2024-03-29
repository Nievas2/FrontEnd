import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { LoginUsuario } from 'src/app/modelo/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  faHouse = faHouse;
  faEnvelope = faEnvelope;
  faLock = faLock;
  isLogged = false;
  isLoggedInFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {}
  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoggedInFail = false;
      this.roles= this.tokenService.getAuthorities();



    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService.login(this.loginUsuario).subscribe(data=>{
        this.isLogged=true;
        this.isLoggedInFail= false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      }, err => {
        this.isLogged= false;
        this.isLoggedInFail= true;
        this.errMsj= err.error.mensaje;
        console.log(this.errMsj);
      }
    )
  }



}
