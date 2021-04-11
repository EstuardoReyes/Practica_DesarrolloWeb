import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { LoginService } from './login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  user: Usuario = {
    nombre:'',
    apellido:'',
    correo:'',
    pass : ''
  }

  constructor(private loginSvc: LoginService) { }
  public isLogged = false;
  ngOnInit(): void {
  }

  async Onlogin(){
    const usuario = this.user
    this.loginSvc.login(usuario.correo,usuario.pass)
    const user = await this.loginSvc.getUser();
    if (user) {
      this.isLogged = true;
      console.log('entro: ',usuario)
    }
  }
}
