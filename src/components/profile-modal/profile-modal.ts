import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { ProductProvider } from '../../providers/product/product';
import { ProductPage } from '../../pages/product/product';

/**
 * Generated class for the ProfileModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-modal',
  templateUrl: 'profile-modal.html'
})
export class ProfileModalComponent {

  text: string;
  memberDetails;
  profilePic;
  productList:any = [];

  constructor(private viewCtrl: ViewController, private navParams: NavParams,
  private callNumber: CallNumber, private productService: ProductProvider,
  private navCtrl: NavController) {
    console.log('Hello ProfileModalComponent Component');
    this.text = 'Hello World';

    this.memberDetails = this.navParams.get('memberDetails');
    console.log(this.memberDetails);
    this.userProducts(this.memberDetails.userId);
    
    // For the home page, since frequently contacted persons API does not exists
    if (this.memberDetails === undefined) {
      this.memberDetails = {
        addLine1:"96 Kapil Vihar",
        addLine2:"Pitampura",
        businessCategoryId:1,
        businessCategoryName:"Web Developer",
        city:"Delhi",
        companyName:"Ityukta CSPL",
        companyPhone:65000357,
        email:"dhruvarora@delhinerds.com",
        mobile:9311153299,
        pincode:11001,
        state:"Delhi",
        userFirstName:"John",
        userId:1,
        userLastName:"Doe",
        profilePic: "./assets/imgs/profile.png"
      }
    }

    console.log(this.memberDetails['profilePic']);
    this.profilePic = './assets/imgs/profile.png';
    if (this.memberDetails['profilePic'] != null) {
      this.profilePic = 'http://malloftablers.com/' + this.memberDetails['profilePic'];
    }
  }

  userProducts(id) {
    this.productService.getProductsByUserId(id)
    .subscribe(res => {
      console.log(res);
      this.productList = res;
    })
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  openDialer(number) {
    // console.log(number);
    this.callNumber.callNumber(number, true)
    .then(res => console.log('Launch Dialer', res))
    .catch(err => console.log(err));
  }

  showProductPage() {
    this.navCtrl.push(ProductPage, {
      listOfProducts: this.productList
    });
  }

}
