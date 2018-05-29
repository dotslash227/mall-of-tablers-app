import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { CardComponent } from './card/card';
import { CategoryComponent } from './category/category';
import { ReviewComponent } from './review/review';
import { AlternateCardComponent } from './alternate-card/alternate-card';
import { ProfileModalComponent } from './profile-modal/profile-modal';
@NgModule({
	declarations: [NavbarComponent,
    CardComponent,
    CategoryComponent,
    ReviewComponent,
    AlternateCardComponent,
    ProfileModalComponent],
	imports: [],
	exports: [NavbarComponent,
    CardComponent,
    CategoryComponent,
    ReviewComponent,
    AlternateCardComponent,
    ProfileModalComponent]
})
export class ComponentsModule {}
