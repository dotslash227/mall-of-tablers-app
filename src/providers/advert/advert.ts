import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AdvertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvertProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AdvertProvider Provider');
  }

  getAds() {
    return this.http.get('http://malloftablers.com/apis/ads');
  }

}
