import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberListPage } from '../member-list/member-list';
import { BusinessListService } from '../../services/business-list-service';
import { AdvertProvider } from '../../providers/advert/advert';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  businessList = [];
  totalItems = [];
  catImage;
  adverts = [];
  // paginate with 4 results at a time
  startIndex = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams, private businessListService: BusinessListService, private advertProvider: AdvertProvider) {
    this.getBusinessList();
    this.getAdverts();
  }

  ionViewDidLoad() {
    
  }

  getBusinessList() {

    this.businessListService.getBusinessCategories().subscribe(
      (res) => Object.keys(res).map((key, i) => {
        this.totalItems[i] = res[key];
        this.totalItems[i].categoryImage = (this.totalItems[i].categoryImage == 'null' || this.totalItems[i].categoryImage == null) ? null : 'http://malloftablers.com' + this.totalItems[i].categoryImage;
        this.businessList = this.totalItems.slice(0, this.startIndex);
        console.log(this.businessList);
        // this.businessList = this.totalItems.slice(0, Math.round(this.totalItems.length / 2));
      })
    );
  }

  getAdverts() {
    this.advertProvider.getAds().subscribe(res => {
      Object.keys(res).map((key, i) => {
        this.adverts[i] = res[key];
        this.adverts[i].adImage = 'http://malloftablers.com' + this.adverts[i].adImage;
      });
    })
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      
      if (this.businessList.length != this.totalItems.length) {
        let limitIndex;

        if (this.totalItems.length - this.startIndex < 4) {
          limitIndex = this.totalItems.length;
        } else {
          limitIndex = this.startIndex + 4;
        }

        for (let i = this.startIndex; i < limitIndex; i++) {
          this.businessList.push(this.totalItems[i])
        }

        this.startIndex = limitIndex;
        console.log(this.businessList);

        // for (let i = Math.round(this.totalItems.length / 2); i < this.totalItems.length; i++) {
        //   this.businessList.push(this.totalItems[i])
        // }
      } else {
        infiniteScroll.enable(false);
      }
      

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  openCategory(id, count) {
    this.navCtrl.push(MemberListPage, {businessId: id, count: count});
  }
}
