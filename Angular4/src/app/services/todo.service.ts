import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UrlService} from './url.service';

@Injectable()
export class TodoService {
    url = 'http://84.39.44.181:3000';
    private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http,  private urlservice : UrlService) {
    }

    add(user): Observable<any> {
        return this.http.post(this.urlservice.url + '/api/todo', JSON.stringify(user), this.options);
    }
    getListTodo(): Observable<any> {
        return this.http.get(this.urlservice.url + '/api/todo').map(res => res.json());
    }
    editTodo(user): Observable<any> {
        return this.http.put(this.urlservice.url + `/api/todo/${user._id}`, JSON.stringify(user), this.options);
    }
    deleteTodo(user): Observable<any> {
        return this.http.delete(this.urlservice.url + `/api/todo/${user._id}`, this.options);
    }



}
