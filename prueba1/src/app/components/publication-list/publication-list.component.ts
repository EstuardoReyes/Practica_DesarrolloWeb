import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/models/publicacion';
import { Usuario } from 'src/app/models/user';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  public: Publicacion = {
    tipo: '',
    asunto: '',
    creador: '',
    fecha: '',
    
  };

  user: Usuario = {
    id : '',
    carnet: '',
    nombre: '',
    apellido: '',
    correo: '',
    pass: ''
};

  


  constructor() { }

  ngOnInit(): void {
  }

}
