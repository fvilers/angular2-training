import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AccountsRoutingModule } from './accounts-routing.module';
import { RegisterComponent } from './components';
import { AccountService } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AccountsRoutingModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    AccountService
  ]
})
export class AccountsModule { }
