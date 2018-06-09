import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  profileData = {
    username: 'jdoe321', 
    firstName: 'John',
    lastName: 'Doe',
    email: 'john_doe@abc.com', 
    mobile: '8888999900', 
    companyName: 'TEKSYS', 
    companyPhone: '444-222', 
    add1: '221B Baker Street', 
    add2: 'London', 
    state: 'England', 
    pincode: '9999', 
    categoryId: '2'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('profileData')
    .then((data) => this.setProfileData(data));
  }

  setProfileData(newData) {
    for (let key in newData) {
      this.profileData[key] = newData[key];
    }
  }

  

}
