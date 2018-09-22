import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

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

  constructor(private viewCtrl: ViewController, private navParams: NavParams,
  private callNumber: CallNumber) {
    console.log('Hello ProfileModalComponent Component');
    this.text = 'Hello World';

    this.memberDetails = this.navParams.get('memberDetails');
    console.log(this.memberDetails);
    
    // For the home page, since frequently contacted persons API does not exists
    if (this.memberDetails === undefined) {
      this.memberDetails = {
        addLine1:"96 Kapil Vihar",
        addLine2:"Pitampura",
        businessCategoryId:1,
        businessCategoryName:"Web Developer",
        city:"Delhi",
        companyName:"Ityukta CSPL",
        companyPhone:65000357,
        email:"dhruvarora@delhinerds.com",
        mobile:9311153299,
        pincode:11001,
        state:"Delhi",
        userFirstName:"John",
        userId:1,
        userLastName:"Doe",
        profilePic: "./assets/imgs/profile.png"
      }
    } else {
      this.memberDetails.profilePic = this.memberDetails.profilePic != 'null' ? 'http://malloftablers.com/' + this.memberDetails.profilePic : './assets/imgs/profile.png';
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  openDialer(number) {
    // console.log(number);
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launch Dialer', res))
    .catch(err => console.log(err));
  }

}
