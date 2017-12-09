import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSpendingModalPage } from './new-spending-modal';

@NgModule({
  declarations: [
    NewSpendingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSpendingModalPage),
  ],
})
export class NewSpendingModalPageModule {}
