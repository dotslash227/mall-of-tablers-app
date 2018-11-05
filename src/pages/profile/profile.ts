import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileData = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('profileData')
    .then((data) => {
      this.setProfileData(data);
      console.log(data);
    });
  }

  setProfileData(newData) {
    for (let key in newData) {
      this.profileData[key] = newData[key];
    }

    // this.profileData['profilePic'] = 'http://malloftablers.com/' + this.profileData['profilePic'];
  }

}
