import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoremIpsumPage } from './lorem-ipsum';

@NgModule({
  declarations: [
    LoremIpsumPage,
  ],
  imports: [
    IonicPageModule.forChild(LoremIpsumPage),
  ],
})
export class LoremIpsumPageModule {}
