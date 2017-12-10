import { Component } from '@angular/core';
import { IonicPage, NavController, 
        NavParams ,LoadingController,
        ToastController
} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var x;
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
              public auth:AuthProvider) {

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
  ionViewWillEnter(){

    if(localStorage.getItem("user_logged")){
       this.navCtrl.setRoot(TabsPage);
    }
  }
  login(){
    this.loader.present();
    this.auth.login(this.user,(d)=>{
      if(d){
        this.loader.dismiss();
        localStorage.setItem("user_logged",d.uid);
        this.navCtrl.setRoot(TabsPage);
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
