import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { CanDeactivateGuardService} from '../services/can-deactivate-guard.service'
const CATALOG_ROUTES: Routes = [
    {
        path: 'Catalog',
        component: CatalogComponent,
        children: [
            {
                path: ':id',
                component: CategoryComponent,
                canDeactivate:[CanDeactivateGuardService]
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
