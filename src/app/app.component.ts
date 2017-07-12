import { Component, ElementRef, AfterViewChecked, OnInit } from '@angular/core';
import { AuthorizationComponent } from "./authorization/authorization.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";

import { User } from "./models/user";
import { UserService } from './services/user.service';

export class NavItem {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent implements AfterViewChecked, OnInit {
  loggedUser: User;
  isLoginFormShown = false;
  isUserLoggedIn = false;
  loginElt: ElementRef;
  loginFormElt: ElementRef;
  title: string = "StyleMeShop";
  users: User[];
  navItems: NavItem[] = [
    { name: 'Home page', link: 'Home' },
    { name: 'Catalog', link: 'Catalog' },
    { name: 'Contact Us', link: 'Contact-Us' },
    { name: 'Admin', link: 'Admin' }
    
  ]

  constructor(
    private eltRef: ElementRef,
    private userService: UserService
  ) {

    this.loginElt = this.eltRef;
    this.loginFormElt = this.eltRef;
  }

  private findAncestor(el: any, cls: String) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) { };  // Linter: "while statements must be braces" what does it mean?
    return el;
  }

  showLoginForm(e: Event) {
    e.stopPropagation();
    this.loginFormElt.nativeElement = e.target;
    this.isLoginFormShown = true;
    document.addEventListener('click', this.hideLoginFormListener.bind(this));
  }

  private hideLoginFormListener(e: Event) {
    e.stopPropagation();
    if (!this.findAncestor(e.target, 'login-form')) {
      this.isLoginFormShown = false;
      document.removeEventListener('click', this.hideLoginFormListener);
    }
  }

  ngAfterViewChecked() {
    //this.loginFormElt.nativeElement = document.querySelector('app-authorization');
    //console.log('click');
  }

  ngOnInit() {

    // this.userService.getUsersById(null)
    //   .then(
    //   user => {
    //     if (user.id != undefined) {
    //       this.loggedUser = user;
    //       this.isUserLoggedIn = true;
    //     }
    //   }
    //   )
    //   .catch
    //   (
    //   response => this.isUserLoggedIn = false
    //   );
  }

  showAlert(str: string) {
    alert(str);
  }
}
