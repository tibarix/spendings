import { Component } from '@angular/core';
import {ViewController,NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
@Component({
  template: `
    <ion-list>
      
      <ion-item (click)="signOut()">
        <ion-icon name="log-out" ></ion-icon> Sign out
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController,public navCtrl: NavController,
                private storage: Storage,private auth: AuthProvider) {}

  close() {
    this.viewCtrl.dismiss();
  }
  signOut() {
    this.auth.signOut();
    this.storage.set("user_logged", null);//
    this.navCtrl.setRoot(LoginPage);
  }
}