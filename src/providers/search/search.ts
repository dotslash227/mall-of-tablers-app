import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  searchFor(searchTerm) {
    return this.http.post('http://malloftablers.com/apis/search', searchTerm);
  }

}
