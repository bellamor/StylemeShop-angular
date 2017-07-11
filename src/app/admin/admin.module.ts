import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { CategoriesService } from '../services/categories.service';
import { AdminRoutingModule} from '../admin/admin-routing.module';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers:[CategoriesService]
})
export class AdminModule { }
