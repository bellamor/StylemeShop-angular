import { Injectable } from "@angular/core";
import { 
    CanActivate,
    CanActivateChild,
    CanLoad, 
    Router,
    Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot 
} from "@angular/router";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("AuthGuard#CanActivate called");
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    canLoad(route: Route) {
        let url = `${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        console.log("AuthGuard#CheckLogin called");
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;
        this.router.navigate(["/login"]);
        return false;
    }
    // getCookie(cname) {
    //     let name = cname + "=";
    //     let ca = document.cookie.split(';');
    //     for (let i = 0; i < ca.length; i++) {
    //         let c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
}