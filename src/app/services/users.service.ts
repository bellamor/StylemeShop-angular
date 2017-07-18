import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { LinksCommon } from "../common/links.common";
import { User } from "../models/user";

import "rxjs/add/operator/toPromise";

@Injectable()
export class UsersService {

    private endpoint: string = `${LinksCommon.ENDPOINT}user/`;
    private headers: Headers = new Headers({ "Content-Type": "application/json" });

    constructor(
        private http: Http
    ) {}

    getUsers(): Promise<User[]> {
        return this.http.get(this.endpoint)
                        .toPromise()
                        .then(
                            response => response.json() as User[]
                        )
                        .catch(
                            error => this.errorHandler(error)
                        )
    }

    getUserById(id: number): Promise<User> {
        const URL = `${this.endpoint}${id}`;
        return this.http.get(URL)
                        .toPromise()
                        .then(
                            response => response.json() as User
                        )
                        .catch(
                            error => this.errorHandler(error)
                        )
    }

    registerUser(data: User): Promise<any> {
        return this.http.post(this.endpoint, data, this.headers)
                   .toPromise()
                   .then(
                       response => response.json()
                   )
                   .catch(
                       error => this.errorHandler(error)
                   )
    }

    deleteUser(id: number): Promise<any> {
        const URL = `${this.endpoint}${id}`;
        return this.http.delete(URL)
                        .toPromise()
                        .then(
                            response => response.json()
                        )
                        .catch(
                            error => this.errorHandler(error)
                        )
    }

    editUser(user: User): Promise<User> {
        const URL = `${this.endpoint}${user.id}`;
        return this.http.put(URL, user)
                        .toPromise()
                        .then(
                            response => response.json() as User
                        )
                        .catch(
                            error => this.errorHandler(error)
                        )
    }

    private errorHandler(err: Error) {
        console.error(err);
        return null;
    }
}