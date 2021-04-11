import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-olvidar-pass',
  templateUrl: './olvidar-pass.component.html',
  styleUrls: ['./olvidar-pass.component.css'],
  providers:[LoginService]

  
})
export class OlvidarPassComponent implements OnInit {
  

  user: Usuario = {
    nombre:'',
    apellido:'',
    correo:'',
    pass:''
  }

  constructor(private authSvc:LoginService,private router:Router) { }

  ngOnInit(): void {
  }


  async Recuperar(){
    try{
    const email = this.user.correo;
    await this.authSvc.resetPass(email);
    window.alert("Email Enviado, revisa tu correo")
    this.router.navigate(['/login']);
    }
    catch(error){
      console.log(error);
    }
  }
}
