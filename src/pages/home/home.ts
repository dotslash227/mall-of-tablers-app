import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { NavController, ModalController } from 'ionic-angular';
import { ProfileModalComponent } from '../../components/profile-modal/profile-modal';
import { MemberListPage } from '../member-list/member-list';
import { ListPage } from '../list/list';
import { ProductPage } from '../product/product';
import { LoremIpsumPage } from '../lorem-ipsum/lorem-ipsum';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  aboutUs = 'National Round Table Conference (India) aims to unite pan India round tables on a singular platform. You can search for fellow round tablers, interact with them, network with them and further do business with them.';
  title = "About NDRT24"
  profileData = {};
  showLogout = false;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private storage: Storage, private events: Events) {

    this.storage.get('profileData').then(
      (data) => {
        if (data != null || data != undefined) {
          this.profileData = data;
          // Debug Pages
          // this.navCtrl.setRoot(HomePage);
          // this.nav.setRoot(ListPage);
          // this.showLogout = true;
        }
      }
    )

    // Update profile data
    this.events.subscribe('user:loggedin', (data) => {
      console.log('Event user Log', data);
      this.profileData = data;
      this.showLogout = true;      

      if (this.profileData['profilePic'] === null || this.profileData['profilePic'] === "null") {
        this.profileData['profilePic'] = './assets/imgs/profile.png';
      }
    });

  }

  openProfileModal() {
    let profileModal = this.modalCtrl.create(ProfileModalComponent);
    profileModal.present();
  }

  openCategory() {
    this.navCtrl.push(MemberListPage, {title: 'Member List'});
  }

  openProfilePage(){
    this.navCtrl.setRoot(ProfilePage);
  }

  openBusinessListings(){
    this.navCtrl.push(ListPage);
  }

  openProducts(){
    this.navCtrl.push(ProductPage);
  }

  openAbout(){
    this.navCtrl.push(LoremIpsumPage, {"content":this.aboutUs, "title":this.title});
  }

}
