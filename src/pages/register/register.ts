import { Component } from '@angular/core';
import {
  IonicPage, NavController,
  NavParams, LoadingController, ToastController
} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private user: any = {
    email: "",
    password: ""
  }
  private error: string;
  private loader: any;
  private toast: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loaderCtrl: LoadingController, public toastCtrl: ToastController,
    private auth: AuthProvider) {
    this.loader = this.loaderCtrl.create({
      content: "Please wait...",
    });
    this.toast = this.toastCtrl.create({
      position: "bottom",
      showCloseButton: true,
      closeButtonText: "OK",
      duration: 3000
    });
  }

  ionViewDidLoad() {
  }

  register() {

    this.loader.present();
    this.auth.register(this.user,
    (d)=>{
      this.loader.dismiss();
      this.navCtrl.setRoot('HomePage');
    },
    (e) =>{
      this.loader.dismiss();
      this.toast.data.message = e.code;
      this.toast.present();
    })
  }
}
