import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { InformacionService } from './informacion.service';
//import { LoginService } from '../../login/login.service';



@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  correo: string;
  user: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pass: ''
  }

  constructor( private  usuariosSvc: InformacionService, private router: Router) { 
    this.correo = ''
  }

  ngOnInit(): void {
   // this.servicioComunicacion.enviarCorreoObservable.subscribe(Response => {
     // this.correo = Response;
    //})
    console.log(this.correo);
    this.usuariosSvc.getLista();

  }

}
