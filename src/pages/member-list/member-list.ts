import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ProfileModalComponent } from '../../components/profile-modal/profile-modal';
import { BusinessListService } from '../../services/business-list-service';

/**
 * Generated class for the MemberListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberListPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private businessListService: BusinessListService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberListPage');
    this.getUsersInCategory(this.navParams.get('businessId'));
  }

  getUsersInCategory(id) {
    // Gets users in the Business API Failing
    this.businessListService.getUsersInBusiness(id).subscribe(res => console.log(res), error => console.log(error));
  }

  openProfileModal() {
    let profileModal = this.modalCtrl.create(ProfileModalComponent);
    profileModal.present();
  }

}
