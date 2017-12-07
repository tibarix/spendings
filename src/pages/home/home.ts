import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage:Storage,
              private auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  signOut(){
    this.auth.signOut();
    this.storage.set("user_logged","");
    this.navCtrl.setRoot(LoginPage);
  }
}
