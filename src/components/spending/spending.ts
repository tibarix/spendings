import { Component ,Input} from '@angular/core';

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


  owner_id: string;
  @Input() description: string = "";
  @Input() amount: number;
  createdAt: string;
  constructor() {
    this.description = "";
    this.amount = 0;
    this.createdAt ="";
  }

}
