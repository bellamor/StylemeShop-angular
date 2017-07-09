import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {
    private headers: Headers = new Headers({ 'content-type': 'application/json' });
    private loggedUserId: number;

    constructor(
        private http: Http,

    ) { }

    getUsers(): Observable<User[]> {
        const URL = './assets/users.json';
        return this.http.get(URL)
            .map(
            response => response.json() as User[]
            )
            .catch(
            error => this.errorHandler(error)
            )
    }

    registrationUser(data: User): Promise<any> {
        const URL = 'http://localhost:3000/api/user';
        return this.http.post(URL, data, this.headers)
            .toPromise()
            .then(
            response => {
                response = response.json()
                this.loggedUserId = response.json().insertId;
            }
            )
            .catch(
            error => this.errorHandler(error)
            )
    }

    getUsers2(): Promise<User[]> {
        const URL = 'http://localhost:3000/api/user';
        return this.http.get(URL)
            .toPromise()
            .then(
            response => response.json() as User[]
            )
            .catch(
            err =>
                this.errorHandler(err)
            );
    }
    getUsersById(id?: number): Promise<User> {
        //const URL = "./assets/users.json";
        console.log(this.loggedUserId);
        if (id == null && this.loggedUserId > 0) {
            id = this.loggedUserId;
        }
        if (id > 0) {
            const URL = "http://localhost:3000/api/user/" + id;
            return this.http.get(URL)
                .toPromise()
                .then(
                response => response.json() as User
                )
                .catch(
                err =>
                    this.errorHandler(err)
                );
        }
    }
    deleteUser(id: number): Promise<any> {
        //const URL = "./assets/users.json";
        const URL = "http://localhost:3000/api/user/$(id)";
        return this.http.delete(URL)
            .toPromise()
            .then(
            response => response.json()
            )
            .catch(
            err =>
                this.errorHandler(err)
            );
    }
    editUser(user: User): Promise<User> {
        //const URL = "./assets/users.json";
        const URL = "http://localhost:3000/api/user/$(user.id)";
        return this.http.put(URL, user)
            .toPromise()
            .then(
            response => response.json() as User
            )
            .catch(
            err =>
                this.errorHandler(err)
            );
    }
    private errorHandler(err: any) {
        return Observable.throw(err);
    }

    // addUser(firstName?: string, lastName?: string, email?: string, password?: number) {
    //     this.users.push({firstName: firstName, lastName: lastName, email:email, password:password});
    // }
    //  addUser(user: User) {
    //      let usr = user;
    //    if (usr.id === undefined || usr.id === null) {
    //      usr.id = this.users.length + 1;
    //    this.users.push(usr);
    // }
    // else {
    //  this.editUser(usr);
    // }
    // }

    // editUser(user: User) {
    //    let i: number = this.users.findIndex(item => item.id === user.id);
    //   if (i != -1) {
    //       this.users[i] = user;
    //  }
    // }
}
