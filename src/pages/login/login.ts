import { Component } from '@angular/core';
import { IonicPage, NavController, 
        NavParams ,LoadingController,
        ToastController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private user:any = {
    email:"maayachi@gmail.com",
    password:"123123",
  };
  private error:string="";
  private loader : any;
  private toast:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loaderCtrl:LoadingController,public toastCtrl:ToastController,
              public auth:AuthProvider,private storage:Storage) {

    this.loader = this.loaderCtrl.create({
      content: "Please wait...",
    });
    this.toast = this.toastCtrl.create({
      position:"bottom",
      showCloseButton:true,
      closeButtonText:"OK",
      duration:3000
    });
  }

  ionViewDidLoad() {
    
  }
  login(){
    this.loader.present();
    this.auth.login(this.user,(d)=>{
      if(d){
        this.loader.dismiss();
        console.log(d.u.uid);
        this.storage.set("user_logged",d.u.uid);
        this.navCtrl.setRoot(HomePage);
      }
    },(e)=>{
      this.loader.dismiss();
      this.toast.data.message = e.code;
      this.toast.present();
    });
  }

  register(){
    this.navCtrl.push(RegisterPage); 
    return false;
  }
}
