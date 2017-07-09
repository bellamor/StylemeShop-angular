import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { RegExpCommon } from "../common/regexp.common";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.styl']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  isFormSubmitted = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      id: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(RegExpCommon.EMAIL)]],
      password: [null, Validators.required]
    })
  }

  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.isFormSubmitted = false;
    this.registrationForm.controls['firstName'].markAsUntouched();
    this.registrationForm.controls['lastName'].markAsUntouched();
    this.registrationForm.controls['email'].markAsUntouched();
    this.registrationForm.controls['password'].markAsUntouched();

    if (this.registrationForm.valid) {
      let user = this.registrationForm.value;
      this.userService.registrationUser(user)
        .then(
        response => this.isFormSubmitted = true
        )
        .catch
        (
        response => this.isFormSubmitted = false
        );
      this.registrationForm.reset();
    }


  }
  clearControlsValidation(controlName) {
    this.registrationForm.controls[controlName].markAsUntouched();
  }
}
