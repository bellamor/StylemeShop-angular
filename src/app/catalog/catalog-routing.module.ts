import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CatalogComponent } from '../catalog/catalog.component';

const CATALOG_ROUTES: Routes = [
    {
        path: "catalog",
        component: CatalogComponent,
        children: [
            {
                path: ':id',
                component: CategoryComponent
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

export class CatalogRoutingModule {

}
