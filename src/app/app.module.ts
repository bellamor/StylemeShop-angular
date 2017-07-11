import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthorizationComponent } from './authorization/authorization.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
// import { BoldDirective } from './directives/bold.directive';
// import { WhileDirective } from './directives/while.directive';
import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { SortingUsersPipe } from './pipes/sortUsers.pipe';
import { FilteringUsersPipe } from './pipes/filterUsers.pipe';
import { CatalogModule } from './catalog/catalog.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './modules/routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AuthorizationComponent,
    AppComponent,
    HomeComponent,
    // BoldDirective,
    // WhileDirective,
    FactorialPipe,
    JoinPipe,
    SortingUsersPipe,
    FilteringUsersPipe,
    ContactUsComponent,
    NotFoundComponent,
    RegistrationComponent,
    MyAccountComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpModule,
    CatalogModule,
    AdminModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],

})
export class AppModule { }

