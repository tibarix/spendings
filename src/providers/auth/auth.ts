import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {


  constructor(public authService:AngularFireAuth) {

  }

  async register(credentials:any,success,error){
    try{
      const res = await this.authService.auth.createUserWithEmailAndPassword(credentials.email,credentials.password)
      success(res);
      console.log(res)
    }catch(e){
      error(e);
    }
  }

  async login(credentials:any,success,error){
    try{
      const res = await this.authService.auth.signInWithEmailAndPassword(credentials.email,credentials.password)
      success(res)
    }catch(e){
      error(e)
    }
  }

  async signOut(){
      try{
        const res = await this.authService.auth.signOut();
      }catch(e){
        
      }
  }
}
