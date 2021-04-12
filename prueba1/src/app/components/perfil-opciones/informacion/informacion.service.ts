import { Injectable , Input} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/user'; 

@Injectable({
  providedIn: 'root'
})
export class InformacionService {
 

  constructor( private readonly afs:AngularFirestore,public afAuth: AngularFireAuth) { 
    
  
  }

 // getUsuario(correo:string): Observable<string>{
    
   // return this.afs.doc<string>(`usuarios/${correo}`).valueChanges();


  //}

}
