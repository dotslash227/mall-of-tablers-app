import { NgModule } from '@angular/core';
import { ProfileDataComponent } from './profile-data/profile-data';
import { GetProductComponent } from './get-product/get-product';
import { AddProductComponent } from './add-product/add-product';
@NgModule({
	declarations: [ProfileDataComponent,
    GetProductComponent,
    AddProductComponent],
	imports: [],
	exports: [ProfileDataComponent,
    GetProductComponent,
    AddProductComponent]
})
export class ComponentsModule {}
