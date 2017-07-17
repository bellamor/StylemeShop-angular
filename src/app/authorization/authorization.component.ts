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

export class AuthorizationComponent {//implements OnInit {
    // @Input() user: User;

    // @Output() onAlerted = new EventEmitter<string>();

    // alertMessage: string;

    // authorizationForm: FormGroup;

    // constructor(
    //     private formBuilder: FormBuilder
    // ) {}

    // showAlert(str: string) {
    //     this.alertMessage = str;
    //     this.onAlerted.emit(this.alertMessage);
    // }

    //ngOnInit() {
    //this.authorizationForm = this.formBuilder.group({
    //  email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
    //password: [null, Validators.required]
    //  } 
    //}
    message:string;
    constructor(
        public authService: AuthService,
        public router: Router
    ) { }

    logIn() {
        this.message = 'Logging in...';
        this.authService.logIn().subscribe(
            () => {
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    let redirect = this.authService.redirectUrl ?
                        this.authService.redirectUrl : '/Admin';

                    this.router.navigate([redirect])
                }
            }
        )
    }

    logOut()
    {
        this.authService.logOut();
    }

    setMessage()
    {
        this.message = `You are loged ${this.authService.isLoggedIn ? 'in' : 'out'}`
    }
}
