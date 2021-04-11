import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user';

=======
>>>>>>> 3bee4fc81c7706bda749d0d33ada886f7fdbea5c

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
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
=======
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 3bee4fc81c7706bda749d0d33ada886f7fdbea5c
}
