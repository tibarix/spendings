import { Component, ViewChild,ElementRef,Output ,EventEmitter} from '@angular/core';

/**
 * Generated class for the NewSpendingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'new-spending',
  templateUrl: 'new-spending.html'
})
export class NewSpendingComponent {

  @Output() add: EventEmitter<any> = new EventEmitter();
  
  description;
  amount;

  constructor() {
  }
  ok(){
    if(this.amount){
      this.add.emit({description:this.description,amount:this.amount});
      this.description = "";
      this.amount = "";
    }else{

    }
  }
}
