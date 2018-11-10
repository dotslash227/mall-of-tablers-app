import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Form, NavController, ToastController, LoadingController } from 'ionic-angular';
import {ProductProvider} from '../../providers/product/product';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-product',
  templateUrl: 'add-product.html'
})
export class AddProductComponent {

  text: string;
  loading;

  addProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  })

  constructor(private navCtrl: NavController,
  private productProvider: ProductProvider,
  private storage: Storage,
  private toastController: ToastController,
  private loadingCtrl: LoadingController) {
    console.log('Hello AddProductComponent Component');
  }

  onSubmit(event) {
    // event.preventDefault();
    this.presentLoading();
    console.log(this.addProductForm.value);
    let data = this.addProductForm.value;

    this.storage.get('profileData')
    .then( res => {
      data['userId'] = res.userId;
      this.productProvider.saveProductsDetail(data)
        .subscribe((res) => {
          this.dismissLoading();
          console.log(res);
          this.navCtrl.pop();
        }, err => {
          this.dismissLoading();
          console.error('saveProductDetail error!', err);
          this.toastMessage('Something went wrong. Try again later');
          this.navCtrl.pop();
        });
    },
    err => {
      this.dismissLoading();
      console.error('Storage error!', err);
      this.toastMessage('Something went wrong. Try again later');
      this.navCtrl.pop();
    });
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: ''
    })

    this.loading.present();
  }

  dismissLoading() {
    this.loading.dismiss();
  }

  toastMessage(message) {
    let toast = this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
