import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Usuario } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { InformacionService } from './informacion.service';
import firebase from 'firebase';


=======
>>>>>>> 3bee4fc81c7706bda749d0d33ada886f7fdbea5c

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']

})
export class InformacionComponent implements OnInit {
<<<<<<< HEAD
  user: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pass: ''
  }

  constructor(private  usuariosSvc: InformacionService, private router: Router) { 
   
  }

  ngOnInit(){
    const email = firebase.auth().currentUser?.email;
    console.log(email);
   // this.servicioComunicacion.enviarCorreoObservable.subscribe(Response => {
     // this.correo = Response;
    //})

=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> 3bee4fc81c7706bda749d0d33ada886f7fdbea5c
  }

}
