import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/user';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {


    private UsuariosCollection: AngularFirestoreCollection<Usuario>;
    
    constructor(private readonly afs:AngularFirestore) {
        this.UsuariosCollection = afs.collection<Usuario>('usuarios')
    }

    onSaveUsuario(usuario: Usuario): Promise<void>{
        return new Promise ( async (resolve,reject) => {
            try {
                const ids =  usuario.carnet;
                const data = {ids, ... usuario};  
                const result = await this.UsuariosCollection.doc(ids).set(data)  
                resolve(result)
                
            } catch (error) {
                reject(error.message);
                
            }

        });
    }


}