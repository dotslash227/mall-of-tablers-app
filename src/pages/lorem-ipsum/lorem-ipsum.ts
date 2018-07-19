import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoremIpsumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lorem-ipsum',
  templateUrl: 'lorem-ipsum.html',
})
export class LoremIpsumPage {
  title: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title') || 'Dummy';
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoremIpsumPage');
  }

}
