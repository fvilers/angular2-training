import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { ComparisonModule } from 'angular-comparison';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent, RegisterComponent } from './components';
import { AccountService } from './services';

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
    LoginComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountsModule { }
