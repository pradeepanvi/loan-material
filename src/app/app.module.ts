import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { IssuedloanComponent } from './admin/issuedloan/issuedloan.component';
import { CreatenewloanComponent } from './admin/createnewloan/createnewloan.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { LoanstatusComponent } from './user/loanstatus/loanstatus.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoanService } from './loan.service';
import { EditprofileComponent } from './user/editprofile/editprofile.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { LoanEmiCalculatorComponent } from './loan-emi-calculator/loan-emi-calculator.component';
import { LaonDetailComponent } from './user/loanstatus/laon-detail/laon-detail.component';
import { MakePaymentComponent } from './user/loanstatus/make-payment/make-payment.component';
import { BorrowerComponent } from './admin/borrower/borrower.component';
import { LoanComponent } from './admin/borrower/loan/loan.component';
import { EmiComponent } from './admin/borrower/emi/emi.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    IssuedloanComponent,
    CreatenewloanComponent,
    UserprofileComponent,
    LoanstatusComponent,
    HomeComponent,
    EditprofileComponent,
    DashboardComponent,
    AdminLoginComponent,
   
    LoanEmiCalculatorComponent,
   
    LaonDetailComponent,
   
    MakePaymentComponent,
   
    BorrowerComponent,
   
    LoanComponent,
   
    EmiComponent,
    
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [AuthService, AuthGuard, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
