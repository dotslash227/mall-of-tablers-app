import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchProvider } from "../../providers/search/search";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchProvider: SearchProvider) {
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
      console.log(res);
    }, error => console.log(error))
  }

}
