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
  cardDetails;
  fullName:string = 'John Doe';
  company:string = 'ABC';
  mobile:string = '981818';

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private businessListService: BusinessListService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberListPage');
    this.getUsersInCategory(this.navParams.get('businessId'));
  }

  getUsersInCategory(id) {
    // Gets users in the Business API Failing
    this.businessListService.getUsersInBusiness(id)
    .subscribe(res => {
      this.cardDetails = res;
      this.fullName = res['userFirstName'] + res['userLastName'];
      this.company = res['company'];
      this.mobile = res['mobile'];
      console.log(this.cardDetails);
    }, error => console.log(error));
  }

  openProfileModal(details) {
    let profileModal = this.modalCtrl.create(ProfileModalComponent, {memberDetails: details});
    profileModal.present();
  }

  makeName(details) {
    return details.firstName + details.lastName;
  }

}
