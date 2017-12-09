import { Component } from '@angular/core';
import { IonicPage, AlertController, ModalController, NavController, ToastController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Network } from '@ionic-native/network';
import { LoginPage } from '../login/login';
import { Spending } from "../../components/spending/spending";
import { NewSpendingModalPage } from "../new-spending-modal/new-spending-modal";
import { AuthProvider } from '../../providers/auth/auth';
import { PopoverPage } from '../../models/Popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private modal;
  private spendings: FirebaseListObservable<Spending[]>;
  private dataLoaded = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage, public popoverCtrl: PopoverController,
    private auth: AuthProvider, private modalCtrl: ModalController,
    public af: AngularFireDatabase, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private network: Network) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      
    });
    let connectSubscription = this.network.onConnect().subscribe(() => {
      this.spendings = this.af.list("/spendings");
      this.spendings.subscribe(d => {
        this.dataLoaded = true;
      },e =>{
        console.log(e)
      });
    });

  }

  ionViewDidLoad() {

  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  addNewSpending() {
    this.modal.present();
    this.modal.onDidDismiss(d => console.log("modal data ", d));
  }

  add(e) {
    if (e) {
      let n = new Spending();
      n.amount = e.amount;
      n.description = e.description;
      this.spendings.push(n);
    }
  }
  signOut() {
    this.auth.signOut();
    this.storage.set("user_logged", {});
    this.navCtrl.setRoot(LoginPage);
  }
}
