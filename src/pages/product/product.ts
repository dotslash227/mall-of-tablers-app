import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  myProducts;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private productProvider: ProductProvider,
    storage: Storage) {
      console.log(navCtrl.getPrevious())
      const listOfProducts = navParams.get('listOfProducts');
      if (!listOfProducts)
        storage.get('profileData')
        .then(this.getProductsByUserIdImpl.bind(this), err => console.error(err));
      else
        this.setMyProducts(listOfProducts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  getProductsByUserIdImpl(res) {
    let userId = res.userId;
    this.productProvider.getProductsByUserId(userId)
    .subscribe(res => {
      console.log(res);
      this.myProducts = res;
      this.myProducts = this.myProducts.map(value => {
        if (value['imageUrl'] === null){
          value["imageUrl"]='./assets/imgs/thumbnail.png';
        }
        else{
          value["imageUrl"]="http://www.malloftablers.com"+value["imageUrl"]
        }
        return value;
      });
      this.setMyProducts(this.myProducts.reverse());
    }, error => console.error(error));
  }

  setMyProducts(products) {
    this.myProducts = products;
  }

  updateProducts(event) {
    console.log(event);
    this.myProducts.push(event);
  }

}
