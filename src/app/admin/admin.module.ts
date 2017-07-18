import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin.component";
import { CategoriesManagementComponent } from "../categories-management/categories-management.component";
import { UsersManagementComponent } from "../users-management/users-management.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";

import { AdminRoutingModule } from "./admin-routing.module";

import { AdminService } from "../services/admin.service";
import { AuthService } from "../services/auth.service";
import { AuthGuardService } from "../services/auth-guard.service";

@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        CategoriesManagementComponent,
        UsersManagementComponent
    ],
    providers: [
        AdminService,
        AuthService,
        AuthGuardService
    ]
})

export class AdminModule {}
