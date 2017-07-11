import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LinksCommon } from '../common/links.common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesService {
    private headers: Headers = new Headers({ 'content-type': 'application/json' });
    private endpoint: string = `${LinksCommon.ENDPOINT}category/`;

    constructor(
        private http: Http,

    ) { }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.endpoint)
            .map(
            response => response.json() as Category[]
            )
            .catch(this.errorhandler)

    }
    getCategoryById(id: number): Observable<Category> {
        const URL = `${this.endpoint}${id}`;
        return this.http.get(URL)
            .map(
            response => response.json() as Category
            )
            .catch(this.errorhandler)

    }
    private errorhandler(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
