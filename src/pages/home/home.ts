import { Component } from '@angular/core';
import { IonicPage, ModalController,NavController, NavParams,PopoverController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { NewSpendingModalPage } from "../new-spending-modal/new-spending-modal";
import { AuthProvider } from '../../providers/auth/auth';
import { PopoverPage } from '../../models/Popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private modal;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,public popoverCtrl:PopoverController,
    private auth: AuthProvider,private modalCtrl:ModalController) {
      this.modal = this.modalCtrl.create(NewSpendingModalPage);
      console.log(this.modal)
  }

  ionViewDidLoad() {
    
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  addNewSpending(){
    this.modal.present();
  }
  signOut() {
    this.auth.signOut();
    this.storage.set("user_logged", {});
    this.navCtrl.setRoot(LoginPage);
  }
}
