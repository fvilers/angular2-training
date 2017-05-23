import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ComparisonModule } from 'angular-comparison';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent, ProfileComponent, RegisterComponent } from './components';
import { AccountService, AccountGuardService, CurrentAccountService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ComparisonModule,
    AccountsRoutingModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  providers: [
    AccountService,
    AccountGuardService,
    CurrentAccountService
  ]
})
export class AccountsModule { }
