import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
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
  loading;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService, private alertService: AlertService, private storage: Storage, private events: Events, private loadingCtrl: LoadingController) {
  }

  onSubmit(e) {
    e.preventDefault();

    this.presentLoading();

    const loginData = this.loginForm.value;
    this.loginService.login(loginData)
      .subscribe(
        (res) => {
          this.dismissLoading();

          console.log('Login Data: ', loginData);
          console.log('Login response', res);
          const loadingOptions = {
            spinner: 'dots',
          }
          let loading = this.loadingCtrl.create(loadingOptions);

          if (res['status'] == "failed") {
            // Dismiss loading controller
            loading.dismiss();
            this.alertService.presentAlert('Invalid Login', 'Login credentials are incorrect.');
          } else {
            // Dismiss loading controller
            loading.dismiss();
            this.profileData['email'] = res['email'];
            this.profileData['username'] = loginData['username'];
            this.profileData['firstName'] = res['firstName'];
            this.profileData['lastName'] = res['lastName'];
            this.profileData['profilePic'] = res['profilePic'];
            this.storage.set('profileData', this.profileData);
            this.events.publish('user:loggedin', this.profileData);
            this.navCtrl.setRoot(HomePage);
          }
          
        },
        (error) => {
          this.dismissLoading();

          console.log(error.error);
          this.alertService.presentAlert(error.status.toString(), 'Error! Check console.')
        });

    // Dummy login service
    // this.loginService.fakeLogin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navCtrl.length(), this.navCtrl.getViews());
    if (!this.navCtrl.canGoBack()) {
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
}
