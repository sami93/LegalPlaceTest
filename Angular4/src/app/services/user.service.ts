import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UrlService} from './url.service';

@Injectable()
export class UserService {
    url = 'http://84.39.44.181:3000';
    private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http,  private urlservice : UrlService) {
    }

    register(user): Observable<any> {
        return this.http.post(this.urlservice.url + '/api/user', JSON.stringify(user), this.options);
    }



    login(credentials): Observable<any> {
        return this.http.post(this.urlservice.url + '/api/login', JSON.stringify(credentials), this.options);
    }

    getUsers(): Observable<any> {
        return this.http.get(this.urlservice.url + '/api/users').map(res => res.json());
    }

    countUsers(): Observable<any> {
        return this.http.get(this.urlservice.url + '/api/users/count').map(res => res.json());
    }

    addUser(user): Observable<any> {
        return this.http.post(this.urlservice.url +'/api/user', JSON.stringify(user), this.options);
    }

    getUser(user): Observable<any> {
        return this.http.get(this.urlservice.url + `/api/user/${user._id}`).map(res => res.json());
    }

    editUser(user): Observable<any> {
        return this.http.put(this.urlservice.url + `/api/user/${user._id}`, JSON.stringify(user), this.options);
    }

    deleteUser(user): Observable<any> {
        return this.http.delete(this.urlservice.url + `/api/user/${user._id}`, this.options);
    }

}
