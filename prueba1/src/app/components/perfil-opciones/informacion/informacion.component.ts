import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { Router } from '@angular/router';
import { InformacionService } from './informacion.service';
import firebase from 'firebase';



@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']

})
export class InformacionComponent implements OnInit {
  user: Usuario = {
    id:'',
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

  }

}
