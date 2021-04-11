import { Injectable , Input} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Usuario } from 'src/app/models/user'; 

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
  private UsuariosCollection: AngularFirestoreCollection<Usuario>

  constructor( private readonly afs:AngularFirestore,public afAuth: AngularFireAuth) { 
    this.UsuariosCollection = afs.collection<Usuario>("usuarios");
    
  
  }

  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise();


}}
