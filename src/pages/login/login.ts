import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login-service';
import { AlertService } from '../../services/alert-service';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SignUpPage } from '../sign-up/sign-up';
import { ProfileDataComponent } from '../../components/profile-data/profile-data';
import { UserService } from '../../services/user-service';

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
  profileData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService, private alertService: AlertService, private storage: Storage, private events: Events, private loadingCtrl: LoadingController,
    private userService: UserService) {
      this.profileData = {};
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
            // this.profileData['email'] = res['email'];
            // this.profileData['username'] = loginData['username'];
            // this.profileData['firstName'] = res['firstName'];
            // this.profileData['lastName'] = res['lastName'];
            // this.profileData['profilePic'] = res['profilePic'];

            // Get user details from {userid}
            this.userService.getUserDetails(res['id']).subscribe(
              this.setProfileData.bind(this),
              err => console.log('userService error on login page', err)
            );

            
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

  setProfileData(res) {
    console.log('----setProfileData----');
    console.log('profileData', this.profileData);
    console.log('response', res);
    for (let key in res) {
      if (key === 'profilePic' && res[key] !== null) {
        res[key] = 'http://malloftablers.com/' + res[key];
      }

      if (key !== 'status') {
        this.profileData[key] = res[key];
      }
    }
    console.log('after profileData', this.profileData);
    console.log('----storing user data in localStorage----');
    this.storage.set('profileData', this.profileData);
    this.events.publish('user:loggedin', this.profileData);
  }

}
