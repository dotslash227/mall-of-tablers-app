import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  getProductsByUserId(userId) {
    const body = {
      userId: userId
    }
    const url = 'http://malloftablers.com/apis/get-products';
    return this.http.post(url, body);
  }

  saveProductsDetail(data) {
    const url = 'http://malloftablers.com/apis/add-product';
    return this.http.get(url, data);
  }
}
