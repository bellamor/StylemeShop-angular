import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { CategoryComponent } from '../category/category.component';
import { CategoriesService } from '../services/categories.service';
import { CatalogRoutingModule} from '../catalog/catalog-routing.module';
import { CanDeactivateGuardService} from '../services/can-deactivate-guard.service';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CatalogComponent,
        CategoryComponent
    ],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        ReactiveFormsModule
    ],
    providers:[CategoriesService, CanDeactivateGuardService]
})
export class CatalogModule { }
