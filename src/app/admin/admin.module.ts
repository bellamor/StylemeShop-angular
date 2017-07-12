import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { CategoriesManagementComponent } from '../categories-management/categories-management.component';
import { UsersManagementComponent  } from '../users-management/users-management.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

import { CategoriesService } from '../services/categories.service';
import { AdminRoutingModule} from '../admin/admin-routing.module';
import { AdminService} from '../services/admin.service';
import { AuthService} from '../services/auth.service';
import { AuthGuardService} from '../services/auth-guard.service';

@NgModule({
    declarations: [
        AdminComponent,
        CategoriesManagementComponent,
        UsersManagementComponent,
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers:[AdminService,
    AuthService,
    AuthGuardService]
})
export class AdminModule { }
