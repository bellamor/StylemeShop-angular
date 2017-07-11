import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { CategoryComponent } from '../category/category.component';
import { CategoriesService } from '../services/categories.service';
import { CatalogRoutingModule} from '../catalog/catalog-routing.module';

@NgModule({
    declarations: [
        CatalogComponent,
        CategoryComponent
    ],
    imports: [
        CommonModule,
        CatalogRoutingModule
    ],
    providers:[CategoriesService]
})
export class CatalogModule { }
