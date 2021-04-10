import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { FormControl } from '@angular/forms';

@Component ({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    user: Usuario = {
        id: 0,
        nombre: '',
        apellido: '',
        correo: '',
        pass: ''
    };

    constructor(){}

    ngOnInit(): void {}

    registrarUsuario(){
        console.log(this.user);
    }
}