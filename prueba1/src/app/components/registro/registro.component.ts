import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { FormControl } from '@angular/forms';
import { RegistroService } from './registro.service'
import { LoginService} from './../login/login.service'
@Component ({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    private isEmail = /[0-9]*\@ingenieria\.usac\.edu\.gt/;
    user: Usuario = {
        carnet: '',
        nombre: '',
        apellido: '',
        correo: '',
        pass: ''
    };

    constructor(private  usuariosSvc: RegistroService, private loginSvc: LoginService){}

    ngOnInit(): void {}

    registrarUsuario(){
        console.log(this.user);
        
        const usuario = this.user;
        const usuarioID = this.user.carnet;
        this.usuariosSvc.onSaveUsuario(usuario);
        this.loginSvc.register(this.user.correo,this.user.pass)
    }
}