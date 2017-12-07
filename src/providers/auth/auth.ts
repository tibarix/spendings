import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Headers, Http} from "@angular/http";

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
  private LOGIN_URL = "https://reqres.in/api/users";
  private SIGNUP_URL = "https://reqres.in/api/register";
  private LOGOUT_URL = "http://localhost:8080/auth/logout";
  private headers = new HttpHeaders();
  


  constructor(public authService:AngularFireAuth) {
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
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

}
