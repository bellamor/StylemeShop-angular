import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AdminService {
    private headers: Headers = new Headers({ 'content-type': 'application/json' });

    constructor(
        private http: Http,

    ) { }
}