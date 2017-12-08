import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth"
import { Spending } from '../../models/Spending';
/*
  Generated class for the SpendingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpendingProvider {

  constructor(private _af:AngularFireAuth) {
    
  }
  makeSpending(spending:Spending){
    
  }
}
