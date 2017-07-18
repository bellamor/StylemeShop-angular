import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CatalogComponent } from "./catalog.component";
import { CategoryComponent } from "../category/category.component";

import { CanDeactivateGuardService } from "../services/can-deactivate-guard.service";

import { CatalogResolverService } from "../services/catalog-resolver.service";

const CATALOG_ROUTES: Routes = [
    { 
        path: "catalog", 
        component: CatalogComponent,
        children: [
            {
                path: ":id",
                component: CategoryComponent,
                resolve: {
                    category: CatalogResolverService
                }
                // canDeactivate: [CanDeactivateGuardService]
            }
        ] 
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(CATALOG_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class CatalogRoutingModule { }