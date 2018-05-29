import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ProfileModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-modal',
  templateUrl: 'profile-modal.html'
})
export class ProfileModalComponent {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello ProfileModalComponent Component');
    this.text = 'Hello World';
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
