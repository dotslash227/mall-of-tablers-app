import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';

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
    CustomMaxWidthDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    AlternateCardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
