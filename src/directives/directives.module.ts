import { NgModule } from '@angular/core';
import { BlockDirective } from './block/block';
import { TransparentButtonDirective } from './transparent-button/transparent-button';
import { CustomMaxWidthDirective } from './custom-max-width/custom-max-width';
@NgModule({
	declarations: [BlockDirective,
    TransparentButtonDirective,
    CustomMaxWidthDirective],
	imports: [],
	exports: [BlockDirective,
    TransparentButtonDirective,
    CustomMaxWidthDirective]
})
export class DirectivesModule {}
