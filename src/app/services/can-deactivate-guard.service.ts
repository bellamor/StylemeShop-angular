import { Injectable } from "@angular/core";
import { 
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { Observable } from "rxjs/Observable";

import { CategoryComponent } from "../category/category.component";

// export interface CanComponentDeactivate {
//     canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
// }

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CategoryComponent> {
    canDeactivate(
        component: CategoryComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        console.log(route.paramMap.get("id"));
        console.log(state.url);

        if(!component.category || component.category.name === component.editCategory.name) {
            return true;
        }

        return confirm("Discard changes?");
        // return component.canDeactivate ? component.canDeactivate() : true;
    }
}