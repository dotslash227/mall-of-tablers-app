import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { MemberListPage } from '../pages/member-list/member-list';

import { NavbarComponent } from '../components/navbar/navbar';
import { CardComponent } from '../components/card/card';
import { CategoryComponent } from '../components/category/category';
import { ReviewComponent } from '../components/review/review';
import { AlternateCardComponent } from '../components/alternate-card/alternate-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlockDirective } from '../directives/block/block';
import { TransparentButtonDirective } from '../directives/transparent-button/transparent-button';
import { CustomMaxWidthDirective } from '../directives/custom-max-width/custom-max-width';
import { ProfileModalComponent } from '../components/profile-modal/profile-modal';

import { LoginService } from '../services/login-service';
import { AlertService } from '../services/alert-service';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { BusinessListService } from '../services/business-list-service';
import { SignUpProvider } from '../providers/sign-up/sign-up';
import { LoremIpsumPage } from '../pages/lorem-ipsum/lorem-ipsum';
import { UserService } from '../services/user-service';
import { SearchProvider } from '../providers/search/search';
import { AdvertProvider } from '../providers/advert/advert';

class CallNumberMock extends CallNumber {
  callNumber(options) {
    return new Promise((resolve, reject) => {
      resolve("Number will be called!");
    })
  }
}

@NgModule({
declarations: [
  MyApp,
  HomePage,
  ListPage,
  NavbarComponent,
  CardComponent,
  CategoryComponent,
  ReviewComponent,
  ProfilePage,
  LoginPage,
  SearchPage,
  AlternateCardComponent,
  BlockDirective,
  TransparentButtonDirective,
  CustomMaxWidthDirective,
  ProfileModalComponent,
  MemberListPage,
  SignUpPage,
  LoremIpsumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NavbarComponent,
    CardComponent,
    CategoryComponent,
    ReviewComponent,
    ProfilePage,
    LoginPage,
    SearchPage,
    AlternateCardComponent,
    ProfileModalComponent,
    MemberListPage,
    SignUpPage,
    LoremIpsumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    AlertService,
    BusinessListService,
    SignUpProvider,
    CallNumber,
    UserService,
    SearchProvider,
    AdvertProvider
    // { provide: CallNumber, useClass: CallNumberMock }
  ]
})
export class AppModule {}
