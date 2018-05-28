import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProfileModalComponent } from '../../components/profile-modal/profile-modal';
import { MemberListPage } from '../member-list/member-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openProfileModal() {
    let profileModal = this.modalCtrl.create(ProfileModalComponent);
    profileModal.present();
  }

  openCategory() {
    this.navCtrl.push(MemberListPage, {title: 'Member List'});
  }

}
