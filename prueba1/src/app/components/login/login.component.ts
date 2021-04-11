import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Usuario = {
    nombre:'',
    apellido:'',
    correo:'',
    pass : ''
  };

  constructor(private router: Router) {
    
   }
  public isLogged = false;
  ngOnInit(): void {
  }

  async Onlogin(){
    const usuario = this.user
    try {
      this.isLogged = true;
      console.log('entro: ',usuario)
      this.router.navigate(['/home']);
    
    } catch (error) {

    
    }
  }
}
