import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountGuardService } from './services';
import { LoginComponent, ProfileComponent, RegisterComponent } from './components';

const routes: Routes = [
  {
    path: 'accounts/register',
    component: RegisterComponent
  },
  {
    path: 'accounts/login',
    component: LoginComponent
  },
  {
    path: 'accounts/profile',
    canActivate: [AccountGuardService],
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
