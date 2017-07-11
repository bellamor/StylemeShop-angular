import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegistrationComponent } from '../registration/registration.component';
import { MyAccountComponent } from '../my-account/my-account.component';

const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Contact-Us', component: ContactUsComponent },
    { path: 'Register', component: RegistrationComponent },
    { path: 'MyAccount', component: MyAccountComponent },
    // not found always at the end
    { path: '**', component: NotFoundComponent }

]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class RoutingModule { }
