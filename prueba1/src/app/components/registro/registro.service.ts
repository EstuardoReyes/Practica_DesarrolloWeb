import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; //IMPORTAMOS ESTO QUE NOS PERMITIRA ACCEDER A LA BASE

import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/user'; //iMPORTAMOS LA INTERFACE QUE SE SUBIRA O DESCARGARA 

@Injectable({
    providedIn: 'root',

})
export class RegistroService {


    private UsuariosCollection: AngularFirestoreCollection<Usuario>;
    
    constructor(private readonly afs:AngularFirestore, public afAuth: AngularFireAuth) { //private readonly afs:AngularFirestore SIRVE PARA INDICAR QUE AFS SERA EL OBJETO DE BASE
        this.UsuariosCollection = afs.collection<Usuario>('usuarios') //USUARIOSCOLLECTION SERA LA COLLECCION CON EL NOMBRE USUARIOS
    }

    onSaveUsuario(usuario: Usuario): Promise<void>{
        return new Promise ( async (resolve,reject) => {
            try {
               console.log("guardo")
                const ids =  usuario.carnet;
                const data = {ids, ... usuario};  
                const result = await this.UsuariosCollection.doc(ids).set(data)  
                 
                resolve(result)
                
            } catch (error) {
                reject(error.message);
                
            }

        });
        
    }

    async register(email:string, pass:string){
        const result = await this.afAuth.createUserWithEmailAndPassword(email,pass);
        return result;
        console.log("hola")
    

    }


}