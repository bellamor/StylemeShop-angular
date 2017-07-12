import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CatalogComponent } from '../catalog/catalog.component';

const CATALOG_ROUTES: Routes = [
    {
        path: 'Catalog',
        component: CatalogComponent,
        children: [
            {
                path: ':id',
                component: CategoryComponent,
                    
                data: {
                breadcrumb: "Category"
                }
            }
        ]
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(CATALOG_ROUTES)],
        exports: [RouterModule]
    }
)

export class CatalogRoutingModule {

}
