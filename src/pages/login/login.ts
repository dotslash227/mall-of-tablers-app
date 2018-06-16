import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login-service';
import { AlertService } from '../../services/alert-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  showBackBtn: boolean = true;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  profileData = {
    username: 'john.doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@abcd.com',
    mobile: '99999900',
    companyName: 'DelhiNerds',
    companyPhone: '999000',
    add1: 'Springworks',
    add2: 'Noida',
    state: 'UP',
    pincode: '999999',
    categoryId: '2',
};

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService, private alertService: AlertService, private storage: Storage, private events: Events) {
  }

  onSubmit(e) {
    e.preventDefault();

    const loginData = this.loginForm.value;
    this.loginService.login(loginData)
      .subscribe(
        (res) => {
          console.log('Login Data: ', loginData);
          console.log('Login response', res);

          if (res['status'] == "failed") {
            this.alertService.presentAlert('Invalid Login', 'Login credentials are incorrect.');
          } else {
            this.profileData['email'] = res['email'];
            this.profileData['username'] = loginData['username'];
            this.storage.set('profileData', this.profileData);
            this.events.publish('user:loggedin', this.profileData);
            this.navCtrl.setRoot(HomePage);
          }
        },
        (error) => {
          console.log(error.error);
          this.alertService.presentAlert(error.status, error.error)
        });

    // Dummy login service
    // this.loginService.fakeLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
    if (this.navCtrl.length() < 2) {
      this.showBackBtn = false;
      console.log('hide back btn');
    }
  }

  dismiss() {
    this.navCtrl.pop();
  }

  goToSignUp() {
    this.navCtrl.push(SignUpPage);
  }

}
