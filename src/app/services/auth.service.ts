import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

import { LinksCommon } from '../common/links.common';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;

    private endpoint = `${LinksCommon.ENDPOINT}login`

    constructor(
        private http: Http
    ) { }

    logIn(email: string, password: string): Observable<User> {
        const URL = `${this.endpoint}/${email}/${password}`
        return this.http.get(URL).
            map(
            response => {
                this.isLoggedIn = true;
                document.cookie = `email=${email};pass =${password}`
                return response.json() as User;
                
            }
            )
            .catch(
            error => {
                this.isLoggedIn = false;
                return this.errorHandler(error);
            }
            );
    }

    logOut(): void {
        this.isLoggedIn = false;
    }

    private errorHandler(err: any) {
        return Observable.throw(err);
    }
    

private  getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


}
