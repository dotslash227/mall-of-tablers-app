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
    }

}