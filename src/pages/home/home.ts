import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { PopoverPage } from '../../models/Popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,public popoverCtrl:PopoverController,
    private auth: AuthProvider) {

  }

  ionViewDidLoad() {
    
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  signOut() {
    this.auth.signOut();
    this.storage.set("user_logged", {});
    this.navCtrl.setRoot(LoginPage);
  }
}
