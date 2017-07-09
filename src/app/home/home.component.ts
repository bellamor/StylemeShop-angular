import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/// import { boldDirective } from '../directives/bold.directive';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { trigger, state, style, animate, transition } from '@angular/animations';

// declare var jQuery: JQueryStatic;

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
  animations: [
    trigger('userState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#333333'
      })),
      state('new', style({
        backgroundColor: '#EB1E55'
      })),
      state('remove', style({
        transform: 'scale(0)'
      })),
      transition('inactive => active', [
        style({
          backgroundColor: '#333333',
          transform: 'scale(1.1)'
        }),
        animate('300ms ease-in', style({
          backgroundColor: '#333333',
          transform: 'scale(1)'
        }))
      ]),
      transition('active => inactive', animate('300ms ease-out')),
      transition('* => new', animate('300ms ease-out')),
      transition('* => remove', animate('300ms ease-out'))


    ])
  ]
})

export class HomeComponent implements OnInit {
  // navItems: Array<string> = ['Home', 'Shop', 'Contact us'];
  // size: string = '24px';
  error: any;
  users: User[];
  selectedUser: User;
  // define userForm variable as FormGroup
  userForm: FormGroup;
  REG_EXP: any = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  isFormSubmitted = false;
  path: string[] = ['firstName'];
  order: number = 1; // 1 asc, -1 desc;
  // letters:Array<any> =['A','B', 'C','D','E','F','G'];

  // x: number = 3;
  constructor(
    // add methos which using formBuilder class to build date
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  toggleState() {
    this.selectedUser.state === 'inactive' ? this.selectedUser.state = 'active' : this.selectedUser.state = 'inactive';
  }
  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userForm = this.formBuilder.group({
      id: [this.selectedUser ? this.selectedUser.id : null],
      firstName: [this.selectedUser ? this.selectedUser.firstName : null, Validators.required],
      lastName: [this.selectedUser ? this.selectedUser.lastName : null, Validators.required],
      email: [this.selectedUser ? this.selectedUser.email : null, [Validators.required, Validators.pattern(this.REG_EXP)]],
      password: [this.selectedUser ? this.selectedUser.password : null, Validators.required],
      state: [this.selectedUser ? this.selectedUser.state : null]
    })
    // this.userService.getUsers().subscribe(
    //   data => this.users = data,
    //   err => {
    //   this.error = err;
    //     console.log(this.error)
    //   }
    // )
    this.userService.getUsers2().then(
      data => {
        this.users = data;
        this.users.forEach(user => user.state = 'inactive');
      }
    )
      .catch(
      e => console.error(e)
      )
  }

  onClick(e: Event) { }
  onSubmit(e: Event, form: FormGroup) {
    e.preventDefault();
    this.isFormSubmitted = true;
    this.userForm.controls['firstName'].markAsUntouched();
    this.userForm.controls['lastName'].markAsUntouched();
    this.userForm.controls['email'].markAsUntouched();
    this.userForm.controls['password'].markAsUntouched();
    this.userForm.controls['state'].markAsUntouched();

    if (this.userForm.valid) {
      const user = form.value;
      // user.state = 'new';
      this.users.push(user);
      // this.userService.addUser(user);
      this.isFormSubmitted = false;
      this.userForm.reset();
      this.selectedUser = user;
      this.toggleState();
    }
  }

  onSelect(usr: User) {
    this.selectedUser = usr;
    this.userForm.controls['id'].setValue
      (this.selectedUser.id);
    this.userForm.controls['firstName'].setValue
      (this.selectedUser.firstName);
    this.userForm.controls['lastName'].setValue
      (this.selectedUser.lastName);
    this.userForm.controls['email'].setValue
      (this.selectedUser.email);
    this.userForm.controls['password'].setValue
      (this.selectedUser.password);
    this.userForm.controls['state'].setValue
      (this.selectedUser.state);
    const timeoutId = setTimeout(() => {
      this.selectedUser.state = 'remove';
    }, 3000);
  }

  clearControlsValidation(name: string) {
    this.userForm.controls[name].markAsUntouched();
  }

  
  sortUsers(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    return false; // do not reload
  }
}
