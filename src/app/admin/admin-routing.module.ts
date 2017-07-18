import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { CategoriesManagementComponent } from "../categories-management/categories-management.component";
import { UsersManagementComponent } from "../users-management/users-management.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";

import { AuthGuardService } from "../services/auth-guard.service";

const ADMIN_ROUTES: Routes = [
    { 
        path: "", 
        component: AdminComponent,
        children: [
            {   
                path: "",
                children: [
                    { 
                        path: "categories",
                        component: CategoriesManagementComponent
                    },
                    { 
                        path: "users",
                        component: UsersManagementComponent
                    },
                    { 
                        path: "",
                        component: AdminDashboardComponent
                    }
                ]
            }
        ] 
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ADMIN_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }