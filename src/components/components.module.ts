import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { CardComponent } from './card/card';
import { CategoryComponent } from './category/category';
import { ReviewComponent } from './review/review';
import { AlternateCardComponent } from './alternate-card/alternate-card';
@NgModule({
	declarations: [NavbarComponent,
    CardComponent,
    CategoryComponent,
    ReviewComponent,
    AlternateCardComponent],
	imports: [],
	exports: [NavbarComponent,
    CardComponent,
    CategoryComponent,
    ReviewComponent,
    AlternateCardComponent]
})
export class ComponentsModule {}
