import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {

    }

    getUserDetails(id) {
        const uri = 'http://malloftablers.com/apis/getUser/' + id;
        return this.http.get(uri);
    }
}