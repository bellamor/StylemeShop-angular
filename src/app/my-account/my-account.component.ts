import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user";
import { UserService } from '../services/user.service';
import { RegExpCommon } from "../common/regexp.common";

@Component({
    selector: "app-my-account",
    templateUrl: "./my-account.component.html",
    styleUrls: ["./my-account.component.styl"]
})

export class MyAccountComponent implements OnInit {
    user: User;
    showErrorMessage = false;
    loggedUserForm: FormGroup;
    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {

    }
    ngOnInit() {
        this.loggedUserForm = this.formBuilder.group({
            id: [null],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
            password: [null, Validators.required]
        })
        this.userService.getUsersById(null)
            .then(
            user => {
                this.user = user;
                this.loggedUserForm.controls['id'].setValue
                    (this.user.id);
                this.loggedUserForm.controls['firstName'].setValue
                    (this.user.firstName);
                this.loggedUserForm.controls['lastName'].setValue
                    (this.user.lastName);
                this.loggedUserForm.controls['email'].setValue
                    (this.user.email);
                this.loggedUserForm.controls['password'].setValue
                    (this.user.password);
            }
            )
            .catch
            (
            response => this.showErrorMessage = true
            );
    }
    clearControlsValidation(controlName) {
        this.loggedUserForm.controls[controlName].markAsUntouched();
    }
}
