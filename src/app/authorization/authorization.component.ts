import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegExpCommon } from "../common/regexp.common";
import { User } from "../models/user";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: "app-authorization",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.styl"]
})

export class AuthorizationComponent implements OnInit {
    // @Input() user: User;

    // @Output() onAlerted = new EventEmitter<string>();

    // alertMessage: string;


    // constructor(
    //     private formBuilder: FormBuilder
    // ) {}

    // showAlert(str: string) {
    //     this.alertMessage = str;
    //     this.onAlerted.emit(this.alertMessage);
    // }


    message: string;
    loginForm: FormGroup;
    user: User;

    constructor(
        public authService: AuthService,
        public router: Router,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
            password: [null, Validators.required]
        });

    }

    logIn() {
        this.message = 'Logging in...';
        let email = this.loginForm.controls['email'].value;
        let pass = this.loginForm.controls['password'].value;
        if (this.loginForm.valid) {
            this.authService.logIn(email, pass).subscribe(
                user => {
                    document.cookie = `email=${email};pass =${pass}`
                    this.user = user;
                    this.setMessage();
                    if (this.authService.isLoggedIn) {
                        let redirect: string = this.authService.redirectUrl ?
                            this.authService.redirectUrl : '/Admin';

                        this.router.navigate([redirect])
                    }
                },
                error => {
                    this.setErrorMessage();
                    return error;
                }
            )
        }

    }

    logOut() {
        this.authService.logOut();
        this.setMessage();
    }

    setMessage() {
        this.message = `You are loged ${this.authService.isLoggedIn ? 'in' : 'out'}`
    }
    setErrorMessage() {
        this.message = 'Login failed';
    }

}
