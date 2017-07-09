import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegExpCommon } from "../common/regexp.common";
import { User } from "../models/user";

@Component({
    selector: "app-authorization",
    templateUrl: "./authorization.component.html",
    styleUrls: ["./authorization.component.styl"]
})

export class AuthorizationComponent implements OnInit {
   // @Input() user: User;

    @Output() onAlerted = new EventEmitter<string>();

    alertMessage: string;

    authorizationForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    showAlert(str: string) {
        this.alertMessage = str;
        this.onAlerted.emit(this.alertMessage);
    }

    ngOnInit() {
        this.authorizationForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
            password: [null, Validators.required]
        }) 
    }
}