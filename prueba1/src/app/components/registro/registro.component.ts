import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { FormControl } from '@angular/forms';
import { RegistroService } from './registro.service'
@Component ({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    private isEmail = /[0-9]*\@ingenieria\.usac\.edu\.gt/;
    user: Usuario = {
        id : '',
        carnet: '',
        nombre: '',
        apellido: '',
        correo: '',
        pass: ''
    };

    constructor(private  usuariosSvc: RegistroService){}

    ngOnInit(): void {}

    registrarUsuario(){
        console.log(this.user);
        
        const usuario = this.user;
        const usuarioID = this.user.carnet;
        this.usuariosSvc.onSaveUsuario(usuario);
        
    }
}