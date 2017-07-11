import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

const ADMIN_ROUTES: Routes = [
    {
        path: 'Admin',
        component: AdminComponent,
        children: [
        ]
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(ADMIN_ROUTES)],
        exports: [RouterModule]
    }
)

export class AdminRoutingModule {

}
