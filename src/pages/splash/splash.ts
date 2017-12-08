import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  private loader:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController, private storage: Storage) {
                  this.loader = this.loadingCtrl.create({
                    content: "Please wait...",
                  });
                 
  }
  ionViewDidLoad(){
     this.presentLoading();
  }
 presentLoading() {
    this.loader.present();
    this.storage.get("user_logged").then(
      d => {
        if(d){
          this.loader.dismiss();
          this.navCtrl.setRoot(HomePage);
        }else{
          this.loader.dismiss();
          this.navCtrl.setRoot(LoginPage);
        }
      }
    );
  }

}
