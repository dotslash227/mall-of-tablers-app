import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ProfileModalComponent } from '../../components/profile-modal/profile-modal';
import { BusinessListService } from '../../services/business-list-service';
import { UserService } from "../../services/user-service";

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
  cardDetails = [];
  showCard: boolean = false;
  fullName:string;
  company:string = 'ABC';
  mobile:string = '981818';

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private businessListService: BusinessListService, private userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberListPage');
    // Get business ID from list.ts
    this.getUsersInCategory(this.navParams.get('businessId'));
  }

  getUsersInCategory(id) {
    this.businessListService.getUsersInBusiness(id)
    .subscribe(res => {
      console.log(res);
      res.map((e) => {
        this.userService.getUserDetails(e['userId'])
        .subscribe(userDetails => {
          e = userDetails;
        }, error => {
          console.log(error);
        }, () => {
          this.cardDetails.push(e);
        });
      });
    }, error => console.log(error),
    () => {
      console.log(this.cardDetails);
      console.log(this.cardDetails.length);
      this.showCard = this.navParams.get('count') > 0 ? true : false;
    });
  }

  openProfileModal(details) {
    console.log(details);
    let profileModal = this.modalCtrl.create(ProfileModalComponent, {memberDetails: details});
    profileModal.present();
  }

}
