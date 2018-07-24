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
  totalItems = [];
  catImage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private businessListService: BusinessListService) {
    this.getBusinessList();
  }

  ionViewDidLoad() {
    
  }

  getBusinessList() {

    this.businessListService.getBusinessCategories().subscribe(
      (res) => Object.keys(res).map((key, i) => {
        this.totalItems[i] = res[key];
        this.totalItems[i].categoryImage = (this.totalItems[i].categoryImage == 'null' || this.totalItems[i].categoryImage == null) ? null : 'http://malloftablers.com' + this.totalItems[i].categoryImage;
        this.businessList = this.totalItems.slice(0, Math.round(this.totalItems.length / 2));
      })
    );
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      
      if (this.businessList.length != this.totalItems.length) {
        for (let i = Math.round(this.totalItems.length / 2); i < this.totalItems.length; i++) {
          this.businessList.push(this.totalItems[i])
        }
      } else {
        infiniteScroll.enable(false);
      }
      

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  openCategory(id) {
    this.navCtrl.push(MemberListPage, {businessId: id});
  }
}
