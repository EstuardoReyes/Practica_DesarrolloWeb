import { Injectable , Input} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Usuario } from 'src/app/models/user'; 
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  private UsuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private servicioComunicacion: LoginService, public afAuth: AngularFireAuth, public usuarios: AngularFirestore) { 
    this.UsuariosCollection = usuarios.collection<Usuario>("usuarios");
    
  
  }


  getLista(){
    
    
    

    //const lista = await this.UsuariosCollection.doc()
  }

  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise();


}}
