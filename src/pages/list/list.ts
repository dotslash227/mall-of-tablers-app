import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberListPage } from '../member-list/member-list';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openCategory() {
    this.navCtrl.push(MemberListPage);
  }
}
