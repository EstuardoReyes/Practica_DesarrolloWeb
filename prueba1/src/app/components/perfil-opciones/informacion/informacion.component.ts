import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  user: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pass: ''
  }

  constructor(private  usuariosSvc: PerfilService, private router: Router) { }

  ngOnInit(): void {
  }

}
