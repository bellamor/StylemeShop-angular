import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { CanDeactivateGuardService} from '../services/can-deactivate-guard.service'
const CATALOG_ROUTES: Routes = [
    {
        path: "catalog",
        component: CatalogComponent,
        children: [
            {
                path: ':id',
<<<<<<< HEAD
                component: CategoryComponent
=======
                component: CategoryComponent,
                canDeactivate:[CanDeactivateGuardService]
>>>>>>> 3bc083191a22083089e270c25cc8c4998ef0b160
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
