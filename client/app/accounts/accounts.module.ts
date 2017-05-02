import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AccountsRoutingModule } from './accounts-routing.module';
import { RegisterComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AccountsRoutingModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class AccountsModule { }
