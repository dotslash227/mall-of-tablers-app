import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { AddProductComponent } from '../add-product/add-product';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent implements OnInit {

  text: string;
  @Input() title;
  addProductBtn;
  saveProductBtn;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello NavbarComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    console.log(this.title);
    if (this.title === 'Product') {
      this.addProductBtn = true;
    }

    if (this.title === 'Add a Product') {
      this.saveProductBtn = true;
    }
  }

  openSearch() {
    this.navCtrl.push(SearchPage);
  }

  openAddProductComponent() {
    this.navCtrl.push(AddProductComponent);
  }

}
