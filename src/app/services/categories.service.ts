import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { LinksCommon } from "../common/links.common";
import { Category } from "../models/category";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CategoriesService {

    private endpoint: string = `${LinksCommon.ENDPOINT}category/`;
    private headers: Headers = new Headers({ "Content-Type": "application/json" });

    constructor(
        private http: Http
    ) {}

    getCategories(): Promise<Category[]> {
        return this.http.get(this.endpoint)
                        .toPromise()
                        .then(
                            response => response.json() as Category[]
                        )
                        .catch(
                            error => this.promiseErrorHandler(error)
                        )
    }

    getCategoryById(id: any): Promise<Category> {
        const URL = `${this.endpoint}${id}`;
        return this.http.get(URL)
                        .toPromise()
                        .then(
                            response => response.json() as Category
                        )
                        .catch(
                            error => this.promiseErrorHandler(error)
                        )
    }

    addCategory(data: Category): Promise<any> {
        return this.http.post(this.endpoint, data, this.headers)
                   .toPromise()
                   .then(
                       response => response.json()
                   )
                   .catch(
                       error => this.promiseErrorHandler(error)
                   )
    }

    deleteCategory(id: number): Promise<any> {
        const URL = `${this.endpoint}${id}`;
        return this.http.delete(URL)
                        .toPromise()
                        .then(
                            response => response.json()
                        )
                        .catch(
                            error => this.promiseErrorHandler(error)
                        )
    }

    editCategory(Category: Category): Promise<any> {
        const URL = `${this.endpoint}${Category.id}`;
        return this.http.put(URL, Category)
                        .toPromise()
                        .then(
                            response => response.json()
                        )
                        .catch(
                            error => this.promiseErrorHandler(error)
                        )
    }

    private promiseErrorHandler(error: Error) {
        console.error(error);
        return null;
    }

    // private observableErrorHandler(error: Response | any) {
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || "";
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }
}