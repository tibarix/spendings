import { NgModule } from '@angular/core';
import { Spending } from './spending/spending';
import { NewSpendingComponent } from './new-spending/new-spending';
@NgModule({
	declarations: [Spending,
    NewSpendingComponent],
	imports: [],
	exports: [Spending,
    NewSpendingComponent]
})
export class ComponentsModule {}
