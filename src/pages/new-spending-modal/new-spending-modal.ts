import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import{ Spending } from "../../components/spending/spending";
/**
 * Generated class for the NewSpendingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-spending-modal',
  templateUrl: 'new-spending-modal.html',
})
export class NewSpendingModalPage {

  spending:Spending;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
    this.spending = new Spending();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSpendingModalPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  addNewSpending(){
    console.log()
  }
}
