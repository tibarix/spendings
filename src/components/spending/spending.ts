import { Component } from '@angular/core';

/**
 * Generated class for the SpendingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'spending',
  templateUrl: 'spending.html'
})
export class Spending {


  id: string;
  description: string;
  amount: number;
  createdAt: Date;
  constructor() {
    this.description = "SXR";
    this.amount = 10;
    this.createdAt = new Date();
  }

}
