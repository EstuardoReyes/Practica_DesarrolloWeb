import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app'
import { User } from 'firebase'
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
 
  private enviarCorreoSubject = new Subject<string>();
  enviarCorreoObservable = this.enviarCorreoSubject.asObservable();
  
  

  constructor(public afAuth: AngularFireAuth) { 
  
  }
    
  async resetPass(email:string):Promise<void>{
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error)
    }
  }

  async login(email : string , password:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
  
      this.enviarCorreoSubject.next(email);
          } catch (error) {
      console.log(error)
    }
    
  }

  async logout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error)
    }
    
  }

  async register(email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password); 
    } catch (error) {
      console.log(error)
    }
    


  }
  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}



