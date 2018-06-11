import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SignUpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignUpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SignUpProvider Provider');
  }

  signUp(_data) {
    const uri = "http://malloftablers.com/apis/signup";
    return this.http.post(uri, JSON.stringify(_data));
  }

}
