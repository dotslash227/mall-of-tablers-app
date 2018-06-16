import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessListService } from '../../services/business-list-service';
import { Observable } from "rxjs/Rx";
import { FormGroup, FormControl } from '@angular/forms';
import { AlertService } from '../../services/alert-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  categories = [];

  signUpForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    companyName: new FormControl(),
    companyPhone: new FormControl(),
    add1: new FormControl(),
    add2: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl(),
    categoryId: new FormControl()
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, private businessListService: BusinessListService, private signUpProvider: SignUpProvider, private alertService: AlertService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.businessListService.getBusinessCategories()
    .subscribe(
      (res) => {
        this.categories = Object.keys(res).map(i => res[i]);
      }
    );
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.signUpForm.value);

    this.signUpProvider.signUp(this.signUpForm.value)
    .subscribe((res) => {
      console.log(res['status']);
      if (res['status'] == "username-already-exists") {
        this.alertService.presentAlert('Sorry', 'You might have missed a detail!');
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    });
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
