import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchProvider } from "../../providers/search/search";
import { ProfileModalComponent } from '../../components/profile-modal/profile-modal';
import { MemberListPage } from '../member-list/member-list';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchForm = new FormGroup({
    searchTerm: new FormControl()
  })

  noCategoriesFound: boolean = false;
  noUsersFound: boolean = false;
  showList: boolean = false;
  categoriesRes;
  usersRes;

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchProvider: SearchProvider, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  dismiss() {
    this.navCtrl.pop();
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.searchForm.value);
    let searchTerm = this.searchForm.value;

    this.searchProvider.searchFor(searchTerm)
    .subscribe((res) => {
      this.noCategoriesFound = false;
      this.noUsersFound = false;

      console.log(res);

      this.categoriesRes = res['categories'];
      this.usersRes = res['users'];
      this.showList = true;
      if (this.categoriesRes.length == 0) {
        this.noCategoriesFound = true;
      }
      if (this.usersRes.length == 0) {
        this.noUsersFound = true;
      }
    }, error => console.log(error))
  }

  openCategory(id) {
    this.navCtrl.push(MemberListPage, {businessId: id});
  }

  openProfileModal(details) {
    let profileModal = this.modalCtrl.create(ProfileModalComponent, {memberDetails: details});
    profileModal.present();
  }

}
