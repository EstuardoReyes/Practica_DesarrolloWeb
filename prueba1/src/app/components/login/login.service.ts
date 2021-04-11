import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app'
import { User } from 'firebase'

@Injectable()
export class LoginService {
  
  

  constructor(public afAuth: AngularFireAuth) { }


  async login(email : string , password:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
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



