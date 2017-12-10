import { Component } from '@angular/core';
import { IonicPage, AlertController, ModalController, NavController, ToastController, NavParams, PopoverController } from 'ionic-angular';
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
  private dataBaseSubscription: any;
  private dataLoaded = false;
  private toast;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private auth: AuthProvider, private modalCtrl: ModalController,
    public af: AngularFireDatabase, public toastCtrl: ToastController,
    public alertCtrl: AlertController, private network: Network) {
    this.toast = toastCtrl.create({
      duration: 3000,
      message: "Check your internet.",
      position: "bottom"
    });
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.toast.present();
    });
    // this.network.onConnect().subscribe(() => {
    //   this.spendings = this.af.list("/spendings");
    //   this.dataBaseSubscription = this.spendings.subscribe(d => {
    //     this.dataLoaded = true;
    //   });
    // });
  }

  ionViewDidLoad() {
    if (navigator.onLine) {
      this.spendings = this.af.list("/spendings", {
        query: {
          orderByChild:"owner_id",
          equalTo: localStorage.getItem("user_logged"),
        }
      });
      this.dataBaseSubscription = this.spendings.subscribe(d => {
        this.dataLoaded = true;
        localStorage.setItem("spendings",JSON.stringify(d));
      });
    } else {
      this.toast.present();
    }
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  add(e) {
    if (e) {
      let n = new Spending();
      n.amount = e.amount;
      n.description = e.description;
      n.owner_id = localStorage.getItem("user_logged");
      n.createdAt = (new Date()).getTime() + "";
      this.spendings.push(n);
    }
  }
  signOut() {
    this.auth.signOut();
    localStorage.setItem("user_logged", "");
    this.dataBaseSubscription.unsubscribe();
    this.navCtrl.setRoot(LoginPage);
  }
}
