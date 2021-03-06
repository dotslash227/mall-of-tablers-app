import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { Storage } from '@ionic/storage';
 
@Injectable()
export class LoginService {
 
    constructor(private http: HttpClient, private storage: Storage) {
 
    }
 
    login(_data) {
        const uri = "http://malloftablers.com/apis/login";
        return this.http.post(uri, _data);
    }

    fakeLogin() {
        const fakeData = {
            username: 'dhruvarora',
            firstName: 'Dhruv',
            lastName: 'Arora',
            email: 'dhruvarora@delhinerds.com',
            mobile: '9882828282',
            companyName: 'DelhiNerds',
            companyPhone: '999000',
            add1: 'Springworks',
            add2: 'Noida',
            state: 'UP',
            pincode: '999999',
            categoryId: '2',
        };

        this.storage.set('profileData', fakeData);
    }
 
}