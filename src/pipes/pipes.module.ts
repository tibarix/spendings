import { NgModule } from '@angular/core';
import { ReversePipe } from './reverse/reverse';
import { CapitalizerPipe } from './capitalizer/capitalize';
@NgModule({
	declarations: [ReversePipe,CapitalizerPipe],
	imports: [],
	exports: [ReversePipe,CapitalizerPipe]
})
export class PipesModule {}
