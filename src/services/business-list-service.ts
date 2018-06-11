import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { Storage } from '@ionic/storage';

@Injectable()
export class BusinessListService {

    constructor(private http: HttpClient) {

    }

    getBusinessCategories() {
        const uri = 'http://malloftablers.com/apis/business-categories';
        return this.http.get(uri);
        // console.log(this.http.get(uri));
    }

    getUsersInBusiness(id) {
        const uri = "http://malloftablers.com/apis/get-business-category/" + id;
        return this.http.get(uri);
    }

}