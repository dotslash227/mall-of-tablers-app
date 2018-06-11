import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberListPage } from '../member-list/member-list';
import { BusinessListService } from '../../services/business-list-service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  businessList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private businessListService: BusinessListService) {
  }

  ionViewDidLoad() {
    this.getBusinessList();
  }

  getBusinessList() {
    this.businessListService.getBusinessCategories().subscribe(
      (res) => Object.keys(res).map((key, i) => this.businessList[i] = res[key])
    );
  }

  openCategory(id) {
    this.navCtrl.push(MemberListPage, {businessId: id});
  }
}
