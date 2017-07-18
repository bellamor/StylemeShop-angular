import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { CatalogComponent } from "./catalog.component";
import { CategoryComponent } from "../category/category.component";

import { CatalogRoutingModule } from "./catalog-routing.module";
import { CategoriesService } from "../services/categories.service";
import { CanDeactivateGuardService } from "../services/can-deactivate-guard.service";
import { CatalogResolverService } from "../services/catalog-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        CatalogRoutingModule,    
    ],
    declarations: [
        CatalogComponent,
        CategoryComponent
    ],
    providers: [
        CategoriesService,
        CanDeactivateGuardService,
        CatalogResolverService
    ]
})

export class CatalogModule { }
