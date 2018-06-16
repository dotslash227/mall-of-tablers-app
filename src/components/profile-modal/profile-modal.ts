import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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
  memberDetails;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    console.log('Hello ProfileModalComponent Component');
    this.text = 'Hello World';

    this.memberDetails = this.navParams.get('memberDetails');
    console.log(this.memberDetails);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
