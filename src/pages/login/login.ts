import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login-service';
import { AlertService } from '../../services/alert-service';
import { HomePage } from '../home/home';

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
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService, private alertService: AlertService) {
  }

  onSubmit(e) {
    console.log(this.loginForm.value);
    e.preventDefault();

    // this.loginService.login(this.loginForm.value)
    //   .subscribe((res) => console.log(res),
    //     (error) => {
    //       this.alertService.presentAlert(error.status, error.error)
    //     });

    this.loginService.fakeLogin();
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
    if (this.navCtrl.length() < 2) {
      this.showBackBtn = false;
      console.log('hide back btn')
    }
  }

  dismiss() {
    this.navCtrl.pop();
  }

}
