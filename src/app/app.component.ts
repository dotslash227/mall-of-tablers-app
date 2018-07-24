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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  showLogout = false;

  rootPage: any = LoginPage;
  profileData = {
    username: 'jdoe321', 
    firstName: 'John',
    lastName: 'Doe',
    email: 'john_doe@abc.com', 
    mobile: '8888999900', 
    companyName: 'TEKSYS', 
    companyPhone: '444-222', 
    add1: '221B Baker Street', 
    add2: 'London', 
    state: 'England', 
    pincode: '9999', 
    categoryId: '2',
    profilePic: './assets/imgs/profile.png'
  };

  pages: Array<{title: string, component: any}>;

  active;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, private events: Events) {
    this.initializeApp();
    // this.storage.clear();
    this.storage.get('profileData').then(
      (data) => {
        if (data != null || data != undefined) {
          this.profileData = data;
          this.nav.setRoot(HomePage);
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
      { title: 'Home', component: HomePage },
      { title: 'Business Listing', component: ListPage },
      { title: 'Terms of Use', component: LoremIpsumPage },
      { title: 'Privacy Policy', component: LoremIpsumPage },
      { title: 'About Us', component: LoremIpsumPage }
    ];

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
    this.nav.setRoot(page.component, {title: page.title});
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