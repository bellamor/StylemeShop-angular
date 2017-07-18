import { Injectable } from "@angular/core";
import {
    Router,
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from "@angular/router";

import { Category } from "../models/category";
import { CategoriesService } from "./categories.service";

@Injectable()
export class CatalogResolverService implements Resolve<Category> {
    constructor(
        private categoriesService: CategoriesService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Category> {
        let id = route.paramMap.get("id");

        return this.categoriesService.getCategoryById(id)
                                     .then(
                                         category => {
                                             if(category) {
                                                 return category;
                                             } else {
                                                 this.router.navigate(["/catalog"]);
                                                 return null;
                                             }
                                         }
                                     )
    }
}