import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { LoremIpsumPage } from '../pages/lorem-ipsum/lorem-ipsum';
import {PrivacyPolicy} from './privacy-policy';
import { ProductPage } from '../pages/product/product';
import { MemberListPage } from '../pages/member-list/member-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  showLogout = false;
  aboutUs = 'National Round Table Conference (India) aims to unite pan India round tables on a singular platform. You can search for fellow round tablers, interact with them, network with them and further do business with them.';

  rootPage: any = LoginPage;
  profileData = {};

  pages: Array<{title: string, component: any, content: string}>;

  active;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, private events: Events) {

    this.initializeApp();
    // this.storage.clear();
    this.storage.get('profileData').then(
      (data) => {
        if (data != null || data != undefined) {
          this.profileData = data;
          // Debug Pages
          this.nav.setRoot(HomePage);
          // this.nav.setRoot(ListPage);
          this.showLogout = true;
        }
      }
    )

    // Update profile data
    this.events.subscribe('user:loggedin', (data) => {
      console.log('Event user Log', data);
      this.profileData = data;
      this.showLogout = true;      

      if (this.profileData['profilePic'] === null || this.profileData['profilePic'] === "null") {
        this.profileData['profilePic'] = './assets/imgs/profile.png';
      }
    });

    // used for navigation
    this.pages = [
      { title: 'Home', component: HomePage, content: 'asd' },
      { title: 'Business Listing', component: ListPage, content: 'asd' },
      { title: 'My Products', component: ProductPage, content: 'Information about user\'s products' },
      { title: 'Terms of Use', component: LoremIpsumPage, content: new PrivacyPolicy().getText() },
      { title: 'Privacy Policy', component: LoremIpsumPage, content: new PrivacyPolicy().getText() },
      { title: 'About Us', component: LoremIpsumPage, content: this.aboutUs }
    ];

    console.log('rootpage = ', this.rootPage.name);
    this.active = this.pages.filter(value => {
      console.log(value.component.name, this.rootPage.name);
      return value.component.name === this.rootPage.name
    });
    console.log('this.active = ', this.active);

    this.pages.forEach((val, i) => {
      if (val.component == this.rootPage) {
        this.active = val.title;
      }
    })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, {title: page.title, content: page.content});
    this.active = page.title;
  }

  goToProfile() {
    this.nav.setRoot(ProfilePage);
  }

  goToLogin() {
    this.nav.push(LoginPage);
  }

  openSearch() {
    this.nav.push(SearchPage);
  }

  updateProfileData(profileData) {
    this.profileData = profileData;
  }

  goToLogout() {
    this.storage.clear();
    this.nav.setRoot(LoginPage);
  }

}
